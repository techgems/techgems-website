import React from "react";
import BlogContainer from "../blogContainer";
import BlogHelmet from "../../blogHelmet";
import PostCard from "../postCard";
import { graphql, PageProps } from "gatsby";

export const query = graphql`
  query CategoryPosts($category: String!) {
    allMdx(
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: $category } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
        timeToRead
      }
    }
  }
`;

const Category: React.FC<PageProps> = (props: PageProps) => {
  return (
    <BlogContainer>
      <BlogHelmet
        title={`Tech Gems - ${props.pageContext.category}`}
        description={`Blog post category: ${props.pageContext.category}.`}
      />
      <div className="mt-12 mx-auto w-1/2 text-center text-red-800">
        <h2 className="text-4xl font-bold">{props.pageContext.category}</h2>
      </div>
      <section className="lg:grid lg:grid-cols-2 mt-6 lg:mx-52 mx-8 sm:mx-16">
        {props.data.allMdx.nodes.length > 0 ? (
          props.data.allMdx.nodes.map((item, index) => {
            const { frontmatter, fields, timeToRead, excerpt } = item;
            let marginClass = "";
            if (index % 2 === 0) {
              marginClass = "lg:mr-6";
            } else {
              marginClass = "lg:ml-6";
            }

            return (
              <PostCard
                key={index}
                date={frontmatter.date}
                postSlug={fields.slug}
                title={frontmatter.title}
                excerpt={excerpt}
                timeToRead={timeToRead}
                containerClass={`mx-auto mt-6 ${marginClass}`}
              />
            );
          })
        ) : (
          <p>No Blog posts found for this category.</p>
        )}
      </section>
    </BlogContainer>
  );
};

export default Category;
