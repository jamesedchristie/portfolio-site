import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { Date, RichText } from 'prismic-reactjs';
import { BlogPostQuery } from '../types/data';


export default function BlogPost({ data }: { data: BlogPostQuery }) {
  const post = data.prismicBlogPost.data;
  return (
    <Layout currentPage='blog'>
      <RichText render={post.title.raw} Component="h2" />
      <aside>{Date(post.datetime).toString()}</aside>
      <img src={post.image.fluid.src} />
      <RichText render={post.content.raw} Component="section" />
    </Layout>
  )
}

export const query = graphql`
  query($url: String!) {
    prismicBlogPost(url: { eq: $url }) {
      data {
        title {
          raw
        }
        content {
          raw
        }
        datetime
        image {
          fluid(maxWidth: 300) {
            src
          }
        }
      }
    }
  }
`