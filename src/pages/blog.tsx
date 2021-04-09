import React from 'react';
import { graphql } from 'gatsby';
import { PrismicBlogPostData } from '../types/data';

import { Layout, BlogPostInfo } from '../components';

export default function Blog({ data }: { data: PrismicBlogPostData }) {
  return (
    <Layout currentPage='blog'>
      <div>
        <h2 className='mb-5'>Blog Posts</h2>
        {data.allPrismicBlogPost.edges.map(({ node }) => (
          <BlogPostInfo
            uid={node.uid}
            image={node.data.image.fluid.src}
            title={node.data.title.raw}
            datetime={node.data.datetime}
            excerpt={node.data.content.text.substring(0, 50)}
          />
          // <Link to={`/blog/${node.uid}`}>
          //   <article className='bg-main-secondary flex flex-row mb-5 p-5 shadow-lg rounded '>
          //     <div className='flex-none w-1/4'>
          //       <img src={node.data.image.fluid.src} />
          //     </div>
          //     <div className='flex flex-col flex-grow'>
          //       <div className='flex-1 flex flex-row h-auto align-middle mb-2 text-left'>
          //         <h3 className='flex-1 m-0'>{RichText.asText(node.data.title.raw)}</h3>
          //         <div className='flex-1 text-right mr-5'>
          //           <span>{Date(node.data.datetime).toLocaleString()}</span>
          //         </div>
          //       </div>
          //       <div className='flex-1 align-middle text-left'>
          //         <i>
          //           {node.data.content.text.substring(0, 50)}...
          //         </i>
          //       </div>
          //     </div>
          //   </article>
          // </Link>
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


// const articleStyle: CSS.Properties = {
//   display: 'flex',
//   flexDirection: 'row',
//   marginBottom: '10px',
//   alignItems: 'center',
//   backgroundColor: articleBgColor,
//   border: '1px solid ' + accentColor,
//   borderRadius: '5px',
//   padding: '20px'
// };
// const blogImageStyle: CSS.Properties = {
//   flex: 1,
// };
// const blogTextStyle: CSS.Properties = {
//   flex: 3,
//   display: 'flex',
//   flexDirection: 'column',
// };
// const titleRowStyle: CSS.Properties = {
//   flex: 1,
//   height: 'auto',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: '5px'
// };
// const titleStyle: CSS.Properties = {
//   flex: 1,
//   margin: 0
// };
// const dateStyle: CSS.Properties = {
//   flex: 1,
//   textAlign: 'center',
// };
// const excerptRowStyle: CSS.Properties = {
//   flex: 1,
//   alignItems: 'center'
// };
// const excerptStyle: CSS.Properties = {
  
// }

