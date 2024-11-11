// sidebar.js
import { FC } from 'react';
import { Database } from '../types';
import ThemeToggle from './ThemeToggle';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SideNavProps {
  databases: Database[];
  selectedDb: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SideNav: FC<SideNavProps> = ({ databases, selectedDb, onSelect, isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar for desktop */}
      <nav className="hidden md:flex w-72 h-screen fixed top-0 left-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-col">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <a
              href="/packages"
              rel="noreferrer"
            >
              <h1 className="text-xl font-bold">BuildMyMeta</h1>
            </a>
            
            <ThemeToggle />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          <ul className="p-4 pt-2">
            {databases.map((db) => (
              <li key={db.id} className="mb-2">
                <button
                  onClick={() => {
                    onSelect(db.id);
                    if (window.innerWidth < 768) onClose();
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${selectedDb === db.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                    }`}
                >
                  {db.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>
          <nav className="fixed top-0 left-0 w-72 h-full bg-white dark:bg-gray-800 p-4 z-50">
            <div className="flex items-center justify-between mb-4">
              <a
                href="/packages"
                rel="noreferrer"
              >
                <h1 className="text-xl font-bold">BuildMyMeta</h1>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                <XMarkIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <ul>
              {databases.map((db) => (
                <li key={db.id} className="mb-2">
                  <button
                    onClick={() => {
                      onSelect(db.id);
                      onClose();
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors ${selectedDb === db.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                      }`}
                  >
                    {db.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default SideNav; 
