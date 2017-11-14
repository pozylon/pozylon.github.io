import React from 'react';
import pure from 'recompose/pure';

const Experience = ({ years, children }) => (
  <div>
    {children} ({years})
    X X X X X
  </div>
);

export default pure(Experience);
