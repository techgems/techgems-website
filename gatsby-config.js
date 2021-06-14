module.exports = {
  siteMetadata: {
    siteUrl: "https://www.techgems.net",
    title: "Tech Gems",
    categories: ["Web Development", "Cloud Architecture", "Product Management"]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: true
            },
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.techgems.net',
        sitemap: 'https://www.techgems.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
