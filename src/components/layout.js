import React from 'react';
import { Link } from 'gatsby';
import '@fontsource/yantramanav';
import '../global.css';
import gatsbyLogo from '../images/gatsby.png';
import githubLogo from '../images/github.png';
import prismicLogo from '../images/prismic.png';
import twitterLogo from '../images/twitter.svg';

export default function Layout({ children }) {
  return (
      <div style={styles.body}>
        <header style={styles.header}>
          <h2>James Christie</h2>
          <h3>Full Stack Developer</h3>
          <nav style={styles.nav}>
            <Link style={styles.navLink} to="/about/">
              About
            </Link>
            <Link style={styles.navLink} to="/blog/">
              Blog
            </Link>
            <Link style={styles.navLink} to="/projects/">
              Projects
            </Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={styles.footer}>
          <p style={styles.social}>
            <Link
              style={styles.socialLink}
              to="https://twitter.com/jamesedchristie"
            >
              <img src={twitterLogo} height="30px" />
            </Link>
            <Link
              style={styles.socialLink}
              to="https://github.com/jamesedchristie"
            >
              <img src={githubLogo} height="30px" />
            </Link>
          </p>
          <p style={styles.footerTag}><span>Made with </span><img src={gatsbyLogo} height="30px" style={{ margin: '0px 5px' }}/><span> Gatsby and </span><img src={prismicLogo} height="30px" style={{ margin: '0px 5px' }} /><span> Prismic</span></p>
        </footer>
      </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Yantramanav',
  },
  header: {
    backgroundColor: 'beige',
    textAlign: 'center',
    padding: '10px 10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50,
  },
  navLink: {
    display: 'block',
    margin: '0px 20px',
    flex: 'initial',
    fontWeight: 'bold',
    fontSize: 24,
    textDecoration: 'none',
    color: 'inherit',
  },
  main: {
    margin: '3rem',
  },
  footer: {
    backgroundColor: 'beige',
    padding: '10px 0px',
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 0,
    marginBottom: 5
  },
  socialLink: {
    display: 'block',
    margin: '0px 20px',
    flex: 'initial',
    textDecoration: 'none',
    color: 'inherit',
  },
  footerTag: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
};
