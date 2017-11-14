import React from 'react';

export default class Error extends React.Component {
  static getInitialProps = (ctx) => {
    const { req, res } = ctx;
    if (req) {
      res.writeHead(302, { Location: '/' });
    }
    return {};
  }
  render() {
    return (<div>404</div>);
  }
}
