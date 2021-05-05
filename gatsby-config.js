module.exports = {
  siteMetadata: {
    title: "TechGems",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
