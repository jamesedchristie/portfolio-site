import React, { ReactNode, ReactPropTypes } from 'react';
import { Link, PageProps } from 'gatsby';
import '@fontsource/yantramanav';
import '../styles/global.css';
import gatsbyLogo from '../images/gatsby.png';
import githubLogo from '../images/github.png';
import prismicLogo from '../images/prismic.png';
import twitterLogo from '../images/twitter.svg';
import CSS from 'csstype';
import { bgColor, accentColor } from '../styles/colors';

type LayoutProps = {
  currentPage: string;
  children: ReactNode;
};

const pages: string[] = ['About', 'Blog', 'Projects'];

export default function Layout({ currentPage, children }: LayoutProps) {
  return (
    <div style={bodyStyle}>
      <header style={headerStyle}>
        <h2>James Christie</h2>
        <h3>Full Stack Developer</h3>
        <nav style={navStyle}>
          {pages.map((p) => (
            <Link style={p.toLowerCase() === currentPage ? navLinkActiveStyle : navLinkStyle } to={`/${p.toLowerCase()}/`}>
              {p}
            </Link>
          ))}
          {/* <Link style={navLinkStyle} to="/about/">
            About
          </Link>
          <Link style={navLinkStyle} to="/blog/">
            Blog
          </Link>
          <Link style={navLinkStyle} to="/projects/">
            Projects
          </Link> */}
        </nav>
      </header>
      <main>{children}</main>
      <footer style={footerStyle}>
        <p style={socialStyle}>
          <Link
            style={socialLinkStyle}
            to="https://twitter.com/jamesedchristie"
          >
            <img src={twitterLogo} height="30px" />
          </Link>
          <Link style={socialLinkStyle} to="https://github.com/jamesedchristie">
            <img src={githubLogo} height="30px" />
          </Link>
        </p>
        <p style={footerTagStyle}>
          <span>Made with </span>
          <img src={gatsbyLogo} height="30px" style={{ margin: '0px 5px' }} />
          <span> Gatsby and </span>
          <img src={prismicLogo} height="30px" style={{ margin: '0px 5px' }} />
          <span> Prismic</span>
        </p>
      </footer>
    </div>
  );
}

const bodyStyle: CSS.Properties = {
  fontFamily: 'Yantramanav',
};
const headerStyle: CSS.Properties = {
  backgroundColor: bgColor,
  textAlign: 'center',
  padding: '10px 10px',
  borderBottom: '1px solid ' + accentColor
};
const navStyle: CSS.Properties = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};
const navLinkStyle: CSS.Properties = {
  display: 'block',
  margin: '0px 20px',
  flex: 'initial',
  fontWeight: 'bold',
  fontSize: '24px',
  textDecoration: 'none',
  color: 'inherit',
};
const navLinkActiveStyle: CSS.Properties = {
  display: 'block',
  margin: '0px 20px',
  flex: 'initial',
  fontWeight: 'bold',
  fontSize: '24px',
  textDecoration: 'none',
  color: 'grey',
};
const mainStyle: CSS.Properties = {
  margin: '3rem',
};
const footerStyle: CSS.Properties = {
  backgroundColor: bgColor,
  padding: '10px 0px',
  width: '100%',
};
const socialStyle: CSS.Properties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: 0,
  marginBottom: '5px',
};
const socialLinkStyle: CSS.Properties = {
  display: 'block',
  margin: '0px 20px',
  flex: 'initial',
  textDecoration: 'none',
  color: 'inherit',
};
const footerTagStyle: CSS.Properties = {
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 0,
};
