'use client';

import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const smoothScroll = () => {
      const scrollY = window.scrollY;
      const target = scrollRef.current;

      if (target) {
        target.style.transform = `translateY(-${scrollY}px)`;
      }

      rafId = requestAnimationFrame(smoothScroll);
    };

    rafId = requestAnimationFrame(smoothScroll);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} className="will-change-transform">
      {children}
    </div>
  );
}
