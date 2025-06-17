import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  CreditCardIcon, 
  ClockIcon, 
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const EscrowWallet = () => {
  const trustFeatures = [
    {
      icon: ShieldCheckIcon,
      title: 'Secure Escrow Protection',
      description: 'Your money is held safely until the event is successfully completed to your satisfaction.',
      color: 'accent'
    },
    {
      icon: CreditCardIcon,
      title: 'Multiple Payment Options',
      description: 'Pay with cards, bank transfers, or mobile money. All transactions are encrypted and secure.',
      color: 'primary'
    },
    {
      icon: ClockIcon,
      title: 'Milestone-Based Releases',
      description: 'Funds are released based on agreed milestones, ensuring vendors deliver as promised.',
      color: 'secondary'
    },
    {
      icon: UserGroupIcon,
      title: 'Dispute Resolution',
      description: 'Our expert mediation team resolves any disputes fairly and quickly.',
      color: 'accent'
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Book & Pay',
      description: 'Choose your vendor and make payment. Funds go into secure escrow.',
      status: 'completed'
    },
    {
      step: '2',
      title: 'Vendor Notification',
      description: 'Vendor receives booking notification and begins work preparation.',
      status: 'completed'
    },
    {
      step: '3',
      title: 'Service Delivery',
      description: 'Vendor delivers the agreed services for your event.',
      status: 'active'
    },
    {
      step: '4',
      title: 'Approval & Release',
      description: 'You approve the work and funds are released to the vendor.',
      status: 'pending'
    }
  ];

  const stats = [
    { number: '₦2.5B+', label: 'Transactions Protected' },
    { number: '99.8%', label: 'Dispute Resolution Rate' },
    { number: '24hrs', label: 'Average Release Time' },
    { number: '50K+', label: 'Happy Customers' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg"
          alt="Trust and Security"
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
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-6">
            <ShieldCheckIcon className="w-4 h-4 mr-2" />
            Bank-Level Security & Protection
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-secondary-900 mb-6">
            Your Money is <span className="hero-gradient-text">100% Safe</span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Our escrow wallet system ensures complete financial protection. Pay with confidence knowing your money is secure until your event is perfect.
          </p>
        </motion.div>

        {/* Trust Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                feature.color === 'primary' ? 'bg-primary-100' :
                feature.color === 'accent' ? 'bg-accent-100' : 'bg-secondary-100'
              }`}>
                <feature.icon className={`w-8 h-8 ${
                  feature.color === 'primary' ? 'text-primary-600' :
                  feature.color === 'accent' ? 'text-accent-600' : 'text-secondary-600'
                }`} />
              </div>
              <h3 className="text-lg font-heading font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-center text-secondary-900 mb-12">
            How Our <span className="hero-gradient-text">Escrow System</span> Works
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-white ${
                    step.status === 'completed' ? 'bg-accent-500' :
                    step.status === 'active' ? 'bg-primary-500' : 'bg-gray-300'
                  }`}>
                    {step.status === 'completed' ? (
                      <CheckCircleIcon className="w-6 h-6" />
                    ) : step.status === 'active' ? (
                      <ArrowPathIcon className="w-6 h-6 animate-spin" />
                    ) : (
                      step.step
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line (Desktop) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-300" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass p-6 rounded-2xl hover-lift"
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

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-2xl lg:text-3xl font-heading font-bold text-center text-secondary-900 mb-8">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  When is my money released to the vendor?
                </h4>
                <p className="text-secondary-600">
                  Funds are released only after you confirm that the vendor has delivered the agreed services successfully. You have full control.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  What if I'm not satisfied with the service?
                </h4>
                <p className="text-secondary-600">
                  Our dispute resolution team will mediate and ensure a fair outcome. Your money remains protected throughout the process.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  Are there any hidden fees?
                </h4>
                <p className="text-secondary-600">
                  No hidden fees. Our transparent pricing shows all costs upfront, including our small service fee for escrow protection.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  How secure are my payment details?
                </h4>
                <p className="text-secondary-600">
                  We use bank-level encryption and never store your payment details. All transactions are processed through certified payment gateways.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  Can I get a refund if I need to cancel?
                </h4>
                <p className="text-secondary-600">
                  Yes, refunds are processed according to our cancellation policy and the vendor's terms. The escrow system ensures you're protected.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-heading font-bold text-secondary-900 mb-2">
                  How long does dispute resolution take?
                </h4>
                <p className="text-secondary-600">
                  Most disputes are resolved within 48-72 hours. Our experienced team works quickly to ensure fair outcomes for all parties.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-4 rounded-xl font-semibold"
            >
              Learn More About Security
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EscrowWallet;