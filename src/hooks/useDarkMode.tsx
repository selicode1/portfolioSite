import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has dark mode preference in local storage
    const savedMode = localStorage.getItem('darkMode');
    
    // If not, check system preference
    if (savedMode === null) {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPreference);
    } else {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return { isDarkMode, toggleDarkMode };
}