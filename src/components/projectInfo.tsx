import React, { ReactPropTypes } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import CSS from 'csstype';
import { Flex } from '@theme-ui/components';
import { accentColor, articleBgColor, buttonColor } from '../styles/colors';

export default function ProjectInfo({ repo }: { repo: GithubRepo }) {
  return (
    <article style={articleStyle}>
      <div style={infoStyle}>
        <div style={titleRowStyle}>
          <h3 style={titleStyle}>{repo.name}</h3>
          <div style={linkContainer}>
            <a
              style={linkToCodeStyle}
              href={repo.url}
              rel="noreferrer"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
        <i style={dateStyle}> Created at: {repo.createdAt}</i>
        <strong style={descriptionStyle}>{repo.description}</strong>
        <div style={linkContainer}>
          <Link style={linkReadmeStyle} to={`/projects/${repo.name}/`}>
            Read More...
          </Link>
        </div>
      </div>
      <div style={imageStyle}>
        <img
          src={repo.openGraphImageUrl}
          alt={repo.name + '-image'}
          width="100%"
        />
      </div>
    </article>
  );
}

const articleStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '40px',
  padding: '20px',
  backgroundColor: articleBgColor,
  borderRadius: '5px',
  border: '1px solid tan',
};
const infoStyle: CSS.Properties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
};
const titleRowStyle: CSS.Properties = {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px'
};
const titleStyle: CSS.Properties = {
  flex: 1,
};
const linkContainer: CSS.Properties = {
  flex: 1,
};
const linkToCodeStyle: CSS.Properties = {
  padding: '5px 15px',
  backgroundColor: buttonColor,
  borderRadius: '5px',
  boxShadow: '2px 2px 5px 1px #112222',
};
const descriptionStyle: CSS.Properties = {
  flex: 3,
};
const dateStyle: CSS.Properties = {
  flex: 1,
};
const linkReadmeStyle: CSS.Properties = {
  padding: '5px 15px',
  backgroundColor: buttonColor,
  borderRadius: '5px',
  boxShadow: '2px 2px 5px 1px #112222',
};
const imageStyle: CSS.Properties = {
  flex: 1,
};
