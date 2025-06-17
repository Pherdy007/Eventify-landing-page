import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, MagnifyingGlassIcon, CreditCardIcon, StarIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: MagnifyingGlassIcon,
      title: 'Discover',
      description: 'Browse through thousands of verified vendors and stunning venues across Africa',
      image: 'https://images.unsplash.com/photo-1712903276040-c99b32a057eb',
    },
    {
      icon: UserGroupIcon,
      title: 'Connect',
      description: 'Get matched with the perfect vendors based on your event type, budget, and location',
      image: 'https://images.pexels.com/photos/3051576/pexels-photo-3051576.jpeg',
    },
    {
      icon: CreditCardIcon,
      title: 'Secure Payment',
      description: 'Pay safely through our escrow system. Your money is protected until the job is done',
      image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg',
    },
    {
      icon: StarIcon,
      title: 'Celebrate',
      description: 'Enjoy your perfect event and leave reviews to help other customers make great choices',
      image: 'https://images.pexels.com/photos/32515228/pexels-photo-32515228.jpeg',
    },
  ];

  const userTypes = [
    {
      title: 'For Customers',
      description: 'Planning an event? Find the perfect vendors and venues with confidence.',
      features: ['Browse verified vendors', 'Compare prices and reviews', 'Secure payments', 'Event planning tools'],
      color: 'primary',
    },
    {
      title: 'For Vendors',
      description: 'Grow your business by connecting with customers who need your services.',
      features: ['Create stunning profiles', 'Receive job requests', 'Get paid securely', 'Build your reputation'],
      color: 'accent',
    },
    {
      title: 'For Event Planners',
      description: 'Bid on premium events and showcase your planning expertise.',
      features: ['Access premium jobs', 'Submit proposals', 'Portfolio showcase', 'Professional networking'],
      color: 'secondary',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            How <span className="hero-gradient-text">EVENTIFY</span> Works
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Simple, secure, and seamless. From discovery to celebration, we make event planning effortless.
          </p>
        </motion.div>

        {/* Steps Process */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="glass p-6 rounded-2xl hover-lift h-full">
                  {/* Image */}
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-6 image-hover">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary-600">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-300 transform -translate-y-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* User Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {userTypes.map((type, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-2xl border-2 ${
                type.color === 'primary' 
                  ? 'border-primary-200 bg-primary-50/50' 
                  : type.color === 'accent'
                  ? 'border-accent-200 bg-accent-50/50'
                  : 'border-secondary-200 bg-secondary-50/50'
              } hover-lift`}
            >
              <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
                {type.title}
              </h3>
              <p className="text-secondary-600 mb-6">
                {type.description}
              </p>
              <ul className="space-y-3">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-secondary-700">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      type.color === 'primary' 
                        ? 'bg-primary-500' 
                        : type.color === 'accent'
                        ? 'bg-accent-500'
                        : 'bg-secondary-500'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  type.color === 'primary'
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : type.color === 'accent'
                    ? 'bg-accent-500 hover:bg-accent-600 text-white'
                    : 'bg-secondary-500 hover:bg-secondary-600 text-white'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;