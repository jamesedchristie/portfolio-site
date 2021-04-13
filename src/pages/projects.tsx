import { graphql } from 'gatsby';
import React from 'react';
import { Layout, ProjectInfo } from '../components';
import { GithubRepoData } from '../types/data';  
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';

export default function Projects({ data }: { data: GithubRepoData }) {  
  return (
    <Layout currentPage='projects'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Projects</title>
        <link rel="icon" href={favicon} />
      </Helmet>
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
