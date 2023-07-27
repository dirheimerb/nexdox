import React from 'react';
import clsx from 'clsx';

export interface TagListItemProps {
  className?: string;
  children: React.ReactNode;
}

export default function TagListItem({ className, children }: TagListItemProps) {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className,
      )}
    >
      {children}
    </li>
  );
}
