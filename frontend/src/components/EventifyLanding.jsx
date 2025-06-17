import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import VendorShowcase from './VendorShowcase';
import HallRentals from './HallRentals';
import PremiumEvents from './PremiumEvents';
import EscrowWallet from './EscrowWallet';
import Testimonials from './Testimonials';
import Footer from './Footer';

const EventifyLanding = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <VendorShowcase />
        <HallRentals />
        <PremiumEvents />
        <EscrowWallet />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default EventifyLanding;