#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write --allow-run=bash,unzip --allow-env

// This script fetches the latest docs from Notion and translations from Crowdin,
// then copies the files to the appropriate directories.

// One current limitation is that when the docs from Notion are ahead of the translations, it can result in broken links between the two.
// A possible remediation would be to copy the English files to the other locales first, then overwrite those with the translated files.
// This doesn't fully solve the problem though, because metadata in the translated files may be different from the English files.

import { copy, readerFromStreamReader } from "jsr:@std/io";

const projectId = Deno.env.get("CROWDIN_PROJECT_ID");
const apiKey = Deno.env.get("CROWDIN_API_KEY");
const projectRoot = Deno.cwd();

function ensureSuccess(response: Response) {
  if (!response.ok)
    throw new Error(
      `Request for ${response.url} failed with status code ${response.status}`
    );
}

async function saveLatestBuild() {
  // Create a new build
  const response = await fetch(
    `https://api.crowdin.com/api/v2/projects/${projectId}/translations/builds`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        skipUntranslatedStrings: false,
        skipUntranslatedFiles: false,
        exportApprovedOnly: false,
      }),
    }
  );

  ensureSuccess(response);
  const buildResponseBody = await response.json();

  const buildId = buildResponseBody.data.id;

  // Poll the build status
  let finished = false;
  while (finished === false) {
    console.log("Checking build status...");

    const buildStatusResponse = await fetch(
      `https://api.crowdin.com/api/v2/projects/${projectId}/translations/builds/${buildId}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    ensureSuccess(buildStatusResponse);
    const buildStatusBody = await buildStatusResponse.json();

    if (buildStatusBody.data.status === "finished") {
      finished = true;
    } else if (buildStatusBody.data.status === "inProgress") {
      console.log(
        `Build status: ${buildStatusBody.data.status}. Waiting for 5 seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } else {
      throw new Error(
        `Unexpected build status: ${buildStatusBody.data.status}`
      );
    }
  }

  console.log("Build finished!");

  const buildDownloadResponse = await fetch(
    `https://api.crowdin.com/api/v2/projects/${projectId}/translations/builds/${buildId}/download`,
    { headers: { Authorization: `Bearer ${apiKey}` } }
  );

  ensureSuccess(buildDownloadResponse);
  const buildDownloadBody = await buildDownloadResponse.json();
  const buildUrl = buildDownloadBody.data.url;

  // Download and save the file
  console.log("Downloading the build:");
  console.log(buildUrl);
  const downloadResponse = await fetch(buildUrl);
  ensureSuccess(downloadResponse);

  const buffer = await downloadResponse.bytes();

  const zipFilePath = `${projectRoot}/translations.zip`;
  await Deno.writeFile(zipFilePath, buffer);

  console.log("File downloaded and saved to", zipFilePath);

  // Extract the zip file
  const command = new Deno.Command("unzip", {
    args: ["-o", zipFilePath, "-d", `${projectRoot}/translations`],
    stdout: "piped",
    stderr: "piped",
  });

  const { code, stderr } = await command.output();
  if (code === 0) {
    console.log("Extraction completed successfully.");
  } else {
    const errorString = new TextDecoder().decode(stderr);
    console.error(errorString);
    throw new Error("ZIP extraction failed");
  }
}

const helpLocales = [
  {
    docusaurus: "de",
    crowdin: "de",
  },
  {
    docusaurus: "es",
    crowdin: "es-ES",
  },
  {
    docusaurus: "fr",
    crowdin: "fr",
  },
  {
    docusaurus: "pt-BR",
    crowdin: "pt-BR",
  },
] as const;

async function copyDirContentsRecursive(
  source: string,
  dest: string
): Promise<void> {
  for await (const dirEntry of Deno.readDir(source)) {
    if (dirEntry.isFile) {
      const oldFile = `${source}/${dirEntry.name}`;
      const newFile = `${dest}/${dirEntry.name}`;
      await Deno.copyFile(oldFile, newFile);
    } else if (dirEntry.isDirectory) {
      const newDir = `${dest}/${dirEntry.name}`;
      await Deno.mkdir(newDir, { recursive: true });
      await copyDirContentsRecursive(`${source}/${dirEntry.name}`, newDir);
    }
  }
}

async function copyFiles() {
  for (const locale of helpLocales) {
    const sourceDocsDir = `${projectRoot}/docs`;
    const localizedGuidesDir = `${projectRoot}/translations/${locale.crowdin}/Guides`;
    const dest = `${projectRoot}/i18n/${locale.docusaurus}/docusaurus-plugin-content-docs/current/`;

    await Deno.mkdir(dest, { recursive: true });

    console.log(`Copying files from ${sourceDocsDir} to ${dest}`);
    await copyDirContentsRecursive(sourceDocsDir, dest);

    console.log(`Copying files from ${localizedGuidesDir} to ${dest}`);
    await copyDirContentsRecursive(localizedGuidesDir, dest);
  }
}

async function cleanup() {
  await Deno.remove(`${projectRoot}/translations.zip`);
  await Deno.remove(`${projectRoot}/translations`, { recursive: true });
}

async function deleteExistingFiles() {
  const docsDir = `${projectRoot}/docs`;
  console.log(`Deleting most files in ${docsDir}`);
  // delete all files except 	docs/getting-started.json and docs/getting-started.mdx

  const filesToKeep = ["getting-started.json", "getting-started.mdx"];

  for await (const dirEntry of Deno.readDir(docsDir)) {
    if (dirEntry.isFile && !filesToKeep.includes(dirEntry.name)) {
      await Deno.remove(`${docsDir}/${dirEntry.name}`);
    }
  }

  const i18nDir = `${projectRoot}/i18n`;
  console.log(`Deleting ${i18nDir}`);
  await Deno.remove(i18nDir, { recursive: true });
}

async function fetchNotionDocs() {
  const child = new Deno.Command("bash", {
    args: ["pull_docs.sh"],
    stdout: "piped",
    stderr: "piped",
  }).spawn();

  copy(readerFromStreamReader(child.stdout.getReader()), Deno.stdout);
  copy(readerFromStreamReader(child.stderr.getReader()), Deno.stderr);

  const status = await child.status;

  if (!status.success) {
    const code = status.code;
    throw new Error(
      `Failed to fetch Notion docs. pull_docs.sh exited with code ${code}`
    );
  }
}

try {
  console.log("--- Deleting existing files ---");
  await deleteExistingFiles();
  console.log();

  console.log("--- Fetching latest docs from Notion ---");
  await fetchNotionDocs();
  console.log();

  console.log("--- Fetching latest translations from Crowdin ---");
  await saveLatestBuild();
  console.log();

  console.log("--- Copying files to i18n directory ---");
  await copyFiles();
  console.log();

  console.log("--- Completed successfully ---");
} catch (e) {
  console.error(e);
} finally {
  console.log("--- Cleaning up ---");
  await cleanup();
  console.log();
  console.log("--- Done ---");
}
