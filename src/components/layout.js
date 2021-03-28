import React from 'react';

export default function Layout({ children }) {
  return (
    <header>
      <h2>James Christie - Full Stack Dev</h2>
      <br />
      {children}
    </header>
  )
}