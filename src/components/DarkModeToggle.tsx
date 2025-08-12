import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface DarkModeToggleProps {
  isDark: boolean;
  toggle: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-slate-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;