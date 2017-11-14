import React from 'react';
import pure from 'recompose/pure';

const Progress = ({ percentage, children, size = '200px', ...rest }) => (
  <div {...rest}>
    <svg viewBox="0 0 32 32">
      <g stroke="none" fill="none" fillRule="evenodd">
        <circle className="circle-back" r="16" cx="16" cy="16" />
        <circle className="circle" r="16" cx="16" cy="16" />
      </g>
    </svg>
    <div className="innerText">
      {children}
    </div>
    <style jsx>{`
      @keyframes fillup {
        from { stroke-dasharray: 0 100; }
      }

      svg {
        width: 100%;
        height: 100%;
        transform: rotate(-90deg);
        background: #fff;
        border-radius: 50%;
      }

      .circle {
        stroke: #3C3D3C;
        stroke-width: 5px;
        stroke-dasharray: ${percentage} 100;
        animation: fillup 1s ease-out forwards;
      }

      .circle-back {
        stroke: #D8D8D8;
        stroke-width: 5px;
        stroke-dasharray: 100 100;
      }

      div {
          padding: 10px;
          margin: 0;
          text-align:center;
          position:relative;
          width: ${size};
          height: ${size};
          display: inline-block;
      }

      div.innerText {
          position:absolute;
          top: 16%;
          left: -10px;
          height: 66%;
          width:100%;
      }
    `}
    </style>
  </div>
);

export default pure(Progress);
