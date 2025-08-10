import React from 'react';
import { 
  Download, 
  Monitor, 
  List, 
  History, 
  Zap 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: '4K Ultra HD Downloads',
      description: 'Download videos in pristine 4K quality with no compression or quality loss. Every pixel preserved as intended.',
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: Zap,
      title: 'Optimized Performance',
      description: 'Faster download speeds than competitors like 4KDownloader. Optimized for maximum performance and efficiency.',
      color: 'bg-navy-100 text-navy-600'
    },
    {
      icon: Download,
      title: 'Uncompressed Quality',
      description: 'Maintains original bitrate and audio quality with zero compression. Perfect quality preservation every time.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: List,
      title: 'Playlist Downloads',
      description: 'Download entire playlists with one click. Perfect for downloading multiple videos efficiently.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: History,
      title: 'Video History & Customization',
      description: 'Complete download history tracking with customizable interface themes. Organize and manage your downloads your way.',
      color: 'bg-dark-100 text-dark-600'
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Opens downloaded videos with your default Windows media player. Simple and seamless integration.',
      color: 'bg-charcoal-100 text-charcoal-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900">
            Simple Yet Powerful Features
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            Essential features for downloading videos with the best quality and performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-dark-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary-100 border border-transparent hover:border-primary-200">
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-dark-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 mx-auto transition-all duration-200 transform hover:scale-105">
            <Download className="h-5 w-5" />
            <span>Download VidGet Now</span>
          </button>
        </div>
        
        {/* About Section */}
        <div className="mt-20 bg-dark-50 rounded-2xl p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-charcoal-900">About This Project</h3>
            <p className="text-lg text-dark-600 max-w-3xl mx-auto leading-relaxed">
              VidGet is my passion project demonstrating the power of AI-assisted development. As a developer who fully 
              understands how AI works and its integration in coding, I've created this free video downloader to showcase 
              what's possible when human creativity meets AI capabilities. This represents the future of software development - 
              efficient, powerful, and accessible to everyone. It's completely free because I believe in sharing the benefits 
              of AI-enhanced development with the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;