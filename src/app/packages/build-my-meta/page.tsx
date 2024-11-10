'use client';

import { useEffect, useState } from 'react';
import SideNav from '../../../components/SideNav';
import ContentSection from '../../../components/ContentSection';
import { databases } from '../../../data/databases';
import ThemeToggle from '../../../components/ThemeToggle';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function BuildMyMeta() {
  const [selectedDb, setSelectedDb] = useState(databases[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle setting the selected database based on the query parameter in the URL
  useEffect(() => {
    const updateSelectedDbFromQuery = () => {
      const params = new URLSearchParams(window.location.search);
      const dbParam = params.get('db');
      const db = databases.find((db) => db.id === dbParam);
      if (db) {
        setSelectedDb(db.id);
      }
    };

    // Set initial tab based on query parameter on load
    updateSelectedDbFromQuery();

    // Listen for changes to URL
    window.addEventListener('popstate', updateSelectedDbFromQuery);

    return () => {
      window.removeEventListener('popstate', updateSelectedDbFromQuery);
    };
  }, []);

  // Handle selecting a database and updating the URL query parameter
  const handleSelectDb = (id: string) => {
    setSelectedDb(id);
    const params = new URLSearchParams(window.location.search);
    params.set('db', id);
    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
  };

  const handleToggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header for mobile and tablet */}
      <header className="fixed md:hidden top-0 left-0 w-full z-20 bg-white dark:bg-gray-800 flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <button
          onClick={handleToggleSidebar}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle theme"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        </button>
        <h1 className="text-lg font-semibold">BuildMyMeta</h1>
        <ThemeToggle />
      </header>

      {/* Sidebar */}
      <SideNav
        databases={databases}
        selectedDb={selectedDb}
        onSelect={handleSelectDb}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Content Area */}
      <main className="flex-1 pt-24 md:pt-8 md:pl-72 py-8 md:px-4 px-0 overflow-x-hidden">
        <ContentSection database={databases.find((db) => db.id === selectedDb)!} />
      </main>
    </div>
  );
}
