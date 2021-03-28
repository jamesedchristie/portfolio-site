const linkResolver = require('./src/utils/linkResolver');

module.exports = {
  siteMetadata: {
    title: "James Portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "james-blog",
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          blog_post: require('./custom_types/blog_post.json')
        },

      }
    }
  ],
};
