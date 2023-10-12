import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className=" h-20 w-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          height="100px"
          viewBox="0 0 128 128"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#9c27b0"
            className="cls-1"
            d="M64 127.75a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM125.72 65h-13.75A47.86 47.86 0 0 1 65 111.73v13.74A61.73 61.73 0 0 0 125.72 65zM65 65v21.95A23.2 23.2 0 0 0 87.2 65H65zm22.2-2A23.22 23.22 0 0 0 65 40.55V63h22.23zm-46.37 2A23.2 23.2 0 0 0 63 86.95V65H40.8zM63 63V40.55A23.22 23.22 0 0 0 40.78 63H63zm-24.2 2H18.3A45.85 45.85 0 0 0 63 109.72V88.95A25.2 25.2 0 0 1 38.8 65zm0-2A25.2 25.2 0 0 1 63 38.55V18.03A45.85 45.85 0 0 0 18.28 63h20.5zM65 38.55A25.2 25.2 0 0 1 89.2 63h20.77A45.85 45.85 0 0 0 65 18.03v20.52zM89.2 65A25.2 25.2 0 0 1 65 88.95v20.77A45.85 45.85 0 0 0 109.97 65H89.2zM63 125.47v-13.75A47.86 47.86 0 0 1 16.28 65h-14A61.73 61.73 0 0 0 63 125.47zM2.27 63h14A47.86 47.86 0 0 1 63 16.03v-14A61.73 61.73 0 0 0 2.27 63zM65 2.02v14A47.86 47.86 0 0 1 111.98 63h13.75A61.73 61.73 0 0 0 65 2.02z"
          />
          <g>
            <linearGradient id="linear-gradient">
              <stop offset="0%" stopColor="#9c27b0" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <path
              fill="url(#linear-gradient)"
              fillOpacity="0.5"
              d="M65.128,64.894l0.025,60.968a61.781,61.781,0,0,1-32.011-8.315q-0.705-.406-1.4-0.83L62.531,63.4Z"
            />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 64 64"
              to="360 64 64"
              dur="2090ms"
              repeatCount="indefinite"
            />
            <path
              fill="#9c27b0"
              d="M62.531,63.4l2.6,1.5L34.257,118.374l-2.6-1.5Z"
            />
          </g>
          <circle fill="#9c27b0" cx="55.641" cy="97.563" r="6.047">
            <animate
              attributeName="opacity"
              dur="2090ms"
              begin="0s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="1;0"
            />
          </circle>
        </svg>
        {/* <svg
          version="1.1"
          id="L7"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" // Update xmlns:xlink to xmlnsXlink
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100" // Update enable-background to enableBackground
          xmlSpace="preserve" // Update xml:space to xmlSpace
        >
          <path
            fill="#fff"
            d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
    c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#fff"
            d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
    c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill="#fff"
            d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
    L82,35.7z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg> */}
      </div>
    </div>
  );
};

export default LoadingPage;
