import React from "react";

const ArrowRight = ({ arrowsize }) => {
  return (
    <svg
      className={arrowsize}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>arrow-right</title>
      <path d="M5 14h9v4.5l6.494-6.5-6.494-6.5v4.5h-9.047c-1.080 0-1.953 0.894-1.953 2s0.92 2 2 2z"></path>
    </svg>
  );
};

const ArrowLeft = ({ arrowsize }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={arrowsize}
    >
      <title>arrow-left</title>
      <path d="M17.997 10h-9v-4.5l-6.494 6.5 6.494 6.5v-4.5h9.047c1.080 0 1.953-0.894 1.953-2s-0.92-2-2-2z"></path>
    </svg>
  );
};
const Quote = ({ quoteSize }) => {
  return (
    <svg
      className={quoteSize}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <title>left-quote</title>
      <path d="M32 28v-12h-8c0-4.41 3.586-8 8-8v-4c-6.617 0-12 5.383-12 12v12h12zM12 28v-12h-8c0-4.41 3.586-8 8-8v-4c-6.617 0-12 5.383-12 12v12h12z"></path>
    </svg>
  );
};

export { ArrowRight, ArrowLeft, Quote};
