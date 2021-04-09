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

const pages: string[] = ['Index', 'About', 'Blog', 'Projects'];

export function Layout({ currentPage, children }: LayoutProps) {
  return (
    <div
      style={{ fontFamily: 'Yantramanav' }}
      className="min-h-screen flex flex-col"
    >
      <header className="text-center bg-layout-primary p-1 flex-none shadow">
        <h1 className='md:mt-10'>James Christie</h1>
        <h3 className='md:mt-5'>Full Stack Developer</h3>
        <nav className="flex justify-center mt-12">
          {pages.map((p) => (
            <Link
              className={
                p.toLowerCase() === currentPage
                  ? 'font-mono block text-2xl mx-5 flex-initial font-bold text-link-active hover:text-link-hover'
                  : 'font-mono block text-2xl mx-5 flex-initial font-bold text-link-color hover:text-link-hover'
              }
              to={p === 'Index' ? '/' : `/${p.toLowerCase()}/`}
            >
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
      <main className="bg-main-primary text-center md:px-56 py-5 flex-auto">
        {children}
      </main>
      <footer className="bg-layout-primary pt-3 pb-5 flex-none">
        <p className="flex flex-row justify-center m-0 mb-2">
          <Link
            className="block flex-initial mx-5"
            to="https://twitter.com/jamesedchristie"
          >
            <img src={twitterLogo} className='h-6' />
          </Link>
          <Link
            className="block flex-initial mx-5"
            to="https://github.com/jamesedchristie"
          >
            <img src={githubLogo} className='h-6' />
          </Link>
        </p>
        <p className="flex justify-center align-middle text-center m-0">
          <span>Made with </span>
          <img src={gatsbyLogo} className='h-6 mx-1' />
          <span> Gatsby and </span>
          <img src={prismicLogo} className='h-6 mx-1' />
          <span> Prismic</span>
        </p>
      </footer>
    </div>
  );
}

// const bodyStyle: CSS.Properties = {
//   fontFamily: 'Yantramanav',
// };
// const headerStyle: CSS.Properties = {
//   backgroundColor: bgColor,
//   textAlign: 'center',
//   padding: '10px 10px',
//   borderBottom: '1px solid ' + accentColor
// };
// const navStyle: CSS.Properties = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '50px',
// };
// const navLinkStyle: CSS.Properties = {
//   display: 'block',
//   margin: '0px 20px',
//   flex: 'initial',
//   fontWeight: 'bold',
//   fontSize: '24px',
//   textDecoration: 'none',
//   color: 'inherit',
// };
// const navLinkActiveStyle: CSS.Properties = {
//   display: 'block',
//   margin: '0px 20px',
//   flex: 'initial',
//   fontWeight: 'bold',
//   fontSize: '24px',
//   textDecoration: 'none',
//   color: 'grey',
// };
// const mainStyle: CSS.Properties = {
//   margin: '3rem',
// };
// const footerStyle: CSS.Properties = {
//   backgroundColor: bgColor,
//   padding: '10px 0px',
//   width: '100%',
// };
// const socialStyle: CSS.Properties = {
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   margin: 0,
//   marginBottom: '5px',
// };
// const socialLinkStyle: CSS.Properties = {
//   display: 'block',
//   margin: '0px 20px',
//   flex: 'initial',
//   textDecoration: 'none',
//   color: 'inherit',
// };
// const footerTagStyle: CSS.Properties = {
//   textAlign: 'center',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: 0,
// };
