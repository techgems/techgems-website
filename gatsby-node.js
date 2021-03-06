const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require(`slugify`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: `/posts${value}`,
    });
  }
};

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/blog/templates/post-template.tsx`
      ),
      context: { id: node.id },
    });
  });

  //Create Category pages.
  const categoriesQuery = await graphql(`
    query {
      site {
        siteMetadata {
          categories
        }
      }
    }
  `);

  const categories = categoriesQuery.data.site.siteMetadata.categories;
  categories.forEach(async (category) => {
    createPage({
      path: `category/${slugify(category.toLowerCase())}`,
      component: path.resolve(
        `./src/components/blog/templates/category-template.tsx`
      ),
      context: { category: category },
    });
  });
};
