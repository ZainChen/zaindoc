// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zaindoc',
  tagline: 'Dinosaurs are cool',
  url: 'https://zainchen.github.io',
  baseUrl: '/zaindoc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZainChen', // Usually your GitHub org/user name.
  projectName: 'zaindoc', // Usually your repo name.
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ZainChen/zaindoc/tree/main',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/ZainChen/zaindoc/tree/main',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'Zaindoc',
        logo: {
          alt: 'Zain Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'doc/intro',
            position: 'left',
            label: 'Doc',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'docSidebar',
            label: 'DocSidebar',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'note',
            label: 'Note',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/zain', label: 'Zain', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ZainChen/zaindoc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/doc/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      // async function pluginAlias(context, options) {
      //   return {
      //     name: 'zain-alias-plugin',
      //     configureWebpack() {
      //         return {
      //             resolve: {
      //                 alias: {
      //                   // 模块导入别名，指定后可以在文件之直接 import * from 'src/*';
      //                   // 在 tsconfig.json 中添加 "paths": {"src/*": ["./src/*"]}
      //                   src: path.resolve(__dirname, './src/'),
      //                 },
      //             },
      //         };
      //     },
      //   };
      // },
      // 插件可以直接像上面一样直接写在当前文件, 也可以独立文件编写
      ['./plugin/alias.js', {
        alias: {
          src: path.resolve(__dirname, './src/'),
        }
      }],
    ]
};

module.exports = config;
