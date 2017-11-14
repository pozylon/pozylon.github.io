import React from 'react';
import pure from 'recompose/pure';
import mapProps from 'recompose/withProps';
import compose from 'recompose/compose';

const POINTS_MIN = 0;
const POINTS_MAX = 7;
const POINT_SIZE = 15;

const Point = ({ filled = false, size = POINT_SIZE, ...rest }) => (
  <span {...rest}>
    <svg width={`${size}px`} height={`${size}px`} viewBox={`0 0 ${size} ${size}`} version="1.1">
      <circle fill={filled ? '#3C3D3C' : '#D8D8D8'} cx={size / 2} cy={size / 2} r={size / 2} />
    </svg>
    <style jsx>{`
      span {
        padding-left: 5px;
      }
    `}</style>
  </span>
);

const Skill = ({ pointArray, children, ...rest }) => (
  <div {...rest}>
    {children}
    <span className="points">
      {pointArray.map((filled, key) => (
        <Point
          filled={filled}
          key={`point-${key}`} // eslint-disable-line
        />
      ))}
    </span>
    <style jsx>{`
      .points {
        float: right;
      }
    `}</style>
  </div>
);

export default compose(
  mapProps(({ points: rawPoints, ...rest }) => {
    if (!rawPoints && rawPoints !== 0) return { pointArray: [], ...rest };
    const minPoints = Math.max(POINTS_MIN, rawPoints);
    const points = Math.min(POINTS_MAX, minPoints);
    const pointArray = Array(POINTS_MAX).fill(false).fill(true, 0, points);
    return {
      pointArray,
      ...rest,
    };
  }),
  pure,
)(Skill);
