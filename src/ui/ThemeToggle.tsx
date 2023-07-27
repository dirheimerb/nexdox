'use client';
import { useTheme } from '@/lib/ThemeProvider';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export function ThemeToggle() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const otherTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.documentElement.classList.add('transition');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      setTheme(currentTheme);
    }

    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="group top-4 z-50 -m-2.5 p-2.5"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      {theme === 'dark' ? (
        <FiMoon className="w-6 h-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-100" />
      ) : (
        <FiSun className="w-6 h-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-800 dark:group-hover:text-gray-100" />
      )}
    </button>
  );
}
