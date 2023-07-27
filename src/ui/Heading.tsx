import React from 'react';
import clsx from 'clsx';

export type HeadingOptions = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  classname?: string;
  level: HeadingOptions;
  children: React.ReactNode;
}

export default function Heading({ level, children, classname }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = clsx(classname, `text-4xl font-bold mb-4 mt-6`);
  return <Tag className={classes}>{children}</Tag>;
}
