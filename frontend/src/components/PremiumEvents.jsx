import React from 'react';
import { motion } from 'framer-motion';
import { 
  CurrencyDollarIcon, 
  TrophyIcon, 
  UserGroupIcon, 
  ClockIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PremiumEvents = () => {
  const premiumFeatures = [
    {
      icon: CurrencyDollarIcon,
      title: '₦5M+ Budget Events',
      description: 'Access to high-value events with substantial budgets for exceptional returns.'
    },
    {
      icon: TrophyIcon,
      title: 'Elite Event Planners',
      description: 'Only verified professionals with proven track records can bid on premium events.'
    },
    {
      icon: UserGroupIcon,
      title: 'Curated Client Base',
      description: 'Work with affluent clients who value quality and are willing to invest in excellence.'
    },
    {
      icon: ClockIcon,
      title: 'Priority Support',
      description: 'Get dedicated support and faster response times for your premium projects.'
    }
  ];

  const successStories = [
    {
      title: 'Lagos Celebrity Wedding',
      budget: '₦15M',
      planner: 'Luxury Events Ltd.',
      image: 'https://images.pexels.com/photos/20256818/pexels-photo-20256818.jpeg',
      description: 'Three-day luxury wedding celebration with 500 guests across multiple venues.'
    },
    {
      title: 'Corporate Gala Dinner',
      budget: '₦8M',
      planner: 'Elite Productions',
      image: 'https://images.unsplash.com/photo-1616431629879-af0e95bf9f88',
      description: 'Annual company celebration with international artists and gourmet cuisine.'
    },
    {
      title: 'Traditional Royal Festival',
      budget: '₦12M',
      planner: 'Heritage Celebrations',
      image: 'https://images.pexels.com/photos/32550635/pexels-photo-32550635.jpeg',
      description: 'Cultural celebration featuring traditional performances and authentic cuisine.'
    }
  ];

  const plannerBenefits = [
    '🎯 Access to ₦5M+ budget events',
    '🏆 Work with premium clientele',
    '💰 Higher profit margins',
    '🔒 Secure escrow payments',
    '📊 Performance analytics',
    '🤝 Priority customer support'
  ];

  return (
    <section id="premium" className="py-20 lg:py-32 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent"></div>
        <img
          src="https://images.pexels.com/photos/20256818/pexels-photo-20256818.jpeg"
          alt="Luxury Event"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Exclusively for Elite Event Planners
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            <span className="hero-gradient-text">Premium Events</span> Marketplace
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Where luxury meets opportunity. Access high-value events starting from ₦5 million and work with Africa's most discerning clients.
          </p>
        </motion.div>

        {/* Premium Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {premiumFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="glass-dark p-6 rounded-xl text-center hover-lift"
            >
              <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-center mb-12">
            Recent <span className="hero-gradient-text">Success Stories</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-dark rounded-xl overflow-hidden hover-lift"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold hero-gradient-text">
                      {story.budget}
                    </span>
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-300 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                  <h4 className="text-lg font-heading font-bold mb-2">
                    {story.title}
                  </h4>
                  <p className="text-primary-300 text-sm mb-3">
                    by {story.planner}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Benefits */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-6">
              Why Elite Planners Choose Our <span className="hero-gradient-text">Premium Marketplace</span>
            </h3>
            
            <div className="space-y-4 mb-8">
              {plannerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="mr-3 text-lg">{benefit.split(' ')[0]}</span>
                  <span>{benefit.substring(2)}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 rounded-xl font-semibold"
              >
                Apply as Premium Planner
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-secondary-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Post Premium Event
              </motion.button>
            </div>
          </div>

          {/* Right Side - Application Form Preview */}
          <div className="glass-dark p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <ShieldCheckIcon className="w-6 h-6 text-accent-400 mr-3" />
              <h4 className="text-xl font-heading font-bold">
                Premium Planner Application
              </h4>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Your Event Planning Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Years of Experience
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-primary-500 focus:outline-none text-white">
                  <option value="">Select Experience</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio Upload
                </label>
                <div className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg border-dashed text-center text-gray-400">
                  Click to upload your best work
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Submit Application
              </motion.button>
            </div>

            <p className="text-xs text-gray-400 mt-4">
              * Applications are reviewed within 48 hours. Premium membership starts at ₦50,000/month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumEvents;