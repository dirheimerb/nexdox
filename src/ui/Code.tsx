import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}

export default function Code({ children }: CodeProps) {
  return (
    <code className="bg-gray-100 p-2 rounded-lg text-sm font-mono text-gray-800">
      {children}
    </code>
  );
}
