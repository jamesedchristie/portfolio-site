const fetch = require('node-fetch');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
require('gatsby-transformer-remark/')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  const reposToFetch = ['ships-log', 'histastrobio', 'portfolio-site', 'cs50'];

  const repoQueries = reposToFetch.map(repo => `{
    repository(owner: "jamesedchristie", name: "${repo}") {
      createdAt
      description
      homepageUrl
      name
      object(expression: "main:README.md") {
        ... on Blob {
          text
        }
      }
      url
    }
  }`);

  const processRepo = data => {
    let repoId = createNodeId(`repo-${data.data.repository.name}`);
    let readmeId = createNodeId(`${data.data.repository.name}-readme`);
    let repoMeta = {
      id: createNodeId(`repo-${data.data.repository.name}`),
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
      id: createNodeId(`${data.data.repository.name}-readme`),
      parent: repoId,
      children: [],
      internal: {
        type: 'readme',
        mediaType: 'text/markdown',
        content: data.data.repository.object.text,
        contentDigest: createContentDigest(data.data.repository.object.text)
      }
    };
    createNode(readmeNode);
  };

  for (let query of repoQueries) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${process.env.GITHUB_PAT_JAMESEDCHRISTIE}`
      },
      body: JSON.stringify({"query": query})
    });
    const data = await response.json();
    processRepo(data);
  };
  return;
};