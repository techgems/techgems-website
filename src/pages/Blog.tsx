import React from "react";
import Navbar from "../components/blog/navbar";
import { graphql, PageProps, Link } from "gatsby";

export const query = graphql`
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
`;

const Blog: React.FC<PageProps> = (props: PageProps) => {
  const dateFormatter = (dateString: string) => {
    let date = new Date(dateString);
    return date.toDateString();
  };

  return (
    <main>
      <Navbar />
      {/*Hero goes here. */}

      <div className="grid grid-cols-2 mt-12 mx-52">
        {props.data.allMdx.nodes.map((item, index) => {
          const { fields, frontmatter, excerpt } = item;
          let marginClass = "";
          if (index % 2 === 0) {
            marginClass = "mr-6";
          } else {
            marginClass = "ml-6";
          }

          return (
            <div
              key={index}
              className={`prose prose-sm mx-auto mt-8 ${marginClass}`}
            >
              
                <h1>
                    <Link to={fields.slug}>
                        {frontmatter.title}
                    </Link>
                </h1>
              
              <p>{dateFormatter(frontmatter.date)}</p>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Blog;
