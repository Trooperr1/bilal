'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    number: '01',
    title: 'Brand Identity',
    description: 'Creating timeless brand experiences that resonate with your audience and define your market presence.',
    features: ['Logo Design', 'Visual Identity', 'Brand Guidelines', 'Marketing Collateral'],
  },
  {
    number: '02',
    title: '3D Design',
    description: 'Immersive 3D experiences and visual storytelling that captivate and engage your audience.',
    features: ['3D Modeling', 'Animation', 'Product Visualization', 'Interactive Experiences'],
  },
  {
    number: '03',
    title: 'Web Development',
    description: 'Cutting-edge websites and web applications built with the latest technologies and best practices.',
    features: ['Responsive Design', 'Performance Optimization', 'CMS Integration', 'E-commerce Solutions'],
  },
  {
    number: '04',
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals and drive measurable results.',
    features: ['Market Research', 'UX Strategy', 'Content Strategy', 'Growth Planning'],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-hover"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="glass-effect p-8 md:p-12 hover-lift relative overflow-hidden">
        {/* Background gradient on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Number */}
          <motion.div
            className="text-6xl md:text-8xl font-display font-bold text-white/10 mb-6"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {service.number}
          </motion.div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-8 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="text-sm text-gray-300 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            className="absolute top-8 right-8 md:top-12 md:right-12"
            animate={{
              x: isHovered ? 10 : 0,
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
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
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-white/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-400 uppercase tracking-widest text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What We Do
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand and drive success
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
