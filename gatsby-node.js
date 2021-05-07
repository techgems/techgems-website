const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
    
    //Get the slugs as metadata.
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/posts${value}`,
        })
    }

    //Use the MDX files as pages to be embedded in a post-template.
    const { createPage } = actions

    const result = await graphql
    (`
        query {
            allMdx {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }

    // Create blog post pages.
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/blog/post-template.tsx`),
            context: { id: node.id },
        })
    })
}