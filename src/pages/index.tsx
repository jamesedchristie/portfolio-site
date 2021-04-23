import React from 'react';
import { Layout } from '../components';
import { graphql, Link, PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.ico';

function Home({ data }: PageProps) {
  // console.log(data);
  return (
    <Layout currentPage="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>JamesEdChristie</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div className="flex-grow flex flex-col">
        <div className="flex flex-col md:flex-row flex-grow text-center md:pb-32">
          <div className="flex md:w-1/4 box-border md:mr-10 mb-5 lg:w-1/6 md:m-0 px-20 md:px-0">
            <img src="https://res.cloudinary.com/dkj7bctqg/image/upload/c_scale,h_456/v1618354626/Projects/Portfolio/james-drawn_g45kgn.png" alt="Stylised picture of yours truly" className="mx-auto my-auto" />
          </div>
          <div className="flex md:w-3/4">
            <p className="my-auto text-left">
              Hi, my name is James and I'm a full stack developer. Previously I
              studied the history of science for about 10 years. If either of
              these things interests you, please get in touch! You can have a
              look at my timeline, qualifications and interests in the{' '}
              <Link
                className="font-mono font-bold hover:text-link-hover"
                to="/about/"
              >
                About
              </Link>{' '}
              section, or dive straight into some of my{' '}
              <Link
                className="font-mono font-bold hover:text-link-hover"
                to="/projects/"
              >
                Projects
              </Link>
              .
            </p>
          </div>
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
