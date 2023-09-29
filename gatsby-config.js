/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `geral images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `entrees`,
        path: `${__dirname}/src/images/entrees`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `appatizer`,
        path: `${__dirname}/src/images/appatizer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `smoothies`,
        path: `${__dirname}/src/images/smoothies`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `latte`,
        path: `${__dirname}/src/images/latte`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `coffee`,
        path: `${__dirname}/src/images/coffee`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dessert`,
        path: `${__dirname}/src/images/dessert`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sushi`,
        path: `${__dirname}/src/images/sushi`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `data`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Salsa`,
            file: `'https://fonts.googleapis.com/css2?family=Salsa&display=swap'`,
          },
        ],
        web: [
          {
            name: `Sonsie One`,
            file: `https://fonts.googleapis.com/css2?family=Sonsie+One:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
}
