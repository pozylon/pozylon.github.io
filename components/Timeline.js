import React from 'react';
import pure from 'recompose/pure';

const Timeline = ({ children }) => (
  <div>
    {children}
  </div>
);

export default pure(Timeline);

export const Item = ({ from, to, children }) => (
  <div>
    <small>From {from} to {to}</small>
    {children}
    <style jsx>{`
      div {
        padding-bottom: 20px;
      }
    `}</style>
  </div>
);
