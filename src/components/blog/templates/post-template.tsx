import React from "react";
import BlogContainer from "../blogContainer";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import BlogHelmet from "../../blogHelmet";

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      timeToRead
    }
  }
`;

const Post: React.FC<PageProps> = (props: PageProps) => {
  const { frontmatter, body, timeToRead } = props.data.mdx;

  return (
    <BlogContainer>
      <BlogHelmet title={frontmatter.title} description="A blog post by Tech Gems." />
      <article className="prose mt-12 mx-8 md:mx-auto">
        <h1 className="tg-post-header">
          {frontmatter.title}
        </h1>
        <span className="text-left text-gray-400">{frontmatter.date} • ☕️ {timeToRead} min read</span>
      
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </BlogContainer>
  );
};

export default Post;
