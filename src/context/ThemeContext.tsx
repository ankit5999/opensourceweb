"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Function to set theme based on localStorage or user preference
    const loadTheme = () => {
      const savedTheme = localStorage.getItem('theme') as Theme;
      const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

      setTheme(preferredTheme);
      document.documentElement.setAttribute('data-theme', preferredTheme);
      document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
    };

    loadTheme();

    // Listen for changes to localStorage to update theme in other tabs
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'theme') {
        loadTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);






// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light',
//   toggleTheme: () => { },
// });

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as Theme;
//     const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

//     setTheme(preferredTheme);
//     document.documentElement.setAttribute('data-theme', preferredTheme);  // Set data-theme attribute
//     document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);

//     document.documentElement.setAttribute('data-theme', newTheme);  // Update data-theme attribute
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
