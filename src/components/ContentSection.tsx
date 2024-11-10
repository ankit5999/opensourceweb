import { FC, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Database } from '../types';
import CodeBlock from './CodeBlock';

interface ContentSectionProps {
  database: Database;
}

const ContentSection: FC<ContentSectionProps> = ({ database }) => {
  const topRef = useRef<HTMLDivElement>(null);
  const offset = 20; // Adjust this value for desired top padding in pixels

  useEffect(() => {
    if (topRef.current) {
      const topPosition = topRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  }, [database]);

  return (
    <div ref={topRef} className="max-w-4xl mx-auto px-4 pt-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8"
      >
        {database.name}
      </motion.h1>

      {database.content?.map((section, index) => {
        switch (section.type) {
          case 'title':
            return (
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-2xl font-semibold mb-4"
              >
                {section.text}
              </motion.h2>
            );

          case 'paragraph':
            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="mb-6 text-lg text-gray-700 dark:text-gray-300"
              >
                {section.text}
              </motion.p>
            );

          case 'code':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="mb-6"
              >
                <CodeBlock code={section.code || ''} language={section.language || 'plaintext'} />
              </motion.div>
            );

          case 'button':
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="mb-6"
              >
                <a
                  href={section.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {section.label}
                </a>
              </motion.div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentSection;
