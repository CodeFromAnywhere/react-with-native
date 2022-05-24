// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React with Native",
  tagline: "Use HTML with tailwind in react-native",
  url: "https://reactwithnative.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "logo.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'Code-From-Anywhere', // Usually your GitHub org/user name.
  // projectName: 'sensible', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "../../docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Code-From-Anywhere/react-with-native/tree/main/apps/docs/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Code-From-Anywhere/react-with-native/tree/main/apps/docs/",
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
        title: "React with Native",
        logo: {
          alt: "Logo",
          src: "/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "Documentation",
          },

          {
            href: "https://github.com/Code-From-Anywhere/react-with-native",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Documentation",
                to: "/about",
              },
            ],
          },

          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/Code-From-Anywhere/react-with-native",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Code From Anywhere`,
      },
    }),
};

module.exports = config;
