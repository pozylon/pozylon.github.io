import React from 'react';
import Head from 'next/head';
import pure from 'recompose/pure';

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
    </Head>
    {children}
    <style jsx global>{`
      * {
        font-family: 'Open Sans', sans-serif;
      }
      body {
        padding-top: 1em;
        padding-bottom: 1em;
        padding-left: 10vw;
        padding-right: 10vw;
        max-width: 1444px;
      }
      h1 {
        font-size: 3em;
        font-weight: 300;
        font-style: normal;
      }
      small {
        color: #777777;
      }
      h2 {
        color: #141414;
        font-size: 2em;
        font-weight: 400;
        font-style: normal;
        font-variant-caps: all-small-caps;
        border-bottom: 1px dotted #141414;
      }
      h3 {
        font-size: 1em;
        color: #777777;
      }
      p {
        color: #636363;
      }
      footer, header small, address  {
        color: #C3C3C3;
      }
    `}</style>
  </div>
);

export default pure(Layout);
