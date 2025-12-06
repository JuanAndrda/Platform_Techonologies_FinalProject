import { FloatingOrb } from './FloatingOrb';

export const AnimatedBackground = ({
  children,
  variant = 'default',
  className = ''
}) => {
  const variants = {
    home: {
      gradient: 'bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#4a9eff', position: 'top-right', size: 'large', duration: 8, delay: 0 },
        { color: '#9333ea', position: 'bottom-left', size: 'large', duration: 10, delay: 1 }
      ]
    },
    about: {
      gradient: 'bg-gradient-to-bl from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#06b6d4', position: 'top-left', size: 'large', duration: 9, delay: 0 },
        { color: '#4a9eff', position: 'bottom-right', size: 'large', duration: 11, delay: 1 }
      ]
    },
    skills: {
      gradient: 'bg-gradient-to-tr from-dark-secondary via-dark-bg to-dark-secondary',
      orbs: [
        { color: '#4a9eff', position: 'top-right', size: 'medium', duration: 8, delay: 0 },
        { color: '#10b981', position: 'bottom-left', size: 'medium', duration: 10, delay: 0.5 },
        { color: '#06b6d4', position: 'top-center', size: 'medium', duration: 12, delay: 1 }
      ]
    },
    projects: {
      gradient: 'bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#9333ea', position: 'top-left', size: 'large', duration: 9, delay: 0 },
        { color: '#ec4899', position: 'bottom-right', size: 'large', duration: 11, delay: 1 }
      ]
    },
    contact: {
      gradient: 'bg-gradient-to-tl from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#4a9eff', position: 'top-left', size: 'large', duration: 8, delay: 0 },
        { color: '#9333ea', position: 'bottom-right', size: 'large', duration: 10, delay: 1 }
      ]
    },
    projectDetail: {
      gradient: 'bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#4a9eff', position: 'top-left', size: 'large', duration: 10, delay: 0, blur: 'blur-2xl' },
        { color: '#9333ea', position: 'bottom-right', size: 'large', duration: 12, delay: 1, blur: 'blur-2xl' }
      ]
    },
    default: {
      gradient: 'bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg',
      orbs: [
        { color: '#4a9eff', position: 'top-right', size: 'large', duration: 8, delay: 0 }
      ]
    }
  };

  const config = variants[variant] || variants.default;

  return (
    <div className={`relative overflow-hidden bg-dark-bg ${className}`}>
      {/* Animated Gradient Background */}
      <div className={`absolute inset-0 ${config.gradient} opacity-50`} aria-hidden="true" />

      {/* Floating Orbs */}
      {config.orbs.map((orb, index) => (
        <FloatingOrb
          key={`orb-${variant}-${index}`}
          color={orb.color}
          position={orb.position}
          size={orb.size}
          animationDuration={orb.duration}
          animationDelay={orb.delay}
          blur={orb.blur || 'blur-3xl'}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
