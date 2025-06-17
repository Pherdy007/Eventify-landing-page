import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const footerSections = [
    {
      title: 'For Customers',
      links: [
        { name: 'Find Vendors', href: '#vendors' },
        { name: 'Browse Venues', href: '#halls' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Event Planning Guide', href: '#' },
        { name: 'Pricing', href: '#' },
      ]
    },
    {
      title: 'For Vendors',
      links: [
        { name: 'Join as Vendor', href: '#' },
        { name: 'Vendor Dashboard', href: '#' },
        { name: 'Success Stories', href: '#' },
        { name: 'Vendor Resources', href: '#' },
        { name: 'Premium Membership', href: '#premium' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Live Chat', href: '#' },
        { name: 'Dispute Resolution', href: '#' },
        { name: 'Safety Guidelines', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Partner With Us', href: '#' },
        { name: 'Investor Relations', href: '#' },
      ]
    }
  ];

  const socialMedia = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'YouTube', icon: '📹', href: '#' },
  ];

  const offices = [
    {
      city: 'Lagos',
      country: 'Nigeria',
      address: 'Victoria Island, Lagos State',
      phone: '+234 901 000 0000'
    },
    {
      city: 'Accra',
      country: 'Ghana',
      address: 'Airport City, Accra',
      phone: '+233 30 000 0000'
    },
    {
      city: 'Nairobi',
      country: 'Kenya',
      address: 'Westlands, Nairobi',
      phone: '+254 70 000 0000'
    }
  ];

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.pexels.com/photos/32550635/pexels-photo-32550635.jpeg"
          alt="African Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-secondary-900/70"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                Stay Updated with <span className="hero-gradient-text">EVENTIFY</span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest event planning tips, vendor spotlights, and exclusive offers delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-primary-500 focus:outline-none text-white placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-6 py-3 rounded-lg font-semibold"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">E</span>
                  </div>
                  <span className="text-2xl font-heading font-bold hero-gradient-text">
                    EVENTIFY.NG
                  </span>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Africa's premier event planning platform connecting customers with verified vendors and stunning venues. 
                  Making celebrations seamless across the continent.
                </p>

                {/* Social Media */}
                <div className="flex gap-4 mb-8">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-all duration-300 text-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    🔒 SSL Secured
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    🏆 Award Winning
                  </div>
                  <div className="bg-white/10 px-3 py-1 rounded-full text-xs">
                    ✅ Verified Platform
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-heading font-bold mb-4">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h4 className="text-lg font-heading font-bold mb-4">
                  Our Offices
                </h4>
                
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="text-sm">
                      <div className="flex items-center text-primary-400 mb-1">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{office.city}, {office.country}</span>
                      </div>
                      <p className="text-gray-300 text-xs mb-1">{office.address}</p>
                      <div className="flex items-center text-gray-300 text-xs">
                        <PhoneIcon className="h-3 w-3 mr-1" />
                        {office.phone}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center text-primary-400 mb-2">
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    <span className="font-semibold">General Inquiries</span>
                  </div>
                  <p className="text-gray-300 text-sm">hello@eventify.ng</p>
                  
                  <div className="flex items-center text-primary-400 mb-2 mt-3">
                    <GlobeAltIcon className="h-4 w-4 mr-2" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                  <p className="text-gray-300 text-sm">support@eventify.ng</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-300 text-sm">
                © 2025 EVENTIFY.NG. All rights reserved. Proudly serving Africa.
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;