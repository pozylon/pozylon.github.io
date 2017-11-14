import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class IntlDocument extends Document {
  render() {
    return (
      <html lang="de-CH">
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ // eslint-disable-line
            __html: `window.ENV = '${JSON.stringify({
              GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
            })}';`,
          }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
