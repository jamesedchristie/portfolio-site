import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { RichText, Date } from 'prismic-reactjs';

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <div>
        <h2>Blog Posts</h2>
        <br />
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <div>
          <div dangerouslySetInnerHTML={{ __html: node.data.title.html }}></div>
          <div>{Date(node.data.datetime).toString()}</div>
          <div dangerouslySetInnerHTML={{ __html: node.data.content.html }}></div>
          </div>
        ) )}
      </div>
    </Layout>
  )
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
            }
            content {
              html
            }
            datetime
          }
          uid
        }
      }
    }
  }
`