import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

interface QueryData {
  allGithubRepo: {
    edges: {
      node: {
        data: {
          repository: {
            createdAt: string,
            name: string,
            url: string,
            description: string,
          }
        },
        childReadme: {
          childMarkdownRemark: {
            html: string
          },
        }
      }
    }[]
  }
}

export default function Projects({ data }: { data: QueryData }) {
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
            <a href={repo.url} rel="noreferrer" target="_blank">
              F12 Go To Code
            </a>
            <strong>{repo.description}</strong>
            <i>{repo.createdAt}</i>
            <Link to={`/projects/${repo.name}/`}>View README</Link>
          </article>
        );
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
`;

const styles = {};
