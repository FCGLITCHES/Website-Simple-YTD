import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What video quality can I download?',
      answer: 'VidGet supports downloads up to 4K Ultra HD (3840x2160) with original bitrate preservation. We also support 1080p, 720p, and lower resolutions based on source availability.'
    },
    {
      question: 'Which websites are supported?',
      answer: 'VidGet supports popular websites including YouTube, Vimeo, Dailymotion, and many more. The app is regularly updated to maintain compatibility.'
    },
    {
      question: 'Is there a download limit?',
      answer: 'No, there are absolutely no download limits. VidGet is completely free with unlimited downloads forever.'
    },
    {
      question: 'Can I download entire playlists?',
      answer: 'Yes! The playlist feature allows you to download entire playlists with a single click. Currently, individual playlists are supported (channel downloads coming soon).'
    },
    {
      question: 'What file formats are available?',
      answer: 'Currently, VidGet supports MP4 format with high-quality preservation. Additional formats like MKV, AVI, and audio extraction are coming soon!'
    },
    {
      question: 'What operating systems are supported?',
      answer: 'VidGet is currently available for Windows only. The app works entirely offline and all processing happens locally on your computer for maximum privacy.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'For support, you can reach out via email. As this is a free passion project, response times may vary, but I do my best to help users with any issues.'
    },
    {
      question: 'Why is VidGet completely free?',
      answer: 'VidGet is my first coding project and a labor of love. I created it to learn programming and wanted to share something useful with the community. It\'s free because I believe good software should be accessible to everyone.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-dark-600 dark:text-gray-300 transition-colors duration-200">
            Everything you need to know about VidGet
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-dark-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-dark-200 dark:border-gray-700 transition-colors duration-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-dark-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-charcoal-900 dark:text-white transition-colors duration-200">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-dark-400 dark:text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-dark-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;