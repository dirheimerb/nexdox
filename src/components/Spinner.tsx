import React from 'react';

export interface SpinnerProps {
  size?: number;
  color?: string;
}

export default function Spinner({
  size = 24,
  color = 'currentColor',
}: SpinnerProps) {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className="opacity-25"
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - 1}
        stroke={color}
        strokeWidth="2"
      />
      <path
        className="opacity-75"
        fill={color}
        d={`M${size / 2} 0A${size / 2} ${size / 2} 0 0 0 ${size / 2} ${size}`}
      />
    </svg>
  );
}
{
  /* <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg> */
}
