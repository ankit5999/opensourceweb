"use client"

// pages/packages.tsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/header';

// Define a mock list of npm packages with documentation URLs
const packages = [
  { name: 'BuildMyMeta', url: '/packages/build-my-meta' },
  { name: 'next', url: '/coming-soon' },
  { name: 'typescript', url: '/coming-soon' },
  { name: 'framer-motion', url: '/coming-soon' },
  { name: 'axios', url: '/coming-soon' },
  { name: 'tailwindcss', url: '/coming-soon' },
];

const PackagesPage = () => {
  // You can add a real-time search or fetching data from an API
  const [packageList, setPackageList] = useState(packages);

  // Define animation variants for the list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-background text-primary flex flex-col items-center">
      <Header />
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold py-8"
      >
        Available npm Packages
      </motion.h1>
      {/* List of packages */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="w-full max-w-lg space-y-4"
      >
        {packageList.map((pkg) => (
          <motion.li
            key={pkg.name}
            variants={listItemVariants}
            className="bg-card p-4 rounded-lg shadow-md hover:shadow-xl bg-gray-50 dark:bg-gray-800 hover:bg-muted transition duration-300 ease-in-out"
          >
            <Link href={pkg.url} target="_blank">
              <button className="flex justify-between items-center">
                <span className="text-xl font-semibold text-primary">{pkg.name}</span>
              </button>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default PackagesPage;
