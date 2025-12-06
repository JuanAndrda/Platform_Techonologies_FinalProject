import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const { activeSection, scrollToSection } = useScrollSpy(sections);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-heading font-bold cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="text-white">JA</span>
            <span className="text-accent-blue">.</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.button
                key={section}
                onClick={() => handleNavClick(section)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-accent-blue'
                    : 'text-light-primary hover:text-accent-blue'
                }`}
              >
                {section}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-dark-secondary"
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`text-lg font-medium uppercase tracking-wider transition-colors duration-300 ${
                activeSection === section
                  ? 'text-accent-blue'
                  : 'text-light-primary hover:text-accent-blue'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
