import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function ReadMe({ data }) {
  const readme = data.markdownRemark;
  console.log(readme);
  return (
    <Layout>
      <div>
        <div dangerouslySetInnerHTML={{ __html: readme.html }} />
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