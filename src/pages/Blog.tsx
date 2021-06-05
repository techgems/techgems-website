import React from "react";
import Navbar from "../components/blog/navbar";
import Hero from "../components/blog/hero";
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
      limit: 4
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
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
      <Hero />

      <div className="mt-12 mx-auto w-1/2 text-center text-red-800">
        <h2 className="text-4xl font-bold">Latest Posts</h2>
      </div>
      <section className="grid grid-cols-2 mt-6 mx-52">
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
              className={`prose prose-sm mx-auto mt-6 ${marginClass}`}
            >
              <h1 className="mb-0">
                <Link to={fields.slug}>{frontmatter.title}</Link>
              </h1>

              <span className="text-gray-400">
                {dateFormatter(frontmatter.date)}
              </span>
              <p>{excerpt}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
