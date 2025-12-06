import { motion } from 'framer-motion';
import { AnimatedBackground } from './AnimatedBackground';

export const PageLoader = ({ variant = 'default' }) => {
  return (
    <AnimatedBackground variant={variant} className="min-h-screen flex items-center justify-center">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Skeleton Header */}
          <div className="text-center mb-16 pt-10">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-12 md:h-16 bg-dark-secondary rounded-lg mb-4 max-w-xl mx-auto"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="h-1 bg-accent-blue rounded max-w-20 mx-auto mb-6"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="h-4 bg-dark-secondary rounded-lg max-w-md mx-auto"
            />
          </div>

          {/* Skeleton Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <motion.div
                key={item}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.1 }}
                className="h-64 bg-dark-secondary rounded-lg border border-dark-border"
              />
            ))}
          </div>

          {/* Loading Text */}
          <div className="text-center mt-12">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-light-secondary text-lg"
            >
              Loading...
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
};
