// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scripture Forge Help",
  favicon: "img/favicon.ico",
  url: "https://help.scriptureforge.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id", "fr", "es", "pt-BR", "de"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Scripture Forge Help",
        logo: {
          alt: "Scripture Forge Logo",
          src: "img/sf.svg",
        },
        items: [
          {
            href: "https://scriptureforge.org",
            label: "Back to Scripture Forge",
            position: "right",
          },
          { type: "localeDropdown", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} SIL International`,
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Change log",
                href: "https://community.scripture.software.sil.org/t/scripture-forge-announcements/1776",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Community site",
                href: "https://community.scripture.software.sil.org/c/scripture-forge/19",
              },
              {
                label: "Email support",
                href: "mailto:help@scriptureforge.org",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Use",
                href: "https://scriptureforge.org/terms",
              },
              {
                label: "Privacy policy",
                href: "https://scriptureforge.org/privacy",
              },
            ],
          },
        ],
      },
    }),
};

module.exports = config;
