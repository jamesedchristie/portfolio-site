import React from 'react';
import { graphql, Link } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';

import Layout from '../components/layout';

export default function Blog({ data }) {
  return (
    <Layout>
      <div>
        <h2>Blog Posts</h2>
        <br />
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <Link to={`/blog/${node.uid}`}>
            <article style={styles.article}>
              <div style={styles.blogImage}>
                <img src={node.data.image.fluid.src} />
              </div>
              <div style={styles.blogText}>
                <div style={styles.titleRow}>
                  <h3 style={styles.title}>{RichText.asText(node.data.title.raw)}</h3>
                  <div style={styles.date}>
                    {Date(node.data.datetime).toLocaleString()}
                  </div>
                </div>
                <div style={styles.excerptRow}>
                  <aside style={styles.excerpt}>
                    {node.data.content.text.substring(0, 50)}
                  </aside>
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

const styles = {
  article: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  blogImage: {
    flex: 1,
  },
  blogText: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
  },
  titleRow: {
    flex: 1,
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    margin: 0
  },
  date: {
    flex: 1,
    textAlign: 'center',
  },
  excerptRow: {
    flex: 1,
    alignItems: 'center'
  },
  excerpt: {
    
  },
};
