const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // generate MDX pages
  const pages = result.data.allMdx.edges;
  pages.forEach(({ node }) => {
    createPage({
      // slug from frontmatter
      path: node.frontmatter.path,
      // MDX content wrapper
      component: path.resolve(`./src/templates/Layout.tsx`),
      context: { id: node.id },
    });
  });
};
