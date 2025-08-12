import { Download, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-dark-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/Logo 1.png" 
                alt="Simply YTD Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">Simply YTD</h1>
              <p className="text-xs text-dark-500 dark:text-gray-400 transition-colors duration-200">Free Video Downloader</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Features</a>
            <a href="#testimonials" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Reviews</a>
            <a href="#faq" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 transition-colors">FAQ</a>
            <a href="#support" className="text-dark-600 dark:text-gray-300 hover:text-primary-500 transition-colors">Support</a>
            
            {/* Dark Mode Toggle - Compact and Neutral */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            
            <a 
              href="@https://github.com/FCGLITCHES/simple-yt-downloader/releases/download/v1.0.2/SimpleYTDownloader.zip"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile - Compact and Neutral */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 transition-all duration-200"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            
            <a 
              href="https://github.com/FCGLITCHES/Website-Simple-YTD/releases/download/v1.0.0/SimpleYTDownloaderSetup.exe"
              className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;