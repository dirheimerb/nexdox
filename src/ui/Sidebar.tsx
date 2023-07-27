import React from 'react';
import Link from 'next/link';

export interface Doc {
  name: string;
  path: string;
}

export interface SidebarProps {
  docs: Doc[];
}

export default function Sidebar({ docs }: SidebarProps) {
  return (
    <div className="p-4 bg-gray-200 h-full overflow-auto">
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li key={doc.path}>
            <Link
              className="text-blue-500 hover:underline"
              href={`/${doc.path}`}
            >
              {doc.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
