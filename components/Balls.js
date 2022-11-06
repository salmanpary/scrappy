import React from "react";

const Balls = (props) => {
  return (
    <div className=" absolute -z-10 top-0 right-0 ">
      <svg
        width={props.w}
        height={props.h}
        viewBox="0 0 344 479"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="227.5"
          cy="75.5"
          rx="227.5"
          ry="236.5"
          fill="url(#paint0_linear_3_57)"
        />
        <circle
          cx="274.5"
          cy="290.5"
          r="188.5"
          fill="url(#paint1_diamond_3_57)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_57"
            x1="21.5"
            y1="176"
            x2="343.738"
            y2="-82.653"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#22BEEF" />
            <stop offset="0.889661" stop-color="#11DA86" />
          </linearGradient>
          <radialGradient
            id="paint1_diamond_3_57"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(349.9 189.652) rotate(104.606) scale(299.01)"
          >
            <stop stop-color="#8FE74A" />
            <stop offset="1" stop-color="#44E6B5" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Balls;
