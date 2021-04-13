const linkResolver = require('./src/utils/linkResolver');

module.exports = {
  siteMetadata: {
    title: 'James Portfolio',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'james-blog',
        linkResolver: () => (doc) => linkResolver(doc),
        schemas: {
          blog_post: require('./custom_types/blog_post.json'),
        },
      },
    }
  ],
};
