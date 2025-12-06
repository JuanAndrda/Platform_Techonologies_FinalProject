import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { fadeInUp, fadeInDown, textReveal } from '../../utils/animations';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetPosition = element.offsetTop - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on a different page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg opacity-50" />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-accent-blue rounded-full filter blur-3xl opacity-20"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20"
      />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="text-light-secondary text-lg md:text-xl mb-4 font-body"
          >
            HI, I'M
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white uppercase mb-6 tracking-tight"
          >
            JUAN MIGUEL
            <br />
            RASHLEY ANDRADA
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={2}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl lg:text-3xl text-accent-blue font-heading uppercase tracking-wider mb-8"
          >
            2ND YEAR INFORMATION TECHNOLOGY STUDENT
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-light-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Passionate about building innovative solutions with code.
            <br />
            Specializing in Java, Web Development & Software Engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(74, 158, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate('/projects')}
              className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md transition-all duration-300"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate('/contact')}
              className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-accent-blue hover:text-white transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <FaChevronDown className="text-light-secondary text-3xl" />
        </motion.div>
      </div>

      {/* Year Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute right-8 bottom-8 text-6xl font-heading font-bold text-dark-border opacity-50"
      >
        2025
      </motion.div>
    </section>
  );
};

export default Hero;
