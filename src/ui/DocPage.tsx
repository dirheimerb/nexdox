'use client';
import React from 'react';
import remark from 'remark';
import html from 'remark-html';

interface DocPageProps {
  markdown: string;
}

export default function DocPage({ markdown }: DocPageProps) {
  const [content, setContent] = React.useState<string>('');

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
