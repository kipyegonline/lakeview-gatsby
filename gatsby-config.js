module.exports = {
  siteMetadata: {
    title: `Lakeview Africa Gospel Church website`,
    description: `Lakeview AGC-Section 58, website`,
    author: `@kipyegonline`,
    siteUrl: `https://lakeviewagc.net`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lakeview AGC`,
        short_name: `Lakeview`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favecon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-YHJS1YC35L"],
      },
    },
  ],
}
