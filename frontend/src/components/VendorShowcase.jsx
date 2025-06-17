import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

const VendorShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Vendors' },
    { id: 'photographers', name: 'Photographers' },
    { id: 'caterers', name: 'Caterers' },
    { id: 'decorators', name: 'Decorators' },
    { id: 'musicians', name: 'Musicians' },
    { id: 'planners', name: 'Event Planners' },
  ];

  const vendors = [
    {
      id: 1,
      name: 'Adunni Photography',
      category: 'photographers',
      location: 'Lagos, Nigeria',
      rating: 4.9,
      reviews: 127,
      image: 'https://images.pexels.com/photos/6170766/pexels-photo-6170766.jpeg',
      verified: true,
      specialties: ['Weddings', 'Portraits', 'Corporate Events'],
      startingPrice: '₦150,000',
      description: 'Capturing life\'s precious moments with African artistry and modern techniques.',
    },
    {
      id: 2,
      name: 'Royal African Catering',
      category: 'caterers',
      location: 'Accra, Ghana',
      rating: 4.8,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1666305121424-b6f19dfbabed',
      verified: true,
      specialties: ['Traditional Cuisine', 'International Menu', 'Dietary Options'],
      startingPrice: '₦50,000',
      description: 'Authentic African flavors meets international cuisine excellence.',
    },
    {
      id: 3,
      name: 'Elegant Decorations Co.',
      category: 'decorators',
      location: 'Nairobi, Kenya',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/14716282/pexels-photo-14716282.jpeg',
      verified: true,
      specialties: ['Wedding Decor', 'Corporate Setup', 'Traditional Themes'],
      startingPrice: '₦80,000',
      description: 'Creating magical atmospheres that celebrate African culture and elegance.',
    },
    {
      id: 4,
      name: 'Harmony Music Collective',
      category: 'musicians',
      location: 'Cape Town, South Africa',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1738669469338-801b4e9dbccf',
      verified: true,
      specialties: ['Live Band', 'DJ Services', 'Traditional Music'],
      startingPrice: '₦120,000',
      description: 'Bringing the rhythm of Africa to your celebrations with professional music services.',
    },
    {
      id: 5,
      name: 'Perfect Events Planning',
      category: 'planners',
      location: 'Abuja, Nigeria',
      rating: 4.8,
      reviews: 94,
      image: 'https://images.pexels.com/photos/3051576/pexels-photo-3051576.jpeg',
      verified: true,
      specialties: ['Full Planning', 'Coordination', 'Luxury Events'],
      startingPrice: '₦200,000',
      description: 'Your vision, our expertise. Creating unforgettable experiences across Africa.',
    },
    {
      id: 6,
      name: 'Golden Lens Studios',
      category: 'photographers',
      location: 'Kigali, Rwanda',
      rating: 4.9,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1712903276040-c99b32a057eb',
      verified: true,
      specialties: ['Cinematic Videos', 'Drone Photography', 'Event Coverage'],
      startingPrice: '₦180,000',
      description: 'Award-winning cinematography that tells your unique African story.',
    },
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesFilter = activeFilter === 'all' || vendor.category === activeFilter;
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="vendors" className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/20">
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
            Discover <span className="hero-gradient-text">Verified</span> Vendors
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Connect with Africa's top-rated event professionals. Every vendor is verified and reviewed by real customers.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              {/* Search Bar */}
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search vendors by name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Filter Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center px-6 py-4 bg-white border-2 border-gray-200 rounded-xl hover:border-primary-500 transition-all duration-300"
              >
                <FunnelIcon className="h-5 w-5 mr-2 text-gray-600" />
                Filter
              </motion.button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-secondary-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVendors.map((vendor, index) => (
            <motion.div
              key={vendor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift"
            >
              {/* Vendor Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover image-hover"
                />
                {vendor.verified && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <CheckBadgeIcon className="h-6 w-6 text-accent-500" />
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-800">
                    {vendor.startingPrice}
                  </span>
                </div>
              </div>

              {/* Vendor Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-heading font-bold text-secondary-900">
                    {vendor.name}
                  </h3>
                  <div className="flex items-center text-sm text-amber-600">
                    <StarIcon className="h-4 w-4 mr-1" />
                    <span className="font-semibold">{vendor.rating}</span>
                    <span className="text-gray-500 ml-1">({vendor.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center text-secondary-600 mb-3">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  <span className="text-sm">{vendor.location}</span>
                </div>

                <p className="text-secondary-600 text-sm mb-4">
                  {vendor.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vendor.specialties.slice(0, 3).map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Profile
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-all duration-300"
                  >
                    Contact
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold"
          >
            View All Vendors
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default VendorShowcase;