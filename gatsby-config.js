module.exports = {
  siteMetadata: {
    title: `vtapi.co`,
    description: `vtapi.co is a web development consultancy based in Vermont. Our goal is to improve understanding of web technologies.`,
    author: `@dirtybirdnj`,
  },
  plugins: [

    {
      resolve: "@plasmicapp/loader/gatsby",
      options: {
        projects: ["fsvVCJNXhN88gnWPeurk82"], // An array of project ids.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
