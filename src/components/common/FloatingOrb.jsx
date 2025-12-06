import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const FloatingOrb = ({
  color = '#4a9eff',
  position = 'top-right',
  size = 'large',
  animationDuration = 8,
  animationDelay = 0,
  blur = 'blur-3xl'
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Responsive sizes using Tailwind's responsive classes
  const sizeClasses = {
    small: 'w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64',
    medium: 'w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80',
    large: 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
  };

  const positionClasses = {
    'top-right': 'top-10 right-10 md:top-20 md:right-20',
    'top-left': 'top-10 left-10 md:top-20 md:left-20',
    'bottom-right': 'bottom-10 right-10 md:bottom-20 md:right-20',
    'bottom-left': 'bottom-10 left-10 md:bottom-20 md:left-20',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-center': 'top-10 left-1/2 -translate-x-1/2 md:top-20',
    'bottom-center': 'bottom-10 left-1/2 -translate-x-1/2 md:bottom-20'
  };

  return (
    <motion.div
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={prefersReducedMotion ? {} : {
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: animationDelay
      }}
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} rounded-full filter ${blur} opacity-20 pointer-events-none`}
      style={{
        backgroundColor: color,
        willChange: prefersReducedMotion ? 'auto' : 'transform, opacity'
      }}
      aria-hidden="true"
    />
  );
};
