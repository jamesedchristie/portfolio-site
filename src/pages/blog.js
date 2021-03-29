import React from 'react';
import { graphql } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';

import Layout from '../components/layout';

export default function Blog({ data }) {
  return (
    <Layout>
      <div>
        <h2>Blog Posts</h2>
        <br />
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <div>
            <h4>{RichText.asText(node.data.title.raw)}</h4>
            <div>{Date(node.data.datetime).toString()}</div>
            <div
              dangerouslySetInnerHTML={{ __html: node.data.content.html }}
            ></div>
            <img src={node.data.image.url} height="50px" />
          </div>
        ))}
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