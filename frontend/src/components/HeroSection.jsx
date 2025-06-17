import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, SparklesIcon, HeartIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const HeroSection = () => {
  const stats = [
    { number: '10K+', label: 'Events Planned' },
    { number: '5K+', label: 'Happy Clients' },
    { number: '2K+', label: 'Trusted Vendors' },
    { number: '50+', label: 'Cities Covered' },
  ];

  const floatingElements = [
    { icon: SparklesIcon, delay: 0, position: 'top-20 left-10' },
    { icon: HeartIcon, delay: 1, position: 'top-32 right-20' },
    { icon: CalendarDaysIcon, delay: 2, position: 'bottom-32 left-20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-primary-50/30">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1695281536457-01f9a07c575b"
          alt="African Wedding Celebration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-primary-50/40"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: element.delay, duration: 0.5 }}
          className={`absolute hidden lg:block ${element.position} w-16 h-16 glass rounded-full flex items-center justify-center floating`}
        >
          <element.icon className="w-8 h-8 text-primary-600" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8"
          >
            <SparklesIcon className="w-4 h-4 mr-2" />
            Africa's Premier Event Planning Platform
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-hero font-heading font-bold text-secondary-900 mb-6 leading-tight"
          >
            Planning Just Got{' '}
            <span className="hero-gradient-text">Easier.</span>
            <br />
            Discover. Book. Celebrate.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-secondary-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with vetted event vendors, book stunning venues, and create unforgettable celebrations across Africa. From traditional weddings to corporate events, we make it seamless.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto"
            >
              Find a Vendor
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto flex items-center justify-center"
            >
              <PlayIcon className="w-5 h-5 mr-2" />
              Watch Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto transition-all duration-300"
            >
              Post Premium Event
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <div className="text-3xl lg:text-4xl font-bold hero-gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;