module.exports = {
  siteMetadata: {
    title: `Shakti Documentation`,
    description: `Documentation for Shakti: a universal React component toolkit`,
    author: `Brian Cooper`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "docs",
        path: `${__dirname}/src/content/`,
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
        icon: `assets/img/shakti_logo.png`,
      },
    },
  ],
};
