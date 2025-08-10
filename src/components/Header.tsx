import React from 'react';
import { Download, Video } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-dark-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-charcoal-900">VidGet</h1>
              <p className="text-xs text-dark-500">Free Video Downloader</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-dark-600 hover:text-primary-500 transition-colors">Features</a>
            <a href="#testimonials" className="text-dark-600 hover:text-primary-500 transition-colors">Reviews</a>
            <a href="#faq" className="text-dark-600 hover:text-primary-500 transition-colors">FAQ</a>
            <a href="#support" className="text-dark-600 hover:text-primary-500 transition-colors">Support</a>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;