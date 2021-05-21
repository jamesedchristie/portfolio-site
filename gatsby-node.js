const fetch = require('node-fetch');
const { createFilePath } = require(`gatsby-source-filesystem`);
const fs = require('fs');
const path = require('path');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const personal = 'jamesedchristie', xrl = 'xrlcoach';

  const reposToFetch = [
    {
      'owner': xrl,
      'repo': 'xrlcoach.github.io',
    },
    {
      'owner': personal,
      'repo': 'wine-pottle'
    },
    {
      'owner': personal,
      'repo': 'portfolio-site'
    },
    {
      'owner': personal,
      'repo': 'order-management-system',
    },
    {
      'owner': personal,
      'repo': 'vue-gram',
    },
    {
      'owner': personal,
      'repo': 'contacts-app',
    }, 
    {
      'owner': personal,
      'repo': 'ships-log',
    }, 
    {
      'owner': personal,
      'repo': 'cs50'
    }
  ];
  
  const repoQueries = reposToFetch.map(({ owner, repo }) => {
    return {
      'query': `{
        repository(owner: "${owner}", name: "${repo}") {
          createdAt
          description
          homepageUrl
          name
          object(expression: "main:README.md") {
            ... on Blob {
              text
            }
          }
          openGraphImageUrl
          url
        }
      }`,
      'auth': (owner === personal ? process.env.GITHUB_PAT_JAMESEDCHRISTIE : process.env.GITHUB_PAT_XRL)
    }
  });

  const processRepo = data => {
    let repoId = createNodeId(`repo-${data.data.repository.name}`);
    let readmeId = createNodeId(`${data.data.repository.name}-readme`);
    let repoMeta = {
      id: repoId,
      parent: null,
      children: [readmeId],
      internal: {
        type: `githubRepo`,
        mediaType: `text/html`,
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    };
    createNode(Object.assign({}, data, repoMeta));
    let readmeNode = {
      id: readmeId,
      parent: repoId,
      children: [],
      internal: {
        type: 'readme',
        mediaType: 'text/markdown',
        content: data.data.repository.object.text,
        contentDigest: createContentDigest(data.data.repository.object.text)
      },
      url: `projects/${data.data.repository.name}`
    };
    createNode(readmeNode);
  };

  for (let { query, auth } of repoQueries) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${auth}`
      },
      body: JSON.stringify({"query": query})
    });
    const data = await response.json();
    processRepo(data);
  };
  return;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    let readme = getNode(node.parent);
    let slug = readme.url;
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
  // if (node.internal.type === 'PrismicBlogPost') {
  //   let text = String(node.data.content.text);
  //   createNodeField({
  //     node,
  //     name: `excerpt`,
  //     value: text.substring(0, 25),
  //   });
  //   console.log(node);
  // }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allPrismicBlogPost {
        edges {
          node {
            url
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/github-readme.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });

  result.data.allPrismicBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.url,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        url: node.url,
      },
    });
  });
};