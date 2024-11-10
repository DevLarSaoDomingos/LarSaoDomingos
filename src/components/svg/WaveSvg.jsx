import React from "react";

const WaveSVG = ({ color = "#0099FF" }) => (
  <svg
    width="100%"
    height="100"
    viewBox="0 0 1920 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1920 69L1812.8 61.3333C1707.2 53.6667 1492.8 38.3333 1280 38.3333C1067.2 38.3333 852.8 53.6667 640 49.8333C427.2 46 212.8 23 107.2 11.5L0 0V92H107.2C212.8 92 427.2 92 640 92C852.8 92 1067.2 92 1280 92C1492.8 92 1707.2 92 1812.8 92H1920V69Z"
      fill={color}
    />
  </svg>
);

export default WaveSVG;
