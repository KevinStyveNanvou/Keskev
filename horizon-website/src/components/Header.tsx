'use client'; // Required for useState and useEffect

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference
    const isDarkModePreferred = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDarkModePreferred);
    if (isDarkModePreferred) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md dark:bg-gray-900">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          <Link href="/">Horizon</Link>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          <ul className="flex flex-wrap items-center space-x-2 sm:space-x-4"> {/* Added flex-wrap, reduced base space-x */}
            <li>
              <Link href="/" className="px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-200 transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/members" className="px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-200 transition-colors">
                Nos Membres
              </Link>
            </li>
            <li>
              <Link href="/solutions" className="px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-200 transition-colors">
                Nos Solutions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="px-2 py-1 sm:px-3 sm:py-2 rounded-md text-sm sm:text-base hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-gray-200 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
