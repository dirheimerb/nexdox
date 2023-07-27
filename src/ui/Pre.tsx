import React from 'react';

interface PreProps {
  children: React.ReactNode;
}

export default function Pre({ children }: PreProps) {
  return (
    <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono">
      {children}
    </pre>
  );
}
