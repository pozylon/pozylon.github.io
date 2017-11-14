import React from 'react';
import pure from 'recompose/pure';

const Experience = ({ years, children }) => (
  <div>
    <span className="huge-year">{years}</span> years of experience
    {children}
    <style jsx>{`
      .huge-year {
        font-size: 6em;
      }
    `}</style>
  </div>
);

export default pure(Experience);
