import React from 'react';

export const Rectangle = ({ color }) => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: -1,
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="none">
      <title>Rectangle</title>
      <defs>
        <path
          d="M815.273437,706.921875 C1101.8871,527.788334 1310.12929,292.147709 1440,-2.27373675e-13 L1440,900 L-1.02318154e-12,900 C350.129291,892.147709 621.887103,827.788334 815.273437,706.921875 Z"
          id="path-1"
        />
        <filter
          x="-0.3%"
          y="-0.2%"
          width="100.6%"
          height="100.9%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feGaussianBlur stdDeviation="0" in="SourceGraphic" />
        </filter>
        <filter
          x="-0.5%"
          y="-0.6%"
          width="101.0%"
          height="101.6%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
        <filter
          x="-0.4%"
          y="-0.4%"
          width="100.8%"
          height="101.3%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1" />
          <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1" />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Desktop">
          <g id="Rectangle" filter="url(#filter-2)">
            <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-1" />
            <use fill={color} fillRule="evenodd" xlinkHref="#path-1" />
            <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  </div>
);

export default Rectangle;
