import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { RichText, Date } from 'prismic-reactjs';

function Home({ data }) {
  // console.log(data);
  return (
    <Layout>
      <div>
        <h2>Home</h2>
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
