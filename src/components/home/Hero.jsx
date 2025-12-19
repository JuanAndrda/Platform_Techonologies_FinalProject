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
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-accent-blue rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[32rem] md:h-[32rem] bg-cyan-500 rounded-full filter blur-3xl"
      />

      {/* Content */}
      <div className="section-container relative z-10 flex items-center justify-center min-h-screen py-20">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="text-light-secondary text-sm md:text-base mb-3 font-body tracking-widest"
          >
            HI, I'M
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase mb-4 tracking-tight leading-tight"
          >
            JUAN MIGUEL
            <br />
            <span className="text-accent-blue">RASHLEY ANDRADA</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            custom={2}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg lg:text-xl text-light-secondary font-heading uppercase tracking-wide mb-8"
          >
            Information Technology Student
          </motion.p>

          {/* Description */}
          <motion.p
            custom={3}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-light-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Passionate about building innovative solutions with code.
            Specializing in <span className="text-white font-semibold">Java</span>, <span className="text-white font-semibold">Web Development</span> & <span className="text-white font-semibold">Software Engineering</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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

          {/* Scroll Indicator */}
          <motion.div
            custom={5}
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="flex justify-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaChevronDown className="text-light-secondary text-3xl" />
            </motion.div>
          </motion.div>
        </div>
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
