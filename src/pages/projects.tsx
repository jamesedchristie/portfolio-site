import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import ProjectInfo from '../components/projectInfo';

export default function Projects({ data }: { data: GithubRepoData }) {
  // console.log(data);
  return (
    <Layout currentPage='projects'>
      <h2 className='mb-5'>Projects</h2>
      {data.allGithubRepo.edges.map(({ node }) => <ProjectInfo repo={node.data.repository} />)}
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
              openGraphImageUrl
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
