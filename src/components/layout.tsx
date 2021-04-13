import React, { ReactNode, useState } from 'react';
import { Link } from 'gatsby';
import '@fontsource/yantramanav';
import '../styles/global.css';
import gatsbyLogo from '../images/gatsby.png';
import githubLogo from '../images/github-light-md.png';
import prismicLogo from '../images/prismic.png';
import twitterLogo from '../images/twitter.svg';
import linkedInLogo from '../images/linkedin.png';
import tailwindLogo from '../images/tailwind.svg';
import background from '../images/earth_glow.png';

type LayoutProps = {
  currentPage: string;
  children: ReactNode;
};

const pages: string[] = ['Index', 'About', 'Projects'];

export function Layout({ currentPage, children }: LayoutProps) {

  const [mouseOver, setMouseOver] = useState({
    'twitter': false,
    'github': false,
    'linkedIn': false,
  });

  const toggleMouseOver = (logoName: string) => {
    let copy = Object.assign({}, mouseOver);
    switch (logoName) {
      case 'twitter':
        copy.twitter = !copy.twitter;
        break;
      case 'github':
        copy.github = !copy.github;
        break;
      case 'linkedIn':
        copy.linkedIn = !copy.linkedIn;
        break;
      default:
        break;
    }
    setMouseOver(copy);
  }

  return (
    <div
      style={{ fontFamily: 'Yantramanav' }}
      className="min-h-screen flex flex-col"
    >
      <header className="text-center md:h-72 flex-none shadow flex flex-col bg-layout-primary bg-layout bg-contain xl:bg-cover text-layout-text">
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="h-20 w-20 mx-auto md:w-1/4 md:h-auto"></div>
          <div className="flex-grow">
            <div className="flex flex-row justify-center align-middle flex-grow pt-5">
              <h1
                className="md:text-4xl lg:text-6xl xl:text-8xl font-extrabold mb-0"
                // style={{
                //   animation: 'trace-outline 2s',
                //   textShadow:
                //     '1px 0px 1px rgb(255, 0, 102), 0px 1px 1px rgb(255, 0, 102), -1px 0px 1px rgb(255, 0, 102), 0px -1px 1px rgb(255, 0, 102)',
                // }}
              >
                James Christie
              </h1>
            </div>
            <div className="flex flex-row justify-center flex-initial mt-2">
              <h3 className="text-heading-color font-extrabold">
                Full Stack Developer
              </h3>
            </div>
          </div>
          <div className="flex flex-initial md:w-1/4 justify-center">
            <div className="flex flex-row justify-center pt-5 m-0 w-full">
              <Link
                className={`block mx-5 w-12 h-12 ${mouseOver.twitter ? 'animate-bounce' : ''}`}
                to="https://twitter.com/jamesedchristie"
                onMouseOver={() => toggleMouseOver('twitter')}
                onMouseLeave={() => toggleMouseOver('twitter')}
              >
                <img src={twitterLogo} className="h-full w-full" />
              </Link>
              <Link
                className={`block mx-5 w-12 h-12 ${mouseOver.github ? 'animate-bounce' : ''}`}
                to="https://github.com/jamesedchristie"
                onMouseOver={() => toggleMouseOver('github')}
                onMouseLeave={() => toggleMouseOver('github')}
              >
                <img src={githubLogo} className="h-full w-full" />
              </Link>
              <Link
                className={`block mx-5 w-12 h-12 ${mouseOver.linkedIn ? 'animate-bounce' : ''}`}
                to="https://www.linkedin.com/in/jamesedchristie/"
                onMouseOver={() => toggleMouseOver('linkedIn')}
                onMouseLeave={() => toggleMouseOver('linkedIn')}
              >
                <img src={linkedInLogo} className="h-full w-full" />
              </Link>
            </div>
          </div>
        </div>
        <nav className="flex justify-center align-middle mt-4">
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
      <main className="bg-main-primary text-center lg:px-56 md:px-32 xl:px-72 sm:px-14 px-2 py-5 flex-auto text-xl flex flex-col">
        {children}
      </main>
      <footer className="bg-layout-primary pt-3 pb-5 flex-none text-layout-text overflow-hidden font-mono font-bold">
        <div className="flex flex-col justify-center align-middle text-center m-0">
          <div className="flex-auto text-center mb-2">
            <p className="">~ Made with ~</p>
          </div>
          <div className="flex-auto flex flex-row justify-evenly md:justify-center">
            <div className="flex-auto w-2/5 text-right overflow-hidden">
              <div>
              <p id="gatsbyText">Gatsby</p>
              </div>
            </div>
            <div className="grid grid-cols-3 md:w-1/5">
              <Link
                to="https://www.gatsbyjs.com"
                onMouseOver={() => {
                  let text = document.getElementById('gatsbyText');
                  if (text == null) return;
                  text.style.animationPlayState = 'running';
                  text.style.animation = 'leftinText 1s forwards';
                }}
                onMouseLeave={() => {
                  let text = document.getElementById('gatsbyText');
                  if (text == null) return;
                  text.style.animation = 'leftoutText 1s forwards';
                }}
                className="flex justify-center"
              >
                <img src={gatsbyLogo} className="block h-6 mx-5" />
              </Link>
              <Link
                to="https://prismic.io"
                onMouseOver={() => {
                  let text = document.getElementById('prismicText');
                  if (text == null) return;
                  text.style.animationPlayState = 'running';
                  text.style.animation = 'popupText 0.6s ease-out forwards';
                }}
                onMouseLeave={() => {
                  let text = document.getElementById('prismicText');
                  if (text == null) return;
                  text.style.animation = 'popdownText 1s ease-in forwards';
                }}
                className="flex justify-center"
              >
                <img src={prismicLogo} className="h-6 mx-5" />
              </Link>
              <Link
                to="https://tailwindcss.com"
                onMouseOver={() => {
                  let text = document.getElementById('tailwindText');
                  if (text == null) return;
                  text.style.animationPlayState = 'running';
                  text.style.animation = 'rightinText 1s forwards';
                }}
                onMouseLeave={() => {
                  let text = document.getElementById('tailwindText');
                  if (text == null) return;
                  text.style.animation = 'rightoutText 1s forwards';
                }}
                className="flex justify-center"
              >
                <img src={tailwindLogo} className="h-6 mx-5" />
              </Link>
            </div>
            <div className="flex-auto w-2/5 text-left">
              <p id="tailwindText" className="">
                TailwindCSS
              </p>
            </div>
          </div>
          <div className="flex-auto text-center h-5">
            <p id="prismicText">Prismic</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
