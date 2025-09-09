#!/usr/bin/env -S deno run --allow-sys --allow-net --allow-env --allow-read --allow-write --allow-run

import { chromium } from "npm:playwright";

const locales = ["en", "id", "fr", "es", "pt-BR", "de"];

let rootPage = Deno.args[0];

if (rootPage == null) {
  console.error("Usage: ./playwright-test.mts <rootPage>");
  Deno.exit(1);
} else if (rootPage[rootPage.length - 1] === "/") {
  rootPage = rootPage.slice(0, -1);
}

// Setup
const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(rootPage);

// Enumerate documents
// First, expand categories as long as there are any more to expand
const navigationLocator = page.getByRole("navigation", {
  name: "Docs sidebar",
});
let navigationButtonIndex = 0;
const navigationButton = navigationLocator.getByRole("button");
while (await navigationButton.nth(navigationButtonIndex).isVisible()) {
  await navigationButton.nth(navigationButtonIndex).click();
  navigationButtonIndex++;
}
// Now, enumerate all the pages in the sidebar with their urls
const sidebarLinks = navigationLocator.getByRole("link");
const sidebarLinksCount = await sidebarLinks.count();
const documents: { title: string; url: string }[] = [];
for (let i = 0; i < sidebarLinksCount; i++) {
  const link = sidebarLinks.nth(i);
  const url = await link.getAttribute("href");
  documents.push({ title: await link.textContent(), url });
}
// Log the documents
console.log(`Found ${documents.length} documents:`);
for (const doc of documents) {
  console.log(`- ${doc.title} (${doc.url})`);
}

function diff(a, b) {
  const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])];
  const differences = {};
  for (const key of keys) {
    if (a[key] !== b[key]) {
      differences[key] = {
        expected: a[key],
        actual: b[key],
      };
    }
  }
  return differences;
}

function areDifferent(a, b) {
  return Object.keys(diff(a, b)).length > 0;
}

let failed = false;
const overallResults = {};
const enResults = {};

// Color constants
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";

for (const locale of locales) {
  const longestTitleWidth = Math.max(
    ...documents.map((doc) => doc.title.length)
  );
  const longestUrlWidth = Math.max(...documents.map((doc) => doc.url.length));
  const headings = ["Page title", "URL", "Outcome"];
  const headingWidths = [
    longestTitleWidth,
    longestUrlWidth,
    headings[2].length,
  ];

  if (locale !== "en") {
    console.log(`\nChecking locale: ${locale}`);
    console.log(
      headings
        .map((heading, index) => heading.padEnd(headingWidths[index]))
        .join(" │ ")
    );
    console.log(
      "─".repeat(longestTitleWidth) +
        "─┼─" +
        "─".repeat(longestUrlWidth) +
        "─┼─" +
        "─".repeat(headings[2].length)
    );
  }

  for (const doc of documents) {
    const url =
      locale === "en"
        ? `${rootPage}${doc.url}`
        : `${rootPage}/${locale}${doc.url}`;
    await page.goto(url);
    if (
      await page.getByRole("heading", { name: "Page Not Found" }).isVisible()
    ) {
      throw new Error(`Page not found: ${url}`);
    }
    const counts = {
      links: await page.locator("main a").count(),
      images: await page.locator("main img").count(),
      admonitions: await page.locator("main .theme-admonition").count(),
      videos: await page.locator("main .player-wrapper").count(),
      italics: await page.locator("main em").count(),
      bold: await page.locator("main strong").count(),
      headings: await page
        .locator("main h1, main h2, main h3, main h4")
        .count(),
      listItems: await page.locator("main li").count(),
      // Double asterisks and underscores are used in Markdown and should not appear in rendered text
      doubleAsterisks:
        (await page.locator("body").textContent())!.split("**").length - 1,
      doubleUnderscores:
        (await page.locator("body").textContent())!.split("__").length - 1,
    };

    if (locale === "en") {
      enResults[doc.title] = counts;
    } else {
      const pass = !areDifferent(enResults[doc.title], counts);
      const differences = diff(enResults[doc.title], counts);
      if (!pass) failed = true;
      overallResults[doc.title] ??= {};
      overallResults[doc.title][locale] = pass;
      // pass will be with x or checkmark unicode character
      const indicator = pass ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
      console.log(
        `${doc.title.padEnd(longestTitleWidth)} │ ${doc.url.padEnd(
          longestUrlWidth
        )} │ ${indicator}` + (pass ? "" : JSON.stringify(differences))
      );
    }
  }
}

// Teardown
await context.close();
await browser.close();

console.table(overallResults);

if (failed) {
  console.error("Some tests failed.");
  Deno.exit(1);
} else {
  console.log("All tests passed successfully.");
  Deno.exit(0);
}
