import { FC, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CheckIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copyToClipboard = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    } else {
      // Fallback for unsupported browsers
      alert('Clipboard API not supported. Please copy manually.');
    }
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 rounded-lg shadow-sm hover:bg-white dark:hover:bg-gray-800 transition-all border border-gray-200 dark:border-gray-700"
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <>
              <CheckIcon className="h-4 w-4" />
              <span className="hidden sm:block">Copied!</span> {/* Show text only on larger screens */}
            </>
          ) : (
            <>
              <DocumentDuplicateIcon className="h-4 w-4" />
              <span className="hidden sm:block">Copy</span> {/* Show text only on larger screens */}
            </>
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? tomorrow : oneLight}
          customStyle={{
            margin: 0,
            padding: '1.25rem',
            background: theme === 'dark' ? '#1f2937' : '#ffffff',
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
