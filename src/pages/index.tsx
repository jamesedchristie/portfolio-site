import React from 'react';
import { Layout } from '../components';
import { graphql, Link, PageProps } from 'gatsby';

function Home({ data }: PageProps) {
  // console.log(data);
  return (
    <Layout currentPage='index'>
      <div className="flex-grow flex flex-col">
        <h2 className='mb-5'>Home</h2>
        <div className='flex flex-grow text-center'>
          <p className='mt-10'>
            Hi, my name is James and I'm a full stack developer. Previously I studied the history of science for about 10 years. If either of theories
            things interests you, please get in touch! You can have a look at my timeline, qualifications and interests in the <Link className="font-mono font-bold hover:text-link-hover" to="/about/">About</Link> section, or dive straight into
            some of my <Link className="font-mono font-bold hover:text-link-hover" to="/projects/">Projects</Link>.
          </p>
        </div>
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
