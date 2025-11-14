'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Luxury Brand Redesign',
    category: 'Branding & Identity',
    description: 'A complete brand transformation for a premium lifestyle brand',
    year: '2024',
    color: '#FFFFFF',
  },
  {
    id: 2,
    title: 'Immersive 3D Experience',
    category: '3D Design & Development',
    description: 'Interactive 3D product showcase with real-time customization',
    year: '2024',
    color: '#E5E5E5',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Modern, high-performance online shopping experience',
    year: '2023',
    color: '#D4D4D4',
  },
  {
    id: 4,
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    description: 'Intuitive mobile application for health and wellness',
    year: '2023',
    color: '#A3A3A3',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-hover overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Placeholder for project image - you can replace with actual images */}
        <div
          className="absolute inset-0 flex items-center justify-center text-9xl font-display font-bold opacity-10"
          style={{ color: project.color }}
        >
          {project.id}
        </div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.button>
        </motion.div>

        {/* Hover effect gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Project Info */}
      <div className="p-6 md:p-8 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="flex items-start justify-between mb-3">
          <div>
            <motion.p
              className="text-sm text-gray-400 uppercase tracking-wider mb-2"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {project.category}
            </motion.p>
            <motion.h3
              className="text-2xl md:text-3xl font-display font-bold"
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              {project.title}
            </motion.h3>
          </div>
          <span className="text-sm text-gray-500 font-mono">{project.year}</span>
        </div>
        <motion.p
          className="text-gray-400 leading-relaxed"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="work" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-gradient-to-r from-white/5 to-transparent blur-3xl"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-20"
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
            Selected Projects
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="text-5xl md:text-7xl font-display font-bold max-w-2xl">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <motion.button
              className="px-8 py-3 border border-white text-white font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-hover self-start md:self-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
