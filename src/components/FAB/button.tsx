'use client';
import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  HiChevronUp,
  HiChartBar,
  HiSave,
  HiUserCircle,
  HiUserAdd,
} from 'react-icons/hi';
import Link from 'next/link';

type MenuItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  path: string;
};

type FABProps = {
  menuItems: MenuItem[];
  fabIcon?: React.ReactNode;
};

export default function FAButton({ menuItems, fabIcon }: FABProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const node = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Close the dropdown if the user clicks outside of it
    const handleClickOutside = (e: MouseEvent) => {
      if (node.current && !node.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      id="fab"
      className="fixed right-4 bottom-4"
      ref={node}
    >
      <button
        className="p-4 bg-blue-500 text-white rounded-full shadow-lg z-10 dark:bg-white dark:text-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {fabIcon}
      </button>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg py-2 mt-4 absolute bottom-14 right-0">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="flex w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 items-center dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
              aria-label={item.label}
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
