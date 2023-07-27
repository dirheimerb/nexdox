import React from 'react';

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <p className="text-lg leading-relaxed mb-4">{children}</p>;
}
