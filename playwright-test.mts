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

// Navigate to the given URL, expand every sidebar category, and return the
// ordered list of sidebar links (title + href).
async function getSidebarLinks(
  url: string
): Promise<{ title: string; url: string }[]> {
  await page.goto(url);
  // The docs sidebar's accessible name ("Docs sidebar") is translated per
  // locale, so select it by its stable Docusaurus class instead of by name.
  const navigationLocator = page.locator("nav.menu");
  // Docusaurus mounts a category's child links lazily the first time it is
  // expanded, and keeps them in the DOM afterwards. Click every collapse
  // toggle, repeating until no new links appear, so that every category
  // (including any nested ones) is mounted. Expanding happens in place — it
  // does not navigate away. We must do this rather than trust the initial
  // (collapsed) render, otherwise the set of links we see depends on which
  // categories happen to be expanded.
  let linkCount = -1;
  for (let guard = 0; guard < 20; guard++) {
    for (const toggle of await navigationLocator
      .getByRole("button")
      .elementHandles()) {
      await toggle.click().catch(() => {});
    }
    const count = await navigationLocator.locator("a").count();
    if (count === linkCount) break;
    linkCount = count;
  }
  // Enumerate every sidebar link in DOM order. A CSS selector (rather than
  // getByRole("link")) also counts links inside a category that happens to be
  // collapsed, so the result is independent of the final expand/collapse
  // state; the caret toggles (href="#") are dropped.
  return await navigationLocator.locator("a").evaluateAll((anchors) =>
    anchors
      .map((a) => ({
        title: (a.textContent || "").trim(),
        url: a.getAttribute("href") || "",
      }))
      .filter((link) => link.url && link.url !== "#")
  );
}

// Localized sidebar links are prefixed with the locale (e.g. /fr/log-in). Strip
// that prefix so the link order can be compared against the default locale.
function stripLocalePrefix(url: string, locale: string): string {
  const prefix = `/${locale}`;
  if (url === prefix) return "/";
  if (url.startsWith(`${prefix}/`)) return url.slice(prefix.length);
  return url;
}

// Enumerate documents from the default-locale sidebar
const documents = await getSidebarLinks(rootPage);

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

    // Verify the sidebar link order matches the default locale
    const localeLinks = await getSidebarLinks(`${rootPage}/${locale}`);
    const expectedOrder = documents.map((doc) => doc.url);
    const actualOrder = localeLinks.map((link) =>
      stripLocalePrefix(link.url, locale)
    );
    const sameOrder =
      expectedOrder.length === actualOrder.length &&
      expectedOrder.every((url, index) => url === actualOrder[index]);
    if (sameOrder) {
      console.log(`Sidebar link order: ${GREEN}✓${RESET}`);
    } else {
      failed = true;
      console.log(`Sidebar link order: ${RED}✗${RESET}`);
      console.log(`  expected: ${JSON.stringify(expectedOrder)}`);
      console.log(`  actual:   ${JSON.stringify(actualOrder)}`);
    }

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
