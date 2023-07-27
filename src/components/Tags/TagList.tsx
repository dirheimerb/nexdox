import React from 'react';
import clsx from 'clsx';

export interface TagListProps {
  className?: string;
  children: React.ReactNode;
}

export default function TagList({ className, children }: TagListProps) {
  return (
    <ul
      role="list"
      className={clsx(className, 'flex flex-wrap gap-4')}
    >
      {children}
    </ul>
  );
}
