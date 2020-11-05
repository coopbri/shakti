const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___index], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              path
            }
          }
        }
      }
    }
  `);

  // generate MDX pages
  const pages = result.data.allMdx.edges;
  pages.forEach(({ node }, idx) => {
    // previous page
    const previous = idx === pages.length - 1 ? null : pages[idx + 1];

    // next page
    const next = idx === 0 ? null : pages[idx - 1];

    createPage({
      // title from frontmatter
      title: node.frontmatter.title,
      // description from frontmatter
      description: node.frontmatter.description,
      // path from frontmatter
      path: node.frontmatter.path,
      // MDX content wrapper
      component: path.resolve(`./src/pages/Layout.tsx`),
      context: { id: node.id, previous, next },
    });
  });
};
