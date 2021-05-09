import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

export const query = graphql
`
    query SITE_INDEX_QUERY {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date
                }
                fields {
                    slug
                }
            }
        }
    }
`

const Blog: React.FC<PageProps> = (props: PageProps) => {
    console.log(props);
    return (
        <div>
            <div>
                <h1>{props.data.site.siteMetadata.title}</h1>
                <p>{props.data.site.siteMetadata.description}</p>
            </div>

            <div>
                {props.data.allMdx.nodes.map(({ excerpt, frontmatter, fields }) => (
                    <>
                        <Link to={fields.slug}>
                            <h1>{frontmatter.title}</h1>
                        </Link>
                        <p>{frontmatter.date}</p>
                        <p>{excerpt}</p>
                    </>
                    
                ))}
            </div>
        </div>
    )
};

export default Blog;
