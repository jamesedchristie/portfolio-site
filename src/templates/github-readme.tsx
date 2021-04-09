import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ReadmeQuery } from '../types/data';

export default function ReadMe({ data }: { data: ReadmeQuery }) {
  const html: string = data.markdownRemark.html;
  return (
    <Layout currentPage='projects'>
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`