module.exports = {
  siteMetadata: {
    title: `Shakti Documentation`,
    description: `Documentation for Shakti: a universal React component toolkit`,
    author: `Brian Cooper`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
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
