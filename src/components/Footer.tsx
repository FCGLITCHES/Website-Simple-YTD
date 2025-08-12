import { Download, Mail, Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-900 dark:bg-gray-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Download className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">VidGet</h3>
                <p className="text-xs text-dark-400 dark:text-gray-400 transition-colors duration-200">Free Video Downloader</p>
              </div>
            </div>
            <p className="text-dark-400 dark:text-gray-400 leading-relaxed transition-colors duration-200">
              A simple, fast, and completely free video downloader showcasing AI-assisted development. 
              Built with passion for the community.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2 text-dark-400 dark:text-gray-400 transition-colors duration-200">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Requirements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-dark-400 dark:text-gray-400 transition-colors duration-200">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="mailto:support@vidget.com" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Bug</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2 text-dark-400 dark:text-gray-400 transition-colors duration-200">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">License Agreement</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Source</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-800 dark:border-gray-800 mt-12 pt-8 transition-colors duration-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-dark-400 dark:text-gray-400 transition-colors duration-200">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-500" />
                <span>AI-Assisted Development</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-dark-400 dark:text-gray-400 transition-colors duration-200">
              <span>© 2025 VidGet. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>as a passion project</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;