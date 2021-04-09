import { Link } from 'gatsby';
import { RichText, RichTextBlock, Date } from 'prismic-reactjs';
import React from 'react';

export function BlogPostInfo({
  uid,
  image,
  title,
  datetime,
  excerpt,
}: {
  uid: string;
  image: string;
  title: RichTextBlock[];
  datetime: string;
  excerpt: string;
}) {
  return (
    <Link to={`/blog/${uid}`}>
      <article className="bg-main-secondary flex flex-row mb-5 p-5 shadow-navy rounded ">
        <div className="flex-none w-1/4">
          <img src={image} />
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex-1 flex flex-row h-auto align-middle mb-2 text-left">
            <h3 className="flex-1 m-0">{RichText.asText(title)}</h3>
            <div className="flex-1 text-right mr-5">
              <span>{Date(datetime).toLocaleString()}</span>
            </div>
          </div>
          <div className="flex-1 align-middle text-left">
            <i>{excerpt}...</i>
          </div>
        </div>
      </article>
    </Link>
  );
}
