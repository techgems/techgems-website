import React from "react";
import Navbar from "../navbar";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

const Post: React.FC<PageProps> = (props: PageProps) => {
  const { frontmatter, body } = props.data.mdx;

  return (
    <main>
      <Navbar />
      <article className="mx-auto prose mt-12">
        <h1 className="tg-post-header">
          {frontmatter.title}
        </h1>
        <span className="text-left text-gray-400">{frontmatter.date}</span>
      
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </main>
  );
};

export default Post;
