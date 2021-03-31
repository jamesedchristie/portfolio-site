const linkResolver = require('./src/utils/linkResolver');

module.exports = {
  siteMetadata: {
    title: 'James Portfolio',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
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
    },
    // {
    //   resolve: "gatsby-source-github",
    //   options: {
    //     headers: {
    //       Authorization: `Bearer GITHUB_PAT_JAMESEDCHRISTIE`
    //     },
    //     queries: [
    //       `{
    //         repository(owner: "jamesedchristie", name: "ships-log") {
    //           createdAt
    //           description
    //           homepageUrl
    //           labels
    //           name
    //           object(expression: "master:README.md") {
    //             ... on Blob {
    //               text
    //             }
    //           }
    //           url
    //         }
    //       }`
    //     ]
    //   }
    // }
  ],
};
