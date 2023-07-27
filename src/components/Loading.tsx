import React from 'react';
import Spinner, { SpinnerProps } from './Spinner'; // Adjust the path to the actual location of the Spinner component

interface LoadingProps extends SpinnerProps {
  message?: string;
}

export default function Loading({
  size,
  color,
  message = 'Loading...',
}: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Spinner
        size={size}
        color={color}
      />
      {message && (
        <p className="ml-2 text-gray-800 dark:text-white">{message}</p>
      )}
    </div>
  );
}
