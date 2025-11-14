'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxTextProps {
  children: string;
  baseVelocity?: number;
}

export default function ParallaxText({ children, baseVelocity = 1 }: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity * -200]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap py-8">
      <motion.div
        className="flex gap-8 text-6xl md:text-8xl font-display font-bold text-white/5"
        style={{ x }}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}
