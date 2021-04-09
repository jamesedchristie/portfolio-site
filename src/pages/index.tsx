import React from 'react';
import { Layout } from '../components';
import { graphql, PageProps } from 'gatsby';

function Home({ data }: PageProps) {
  // console.log(data);
  return (
    <Layout currentPage='index'>
      <div>
        <h2 className='mb-5'>Home</h2>
        <br />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allPrismicBlogPost {
      edges {
        node {
          id
          data {
            title {
              html
              raw
            }
            content {
              html
            }
            datetime
            image {
              url
            }
          }
          uid
        }
      }
    }
  }
`;

const styles = {};

export default Home;
