// This script will run checks on the localization files in the i18n directory
// and the original docs in the docs directory to ensure that anchors match

import { walk } from "jsr:@std/fs/walk";
import { HelpLocales, helpLocales } from "./locales.ts";
import { RegexValidation, regexValidations } from "./regex_validation.ts";

const projectRoot = Deno.cwd();

export async function runChecks() {
  // Check for malformed links in the i18n files
  console.log("--- Checking for malformed links ---");
  await checkMalformedLinks();
  console.log();

  // Check that all original docs have a corresponding translation with matching front mater, anchors, and images; and vice versa
  console.log("--- Checking english and localization docs for missing or mismatched front matter, anchors, and images ---");
  await checkDocsMatch();
  console.log();
}

async function checkDocsMatch() {
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
      //console.log(`%cChecking '${relativePath}' matches between 'en' and '${locale.docusaurus}'`, "color: pink");
      if (!foundLocalizations.has(relativePath)) {
        console.log(
        `%cNo translation file found for ${relativePath} in ${i18nDir}`,
        "color: red"
        );
      } else {
        const translation = await Deno.readTextFile(`${i18nDir}/${relativePath}`);
        const frontMatterRegex = regexValidations[0];
        const anchorRegex = regexValidations[1];
        const imageRegex = regexValidations[2];

        // Check that the front matter matches
        compareOriginalToTranslation(frontMatterRegex, content, translation, relativePath, locale);

        // Check that the anchors match
        if(!regexValidations[1].filesToSkip?.includes(relativePath)) {
          compareOriginalToTranslation(anchorRegex, content, translation, relativePath, locale);
        }

        // Check that the images match
        if(regexValidations[2].filesToSkip?.includes(relativePath)) {
          compareOriginalToTranslation(imageRegex, content, translation, relativePath, locale);
        }
      }
    }
  }
}

async function checkMalformedLinks() {
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
}

// TODO: Make this a generic function that takes in the regex and the locale
// TODO: Add image validation
function compareOriginalToTranslation(regex: RegexValidation, originalContent: string, translationContent: string, relativePath: string, locale: HelpLocales) {
  const originalMatch = originalContent.match(regex.expression);
  const translationMatch = translationContent.match(regex.expression);
  const capitalizedRegexMessage = regex.message.charAt(0).toUpperCase() + regex.message.slice(1);

  if (originalMatch == null) {
  console.log(
      `%cNo ${regex.message} found in original document ${relativePath}`,
      "color: red"
  );
  }
  if (translationMatch == null) {
    console.log(
        `%cNo ${regex.message} found in translation ${relativePath}`,
        "color: red"
    );
  }

  if (originalMatch == null || translationMatch == null) return;

  let original: string[] = [];
  let translation: string[] = [];
  if (regex.message === "front matter") {
    original = originalMatch[1].split("\n");
    translation = translationMatch[1].split("\n");
  }
  else {
    original = originalMatch;
    translation = translationMatch;
  }
  if (original.length !== translation.length) {
    console.log(
        `%c${capitalizedRegexMessage} length mismatch in ${relativePath} for locale ${locale.docusaurus}`,
        "color: red"
    );
  }
  // console.log(`%cOriginal:    ${original}`, "color: green");
  // console.log(`%cTranslation: ${translation}`, "color: green");
  for (const [index, line] of original.entries()) {
    // the title can change; everything else should match
    if (line.indexOf("title: ") === 0) continue;
    if (line !== translation[index]) {
      console.log(
      `%c${capitalizedRegexMessage} mismatch in ${relativePath} for locale ${
          locale.docusaurus
      }`,
      "color: red"
      );
      console.log(`%cOriginal:    ${line}`, "color: blue");
      console.log(
      `%cTranslation: ${translation[index]}`,
      "color: blue"
      );
    }
  }
}
