// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'METAsol Whitpaper',
  tagline: 'The Sentient Ledger Protocol & The Genesis of Quantum Yield',
  favicon: 'img/METAsol-Fevicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // docusaurus.config.js (लगभग Line 23 से शुरू)
  
  // Set the production url of your site here
  // यह आपकी GitHub Pages URL होगी
  url: 'https://gitbut.kalam5623.github.io', 
  
  // Set the /<baseUrl>/ pathname under which your site is served
  // यह आपके रिपॉज़िटरी का नाम है
  baseUrl: '/My-Documentation/', 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gitbut.kalam5623', // आपका GitHub यूज़रनेम
  projectName: 'My-Documentation', // आपके GitHub रिपॉज़िटरी का नाम
  
  onBrokenLinks: 'throw',

  // ... बाकी कोड ...
}; // <--- सुनिश्चित करें कि फ़ाइल यहाँ पर बंद हो रही है
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'METASOL',
        logo: {
          alt: 'METAsol Logo',
          src: 'img/logo.png',
        },
        items: [
    {
        // type को 'docSidebar' से 'doc' में बदलें
        type: 'doc', 
        docId: 'page1', 
        position: 'left',
        label: 'Whitepaper', 
    },
          //npm{to: '/blog', label: 'Blog', position: 'left'
        ],
      },
        footer: {
        style: 'dark',
        links: [
          // यह एरे अब खाली है, इसलिए 'Docs' और 'Tutorial' जैसे लिंक हट जाएंगे।
        ],

        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
