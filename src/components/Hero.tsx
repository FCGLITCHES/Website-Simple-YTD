import { Download, CheckCircle } from 'lucide-react';
import ImageSlideshow from './ImageSlideshow';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-navy-50 via-white to-primary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>100% Free Forever</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal-900 dark:text-white leading-tight transition-colors duration-200">
                Download Videos in
                <span className="text-primary-500 block">Perfect 4K Quality</span>
              </h1>
              
              <p className="text-xl text-dark-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                A simple, fast video downloader that preserves uncompressed, original quality with 
                customizable interface and video history. Supports playlist downloads. Built as a passion project and completely free to use.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://github.com/FCGLITCHES/Website-Simple-YTD/releases/download/v1.0.0/SimpleYTDownloaderSetup.exe"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105"
              >
                <Download className="h-5 w-5" />
                <span>Download Now</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">
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
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-200">
                             <div className="mb-6">
                 <ImageSlideshow 
                   images={[
                     '/Website-Simple-YTD/SimpleYTDownloaderSetup_MlEf51xnqF.png',
                     '/Website-Simple-YTD/Video_Downloader_Gemini_b6yDrpakvN.png',
                     '/Website-Simple-YTD/electron_j8zDOZJ7Lz.png',
                     '/Website-Simple-YTD/WhatsApp Image 2025-08-10 at 03.00.41_5563710c copy.jpg'
                   ]}
                   autoPlayInterval={4000}
                 />
                                  <p className="text-center text-sm text-dark-500 dark:text-gray-400 mt-2 transition-colors duration-200">
                   Click on any image to view it larger
                 </p>
               </div>
               
                               <div className="space-y-4">
                                     <div className="flex items-center justify-between">
                     <span className="text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">Quality</span>
                     <span className="text-sm font-semibold text-primary-500">360p to 4K Ultra HD</span>
                   </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">Format</span>
                    <span className="text-sm font-semibold text-charcoal-900 dark:text-white transition-colors duration-200">MP4, MKV, MOV, MP3, OPUS, AAC + more</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">Speed</span>
                    <span className="text-sm font-semibold text-green-600">Optimized for fast downloads</span>
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