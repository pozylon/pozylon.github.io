import React from 'react';
import pure from 'recompose/pure';

const Timeline = ({ points, children }) => (
  <div>
    {children} ({points})
    X X X X X
  </div>
);

export default pure(Timeline);

export const Item = ({ from, to, children }) => (
  <div>
    {from} {to}
    {children}
  </div>
);
