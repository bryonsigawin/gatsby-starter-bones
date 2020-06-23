const path = require('path')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'GatsbyJS Starter',
    titleTemplate: '%s | GatsbyJS Starter',
    description: 'A barebones gatsby starter with everything I need.',
    author: 'Bryon Sigawin <zh3nlong@gmail.com>',
    siteUrl: 'https://github.com/bryonsigawin/gatsby-starter-bones',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/layouts'),
          '@context': path.resolve(__dirname, 'src/context'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: 'UA-12343123431-1',
    //     head: true,
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'starter',
    //     short_name: 'starter',
    //     start_url: '/',
    //     background_color: '#ffffff',
    //     theme_color: '#ffffff',
    //     display: 'standalone',
    //     icon: 'src/images/starter-icon.jpg', // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
