'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Creating timeless brand experiences that resonate with your audience and define your market presence.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Marketing Collateral'],
    icon: '✦',
    color: 'from-white/10 to-white/5',
  },
  {
    number: '02',
    title: '3D Design',
    description: 'Immersive 3D experiences and visual storytelling that captivate and engage your audience.',
    features: ['3D Modeling', 'Animation', 'Product Visualization', 'Interactive Experiences'],
    icon: '◆',
    color: 'from-white/8 to-white/3',
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Cutting-edge websites and web applications built with the latest technologies and best practices.',
    features: ['Responsive Design', 'Performance Optimization', 'CMS Integration', 'E-commerce Solutions'],
    icon: '◉',
    color: 'from-white/10 to-white/5',
  },
  {
    number: '04',
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals and drive measurable results.',
    features: ['Market Research', 'UX Strategy', 'Content Strategy', 'Growth Planning'],
    icon: '⬡',
    color: 'from-white/8 to-white/3',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bento-card p-10 h-full cursor-hover">
        {/* Gradient background */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} rounded-3xl`} />

        <div className="relative z-10">
          {/* Icon & Number */}
          <div className="flex items-start justify-between mb-8">
            <motion.div
              className="text-7xl opacity-30 group-hover:opacity-50 transition-opacity"
              animate={{ rotate: isHovered ? 15 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
            </motion.div>
            <span className="text-sm font-mono text-gray-600 group-hover:text-gray-400 transition-colors">
              {service.number}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-gradient-modern transition-all">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors">
            {service.description}
          </p>

          {/* Features */}
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
              >
                <div className="w-1 h-1 rounded-full bg-white/50" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Arrow indicator */}
          <motion.div
            className="mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Explore
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/3 to-transparent blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Do
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-none">
            Our <span className="text-gradient-modern">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
            Comprehensive solutions designed to elevate your brand and drive success through innovation and creativity.
          </p>
        </motion.div>

        {/* Services Grid - Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-6">
            Ready to start your project?
          </p>
          <motion.button
            className="px-10 py-5 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-smooth glow-effect-strong modern-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
