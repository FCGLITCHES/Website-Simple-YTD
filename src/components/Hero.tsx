import React from 'react';
import { Download, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-navy-50 via-white to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>100% Free Forever</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight">
                Download Videos in
                <span className="text-primary-500 block">Perfect 4K Quality</span>
              </h1>
              
              <p className="text-xl text-dark-600 leading-relaxed">
                A simple, fast video downloader that preserves uncompressed, original quality with 
                customizable interface and video history. Supports playlist downloads. Built as a passion project and completely free to use.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105">
                <Download className="h-5 w-5" />
                <span>Download Now</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-dark-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Windows only</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Unlimited downloads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Always free</span>
              </div>
            </div>
          </div>
          
          {/* Right side image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="w-full h-auto rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/WhatsApp Image 2025-08-10 at 03.00.41_5563710c.jpg"
                  alt="Preview"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-500">Quality</span>
                  <span className="text-sm font-semibold text-primary-500">4K Ultra HD</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-500">Format</span>
                  <span className="text-sm font-semibold text-charcoal-900">MP4 (more coming soon)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-dark-500">Speed</span>
                  <span className="text-sm font-semibold text-green-600">Faster than 4KDownloader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;