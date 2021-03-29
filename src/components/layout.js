import React from 'react';
import { Link } from 'gatsby';
import '@fontsource/yantramanav';
import '../global.css';

export default function Layout({ children }) {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h2>James Christie</h2>
        <h3>Full Stack Developer</h3>
        <nav style={styles.nav}>
          <Link style={styles.navLink} to="/about/">About</Link>
          <Link style={styles.navLink} to="/blog/">Blog</Link>
          <Link style={styles.navLink} to="/projects/">Projects</Link>
        </nav>
      </header>
      <main style={styles.main}>{children}</main>
      <footer>
        <p style={styles.social}>
          <Link style={styles.socialLink} to="https://twitter.com/jamesedchristie">Twitter</Link>
          <Link style={styles.socialLink} to="https://github.com/jamesedchristie">GitHub</Link>
        </p>
        <p style={styles.footerTag}>Made with Gatsby and Prismic</p>
      </footer>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Yantramanav',
  },
  header: {
    backgroundColor: 'rgb(30, 30, 35)',
    textAlign: 'center',
    padding: '10px 10px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 50
  },
  navLink: {
    display: 'block',
    margin: '0px 20px',
    flex: 'initial',
    fontWeight: 'bold',
    fontSize: 24,
    textDecoration: 'none',
    color: 'inherit'
  },
  main: {
    margin: '3rem',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '20px 0px'
  },
  socialLink: {
    display: 'block',
    margin: '0px 20px',
    flex: 'initial',
    textDecoration: 'none',
    color: 'inherit'
  },
  footerTag: {
    textAlign: 'center'
  }
};
