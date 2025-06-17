import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Adaeze & Chidi Okafor',
      title: 'Wedding Couple',
      location: 'Lagos, Nigeria',
      image: 'https://images.pexels.com/photos/32515228/pexels-photo-32515228.jpeg',
      rating: 5,
      text: 'EVENTIFY made our dream wedding a reality! From finding the perfect photographer to securing our beautiful venue, everything was seamless. The escrow system gave us complete peace of mind, and our vendors were absolutely professional.',
      event: 'Traditional Wedding - 300 guests',
      vendor: 'Worked with 6 vendors'
    },
    {
      id: 2,
      name: 'Kwame Asante',
      title: 'CEO, Tech Solutions Ghana',
      location: 'Accra, Ghana',
      image: 'https://images.unsplash.com/photo-1661256350667-60832c2b3f44',
      rating: 5,
      text: 'Our company annual gala was a huge success thanks to EVENTIFY. The platform connected us with top-tier event planners and vendors. The process was professional, transparent, and the results exceeded our expectations.',
      event: 'Corporate Gala - 500 guests',
      vendor: 'Premium Event Package'
    },
    {
      id: 3,
      name: 'Fatima Al-Hassan',
      title: 'Event Planner',
      location: 'Abuja, Nigeria',
      image: 'https://images.pexels.com/photos/3051576/pexels-photo-3051576.jpeg',
      rating: 5,
      text: 'As a vendor on EVENTIFY, I\'ve grown my business significantly. The platform brings me high-quality clients, the payment system is secure, and the support team is always helpful. It\'s been a game-changer for my business.',
      event: 'Planning 50+ events yearly',
      vendor: 'Verified Vendor since 2023'
    },
    {
      id: 4,
      name: 'Sarah & Michael Johnson',
      title: 'Anniversary Celebration',
      location: 'Cape Town, South Africa',
      image: 'https://images.unsplash.com/photo-1639432047673-91ea142f9cf5',
      rating: 5,
      text: 'Celebrating our 25th anniversary with family from across Africa was made possible through EVENTIFY. The hall we booked was perfect, the catering was exceptional, and the whole experience was stress-free.',
      event: '25th Anniversary - 150 guests',
      vendor: 'Hall + Catering Package'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            What Our <span className="hero-gradient-text">Community</span> Says
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Real stories from customers and vendors who have experienced the EVENTIFY difference across Africa.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-primary-50/30 rounded-3xl p-8 lg:p-12 shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <QuoteIcon className="w-8 h-8 text-primary-600" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Image and Details */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden mb-6 shadow-lg">
                    <img
                      src={currentData.image}
                      alt={currentData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-1">
                    {currentData.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">
                    {currentData.title}
                  </p>
                  <p className="text-secondary-600 text-sm mb-4">
                    {currentData.location}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start items-center mb-4">
                    {Array.from({ length: currentData.rating }).map((_, index) => (
                      <StarIcon key={index} className="h-5 w-5 text-amber-500" />
                    ))}
                  </div>

                  {/* Event Details */}
                  <div className="space-y-2 text-sm">
                    <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full inline-block">
                      {currentData.event}
                    </div>
                    <div className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full inline-block ml-2">
                      {currentData.vendor}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="lg:col-span-2 flex items-center">
                  <div>
                    <p className="text-lg lg:text-xl text-secondary-700 leading-relaxed mb-6 italic">
                      "{currentData.text}"
                    </p>
                    
                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <ChevronLeftIcon className="w-6 h-6" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </motion.button>

                      {/* Dots Indicator */}
                      <div className="flex gap-2 ml-4">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial
                                ? 'bg-primary-500'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '98%', label: 'Customer Satisfaction' },
            { number: '10K+', label: 'Successful Events' },
            { number: '5K+', label: 'Happy Reviews' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass p-6 rounded-xl hover-lift"
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

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have planned their perfect events with EVENTIFY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Start Planning Your Event
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Become a Vendor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;