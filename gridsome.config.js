// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome Blog Starter',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Landing',
        baseDir: 'content/main',
        path: '*.md',
        refs: {
          lang: {
            typeName: 'Lang',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DataPart',
        baseDir: 'content/some-part-of-data',
        path: '*.md',
        refs: {
          lang: 'Lang',
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'TermsAndConditions',
        baseDir: 'content/terms-and-conditions',
        path: '*.md',
        route: '/:lang/terms-and-conditions',
        refs: {
          lang: 'Lang',
        },
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
}