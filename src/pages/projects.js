import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default function Projects({ data }) {
  // console.log(data);
  return (
    <Layout>
      <h2>Projects</h2>
      {data.allGithubRepo.edges.map(({ node }) => {
        let repo = node.data.repository;
        let readme = node.childReadme.childMarkdownRemark;
        return (
          <article>
            <h3>{repo.name}</h3>
            <a href={repo.url} rel="noreferrer" target="_blank">F12 Go To Code</a>
            <strong>{repo.description}</strong>
            <i>{repo.createdAt}</i>
            <div dangerouslySetInnerHTML={{ __html: readme.html }}>
            </div>
          </article>
        )
      })}
    </Layout>
  );
}

export const query = graphql`
  query {
    allGithubRepo {
      edges {
        node {
          data {
            repository {
              createdAt
              name
              url
              description              
            }
          }
          childReadme {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const styles = {}
