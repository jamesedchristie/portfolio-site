import React from 'react';
import { graphql, Link } from 'gatsby';
import { Date, RichText, RichTextBlock } from 'prismic-reactjs';
import CSS from 'csstype';

import Layout from '../components/layout';
import { accentColor, articleBgColor } from '../styles/colors';

export default function Blog({ data }: { data: PrismicBlogPostData }) {
  return (
    <Layout currentPage='blog'>
      <div>
        <h2>Blog Posts</h2>
        <br />
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <Link to={`/blog/${node.uid}`}>
            <article style={articleStyle}>
              <div style={blogImageStyle}>
                <img src={node.data.image.fluid.src} />
              </div>
              <div style={blogTextStyle}>
                <div style={titleRowStyle}>
                  <h3 style={titleStyle}>{RichText.asText(node.data.title.raw)}</h3>
                  <div style={dateStyle}>
                    <span>{Date(node.data.datetime).toLocaleString()}</span>
                  </div>
                </div>
                <div style={excerptRowStyle}>
                  <i style={excerptStyle}>
                    {node.data.content.text.substring(0, 50)}...
                  </i>
                </div>
              </div>
            </article>
          </Link>
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
              raw
            }
            content {
              text
            }
            datetime
            image {
              fluid(maxWidth: 100) {
                src
              }
            }
          }
          uid
        }
      }
    }
  }
`;


const articleStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '10px',
  alignItems: 'center',
  backgroundColor: articleBgColor,
  border: '1px solid ' + accentColor,
  borderRadius: '5px',
  padding: '20px'
};
const blogImageStyle: CSS.Properties = {
  flex: 1,
};
const blogTextStyle: CSS.Properties = {
  flex: 3,
  display: 'flex',
  flexDirection: 'column',
};
const titleRowStyle: CSS.Properties = {
  flex: 1,
  height: 'auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '5px'
};
const titleStyle: CSS.Properties = {
  flex: 1,
  margin: 0
};
const dateStyle: CSS.Properties = {
  flex: 1,
  textAlign: 'center',
};
const excerptRowStyle: CSS.Properties = {
  flex: 1,
  alignItems: 'center'
};
const excerptStyle: CSS.Properties = {
  
}

