#!/usr/bin/env -S deno run --allow-net --allow-read --allow-write --allow-run=bash,unzip --allow-env

// This script fetches the latest docs from Notion and translations from Crowdin,
// then copies the files to the appropriate directories.

// One current limitation is that when the docs from Notion are ahead of the translations, it can result in broken links between the two.
// A possible remediation would be to copy the English files to the other locales first, then overwrite those with the translated files.
// This doesn't fully solve the problem though, because metadata in the translated files may be different from the English files.

import { copy, readerFromStreamReader } from "jsr:@std/io";
import { walk } from "jsr:@std/fs/walk";

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
  { docusaurus: "de", crowdin: "de" },
  { docusaurus: "es", crowdin: "es-ES" },
  { docusaurus: "fr", crowdin: "fr" },
  { docusaurus: "pt-BR", crowdin: "pt-BR" },
  { docusaurus: "id", crowdin: "id" },
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
    const localizedGuidesDir = `${projectRoot}/translations/${locale.crowdin}/Guides`;
    const dest = `${projectRoot}/i18n/${locale.docusaurus}/`;
    const docusaurusDest = `${dest}docusaurus-plugin-content-docs`;
    const currentDest = `${docusaurusDest}/current`;

    await Deno.mkdir(dest, { recursive: true });
    console.log(`Creating directory ${currentDest}`);
    await Deno.mkdir(docusaurusDest, { recursive: true });
    await Deno.mkdir(currentDest, { recursive: true });

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

  // TODO Since we're no longer fetching from Notion, we can't delete the files in the docs directory
  // Consider updating this to use Crowdin as the source of truth for the docs
  const deleteEnglishFiles = false;
  if (deleteEnglishFiles) {
    const filesToKeep = ["getting-started.json", "getting-started.mdx"];

    for await (const dirEntry of Deno.readDir(docsDir)) {
      if (dirEntry.isFile && !filesToKeep.includes(dirEntry.name)) {
        await Deno.remove(`${docsDir}/${dirEntry.name}`);
      }
    }
  }

  // Recursively delete all files in the i18n directory, except for PNG files
  for await (const dirEntry of walk(`${projectRoot}/i18n`, { maxDepth: 1 })) {
    if (dirEntry.isFile && !dirEntry.name.endsWith(".png")) {
      await Deno.remove(dirEntry.path);
    }
  }
}

async function runChecks() {
  // Check for malformed links in the i18n files

  for await (const dirEntry of walk(`${projectRoot}/i18n`)) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
      const file = await Deno.readTextFile(dirEntry.path);
      for (const [index, line] of file.split("\n").entries()) {
        // Look for Markdown links that had a space added between the closing parenthesis and the opening bracket
        if (/\]\s+\(/.test(line)) {
          console.log(
            `%cFound malformed link in ${dirEntry.path} at line ${index + 1}`,
            "color: red"
          );
          console.log(line);
          console.log(
            " ".repeat(line.indexOf("]") + 1) + "%c^ Erroneous space",
            "color: blue"
          );
        }
      }
    }
  }

  // Check that all original docs have a corresponding translation, and vice versa
  const originalDocs = new Map<string, string>();
  const docsDir = `${projectRoot}/docs`;
  for await (const dirEntry of walk(docsDir)) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
      if (dirEntry.path.indexOf(docsDir) !== 0)
        throw new Error("Unexpected path");
      const relativePath = dirEntry.path.slice(docsDir.length + 1);
      originalDocs.set(relativePath, await Deno.readTextFile(dirEntry.path));
    }
  }

  for (const locale of helpLocales) {
    const i18nDir = `${projectRoot}/i18n/${locale.docusaurus}/docusaurus-plugin-content-docs/current`;

    const foundLocalizations = new Set<string>();

    for await (const dirEntry of walk(i18nDir)) {
      if (dirEntry.isFile && dirEntry.name.endsWith(".md")) {
        if (dirEntry.path.indexOf(i18nDir) !== 0)
          throw new Error("Unexpected path");

        const relativePath = dirEntry.path.slice(i18nDir.length + 1);

        foundLocalizations.add(relativePath);

        if (!originalDocs.has(relativePath)) {
          console.log(
            `%cNo original document found for i18n file ${dirEntry.path}`,
            "color: red"
          );
        }
      }
    }
    for (const [relativePath, content] of originalDocs) {
      if (!foundLocalizations.has(relativePath)) {
        console.log(
          `%cNo translation file found for ${relativePath} in ${i18nDir}`,
          "color: red"
        );
      } else {
        // Check that the front matter matches
        const translation = await Deno.readTextFile(
          `${i18nDir}/${relativePath}`
        );
        const frontMatterRegex = /^---\n(.*?)\n---/s;
        const originalFrontMatterMatch = content.match(frontMatterRegex);
        const translationFrontMatterMatch = translation.match(frontMatterRegex);
        if (originalFrontMatterMatch == null) {
          console.log(
            `%cNo front matter found in original document ${relativePath}`,
            "color: red"
          );
        }
        if (translationFrontMatterMatch == null) {
          console.log(
            `%cNo front matter found in translation ${relativePath}`,
            "color: red"
          );
        }

        if (
          originalFrontMatterMatch == null ||
          translationFrontMatterMatch == null
        )
          continue;

        const originalFrontMatter = originalFrontMatterMatch[1].split("\n");
        const translationFrontMatter =
          translationFrontMatterMatch[1].split("\n");

        if (originalFrontMatter.length !== translationFrontMatter.length) {
          console.log(
            `%cFront matter length mismatch in ${relativePath} for locale ${locale.docusaurus}`,
            "color: red"
          );
        }

        for (const [index, line] of originalFrontMatter.entries()) {
          // the title can change; everything else should match
          if (line.indexOf("title: ") === 0) continue;
          if (line !== translationFrontMatter[index]) {
            console.log(
              `%cFront matter mismatch in ${relativePath} for locale ${
                locale.docusaurus
              } at line ${index + 1}`,
              "color: red"
            );
            console.log(`%cOriginal:    ${line}`, "color: blue");
            console.log(
              `%cTranslation: ${translationFrontMatter[index]}`,
              "color: blue"
            );
          }
        }
      }
    }
  }
}

try {
  console.log("--- Deleting existing files ---");
  await deleteExistingFiles();
  console.log();

  console.log("--- Fetching latest translations from Crowdin ---");
  await saveLatestBuild();
  console.log();

  console.log("--- Copying files to i18n directory ---");
  await copyFiles();
  console.log();

  console.log("--- Running checks ---");
  await runChecks();
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
