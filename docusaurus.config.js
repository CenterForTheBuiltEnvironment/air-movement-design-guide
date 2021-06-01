/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CBE - Air Movement Design Guide',
  tagline: 'This guide enables architects, designers, and engineers to maximize the many benefits of integrating ceiling fans into building systems.',
  url: 'https://cbe-air-movement-design-guide.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CenterForTheBuiltEnvironment', // Usually your GitHub org/user name.
  projectName: 'air-movement-design-guide', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CBE - Air Movement Design Guide',
      logo: {
        alt: 'CBE logo',
        src: 'img/cbe_logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Design Guide',
        },
        {
          href: 'https://github.com/CenterForTheBuiltEnvironment/air-movement-design-guide',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Design guide',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Partners',
          items: [
            {
              label: "Center for the Built Environment",
              href: "https://cbe.berkeley.edu",
            },
            {
              label: "SinBerBEST",
              href: "https://sinberbest.berkeley.edu",
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
            {
              label: "GitHub",
              href: "https://github.com/CenterForTheBuiltEnvironment/air-movement-design-guide",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/FedericoTartar1",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/CenterForTheBuiltEnvironment/air-movement-design-guide',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CenterForTheBuiltEnvironment/air-movement-design-guide/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
