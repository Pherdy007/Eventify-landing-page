import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, UserGroupIcon, WifiIcon, CameraIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';

const HallRentals = () => {
  const [viewMode, setViewMode] = useState('grid');

  const halls = [
    {
      id: 1,
      name: 'Royal Banquet Hall',
      location: 'Victoria Island, Lagos',
      capacity: '500 guests',
      price: '₦200,000/day',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.pexels.com/photos/14716282/pexels-photo-14716282.jpeg',
      amenities: ['WiFi', 'Parking', 'AC', 'Sound System', 'Catering Kitchen'],
      description: 'Elegant venue perfect for weddings and corporate events with stunning city views.',
      featured: true,
    },
    {
      id: 2,
      name: 'Garden Paradise Events',
      location: 'Ikoyi, Lagos',
      capacity: '300 guests',
      price: '₦150,000/day',
      rating: 4.8,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf',
      amenities: ['Garden Setting', 'Natural Lighting', 'Parking', 'Catering'],
      description: 'Beautiful outdoor venue surrounded by lush gardens, perfect for romantic celebrations.',
      featured: false,
    },
    {
      id: 3,
      name: 'Crystal Ballroom',
      location: 'Abuja Municipal',
      capacity: '800 guests',
      price: '₦350,000/day',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1616431629879-af0e95bf9f88',
      amenities: ['Luxury Interior', 'VIP Rooms', 'Full Service', 'Decor Included'],
      description: 'Premium luxury venue for high-end events with world-class amenities.',
      featured: true,
    },
    {
      id: 4,
      name: 'Heritage Cultural Center',
      location: 'Accra, Ghana',
      capacity: '400 guests',
      price: '₦180,000/day',
      rating: 4.7,
      reviews: 67,
      image: 'https://images.pexels.com/photos/32550635/pexels-photo-32550635.jpeg',
      amenities: ['Cultural Decor', 'Traditional Setup', 'Parking', 'Catering'],
      description: 'Celebrate with authentic African ambiance in this culturally rich venue.',
      featured: false,
    },
  ];

  const amenityIcons = {
    'WiFi': WifiIcon,
    'Parking': UserGroupIcon,
    'AC': SparklesIcon,
    'Sound System': CameraIcon,
    'Catering Kitchen': SparklesIcon,
    'Garden Setting': SparklesIcon,
    'Natural Lighting': SparklesIcon,
    'Catering': SparklesIcon,
    'Luxury Interior': SparklesIcon,
    'VIP Rooms': UserGroupIcon,
    'Full Service': SparklesIcon,
    'Decor Included': SparklesIcon,
    'Cultural Decor': SparklesIcon,
    'Traditional Setup': SparklesIcon,
  };

  return (
    <section id="halls" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            Stunning <span className="hero-gradient-text">Venues</span> Await
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            From intimate garden settings to grand ballrooms, find the perfect venue for your special occasion.
          </p>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Location</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none">
                  <option>All Cities</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Accra</option>
                  <option>Nairobi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Capacity</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none">
                  <option>Any Size</option>
                  <option>Under 100</option>
                  <option>100-300</option>
                  <option>300-500</option>
                  <option>500+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">Price Range</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:outline-none">
                  <option>Any Budget</option>
                  <option>Under ₦100k</option>
                  <option>₦100k-₦200k</option>
                  <option>₦200k-₦300k</option>
                  <option>₦300k+</option>
                </select>
              </div>
              <div className="flex items-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary py-3 rounded-lg font-semibold"
                >
                  Search Venues
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Halls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {halls.map((hall, index) => (
            <motion.div
              key={hall.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover-lift ${
                hall.featured ? 'ring-2 ring-primary-200' : ''
              }`}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover image-hover"
                />
                
                {/* Featured Badge */}
                {hall.featured && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300"
                >
                  <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
                </motion.button>

                {/* Price Tag */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-lg font-bold text-secondary-900">{hall.price}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-secondary-900">
                    {hall.name}
                  </h3>
                  <div className="flex items-center text-sm text-amber-600">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{hall.rating}</span>
                    <span className="text-gray-500 ml-1">({hall.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center text-secondary-600 mb-2">
                  <MapPinIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{hall.location}</span>
                </div>

                <div className="flex items-center text-secondary-600 mb-4">
                  <UserGroupIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm">{hall.capacity}</span>
                </div>

                <p className="text-secondary-600 text-sm mb-4">
                  {hall.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {hall.amenities.slice(0, 4).map((amenity, amenityIndex) => {
                    const IconComponent = amenityIcons[amenity] || SparklesIcon;
                    return (
                      <div
                        key={amenityIndex}
                        className="flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        <IconComponent className="h-3 w-3 mr-1" />
                        {amenity}
                      </div>
                    );
                  })}
                  {hall.amenities.length > 4 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{hall.amenities.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Book Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-secondary-900 mb-4">
            Can't Find the Perfect Venue?
          </h3>
          <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
            Let our venue specialists help you find exactly what you're looking for. We have access to exclusive venues not listed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl font-semibold"
            >
              Request Custom Search
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-4 rounded-xl font-semibold"
            >
              List Your Venue
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HallRentals;