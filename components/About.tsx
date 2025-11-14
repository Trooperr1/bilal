'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '50+', label: 'Industry Awards' },
  { number: '12+', label: 'Years Experience' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We push boundaries and explore new frontiers in design and technology.',
  },
  {
    title: 'Excellence',
    description: 'Every project is crafted with meticulous attention to detail and quality.',
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to bring their vision to life.',
  },
  {
    title: 'Impact',
    description: 'Creating meaningful experiences that drive real business results.',
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-gray-400 uppercase tracking-widest text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Us
            </motion.p>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Crafting Digital <span className="text-gradient">Masterpieces</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                At Jaff Studio, we are a collective of designers, developers, and creative
                thinkers dedicated to pushing the boundaries of what's possible in digital design.
              </p>
              <p>
                Our approach combines cutting-edge technology with timeless design principles
                to create experiences that are not only visually stunning but also highly
                functional and user-centric.
              </p>
              <p>
                We believe in the power of collaboration, innovation, and attention to detail
                to deliver solutions that exceed expectations and drive meaningful results.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            style={{ y, opacity }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-effect p-8 text-center hover-lift cursor-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-display font-bold mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            Our Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <span className="text-2xl font-display font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
