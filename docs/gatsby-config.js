module.exports = {
  siteMetadata: {
    defaultTitle: `Shakti`,
    defaultDescription: `Documentation for Shakti, a universal React component toolkit.`,
    defaultImage: `./assets/img/shakti-logo.png`,
    author: `Brian Cooper`,
    baseUrl: `https://shaktilib.com`,
    // `locale` is used in Open Graph
    locale: `en_us`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/img/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shakti-docs`,
        short_name: `shakti-docs`,
        start_url: `/`,
        background_color: `#fffffc`,
        theme_color: `#fffffc`,
        display: `minimal-ui`,
        icon: `assets/img/shakti-logo.png`,
      },
    },
  ],
};
