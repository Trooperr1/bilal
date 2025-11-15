'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* 3D Background with gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <Scene3D />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        {/* Main Hero Content - Modern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left - Hero Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              <motion.p
                className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-6 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Creative Studio
              </motion.p>

              <h1 className="hero-text font-display mb-8 leading-none">
                <motion.span
                  className="block text-shimmer"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  CRAFT
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  THE
                </motion.span>
                <motion.span
                  className="block text-gradient-modern"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  FUTURE
                </motion.span>
              </h1>

              <motion.p
                className="text-lg md:text-xl max-w-xl text-gray-400 leading-relaxed mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                We design and build digital experiences that push boundaries, inspire audiences, and drive real results.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Link href="/contact">
                  <motion.button
                    className="group px-10 py-5 bg-white text-black font-medium rounded-2xl hover:bg-gray-100 transition-smooth modern-button relative overflow-hidden glow-effect-strong"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start a Project
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.button>
                </Link>

                <Link href="/work">
                  <motion.button
                    className="px-10 py-5 border-2 modern-border-glow font-medium rounded-2xl hover:bg-white/5 transition-smooth"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Bento Grid Stats */}
          <div className="lg:col-span-5">
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Stat Card 1 - Large */}
              <motion.div
                className="col-span-2 bento-card p-8 cursor-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-6xl md:text-7xl font-display font-bold mb-2 text-shimmer">
                      500+
                    </div>
                    <p className="text-gray-400">Projects Delivered</p>
                  </div>
                  <div className="text-5xl opacity-20">🚀</div>
                </div>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div
                className="bento-card p-6 cursor-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  98%
                </div>
                <p className="text-sm text-gray-400">Satisfaction</p>
              </motion.div>

              {/* Stat Card 3 */}
              <motion.div
                className="bento-card p-6 cursor-hover"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  50+
                </div>
                <p className="text-sm text-gray-400">Awards</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <motion.div
          className="mt-32 flex items-center gap-8 text-gray-600 text-sm uppercase tracking-wider overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <span>↓ Scroll to explore</span>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
