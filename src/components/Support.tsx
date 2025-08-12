import { useState } from 'react';
import { Heart, Coffee, Sparkles, CreditCard } from 'lucide-react';

const Support = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);

  const donationAmounts = [3, 5, 10, 25, 50];

  const handleDonation = () => {
    const amount = isCustom ? parseFloat(customAmount) : selectedAmount;
    if (amount && amount > 0) {
      // Redirect to Stripe donation page
      window.open(`https://donate.stripe.com/6oU00i73R6eh2yc0oU5AQ00`, '_blank');
    }
  };

  return (
    <section id="support" className="py-20 bg-gradient-to-br from-navy-50 via-white to-primary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-navy-100 dark:bg-navy-900 text-navy-800 dark:text-navy-200 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-200">
            <Sparkles className="h-4 w-4" />
            <span>AI-Assisted Development</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">
            Support Future AI Projects
          </h2>
          <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-200">
            VidGet showcases the power of AI-assisted development. As someone who fully understands AI integration in coding, 
            your support helps me continue creating innovative, free tools that demonstrate the future of software development.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Donation Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-dark-100 dark:border-gray-700 transition-colors duration-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                <Coffee className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">Buy Me a Coffee</h3>
                <p className="text-dark-500 dark:text-gray-400 transition-colors duration-200">One-time support via Stripe</p>
              </div>
            </div>
            
            <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
              Every donation helps fuel my passion for creating free, AI-assisted tools. Your support directly 
              contributes to development time, server costs, and exploring new AI technologies to create even 
              better applications for the community.
            </p>
            
            {/* Donation Amount Selection */}
            <div className="space-y-4 mb-6">
              <label className="text-sm font-medium text-charcoal-700 dark:text-gray-300 transition-colors duration-200">Choose an amount:</label>
              
              <div className="grid grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setIsCustom(false);
                    }}
                    className={`p-3 rounded-lg border-2 font-semibold transition-all duration-200 ${
                      selectedAmount === amount && !isCustom
                        ? 'border-green-500 bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'border-dark-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500 text-charcoal-700 dark:text-gray-300'
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setIsCustom(true);
                  }}
                  onFocus={() => setIsCustom(true)}
                  className="flex-1 px-4 py-3 border-2 border-dark-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  min="1"
                  step="0.01"
                />
                <span className="text-dark-500 dark:text-gray-400 font-medium transition-colors duration-200">GBP</span>
              </div>
            </div>
            
            <button
              onClick={handleDonation}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-105"
            >
              <CreditCard className="h-5 w-5" />
              <span>
                Donate £{isCustom ? (customAmount || '0') : selectedAmount} via Stripe
              </span>
            </button>
            
            <p className="text-sm text-dark-500 dark:text-gray-400 text-center mt-4 transition-colors duration-200">
              Secure payment powered by Stripe • Works on all devices
            </p>
          </div>
        </div>
        
        {/* Transparency Section */}
        <div className="mt-16 bg-dark-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-colors duration-200">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-6 w-6 text-red-500" />
            <h3 className="text-2xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">Complete Transparency</h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 text-dark-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
            <p>
              <strong>About AI Integration:</strong> VidGet demonstrates the power of AI-assisted development. 
              I fully understand how AI works in coding and use it to create better software faster and more efficiently.
            </p>
            <p>
              <strong>How Your Support Helps:</strong> Donations go toward development tools, server costs, 
              AI platform access, and the time I invest in creating innovative, free applications for everyone.
            </p>
            <p>
              <strong>My Commitment:</strong> All core applications will remain free forever. Your support simply 
              enables me to create more AI-powered tools and improve existing ones with cutting-edge technology.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Works on iOS, Android, Windows & Mac</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Secure Stripe payments</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-navy-500 rounded-full"></div>
              <span>AI-assisted development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;