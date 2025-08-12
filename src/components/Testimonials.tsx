import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Alex Rodriguez',
      role: 'Content Creator',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'VidGet is incredible. The 4K quality is perfect and the playlist feature saves me hours every week. Can\'t believe it\'s free!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Digital Marketer',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Finally, a downloader that preserves original quality and is faster than 4KDownloader. The interface is clean and simple.',
      rating: 5
    },
    {
      name: 'Mike Thompson',
      role: 'Video Editor',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Simple, fast, and reliable. Downloads are lightning quick and the quality is always perfect. Great work!',
      rating: 5
    }
  ];

  const stats = [
    { number: '10K+', label: 'Downloads' },
    { number: '4.9/5', label: 'User Rating' },
    { number: '1M+', label: 'Videos Downloaded' },
    { number: '100%', label: 'Free' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 dark:text-white transition-colors duration-200">
            Loved by Users Worldwide
          </h2>
          <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Join thousands of users who have discovered the joy of fast, free video downloading
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-dark-600 dark:text-gray-300 font-medium transition-colors duration-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-primary-200 dark:text-primary-300 mb-4" />
              
              <p className="text-dark-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-charcoal-900 dark:text-white transition-colors duration-200">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark-500 dark:text-gray-400 transition-colors duration-200">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;