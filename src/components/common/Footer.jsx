import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { SiReact } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/JuanAndrda', label: 'GitHub' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
    { icon: FaFacebook, url: 'https://www.facebook.com/juanrashley.andrada', label: 'Facebook' },
    { icon: FaInstagram, url: 'https://www.instagram.com/onemiguel_', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-dark-bg border-t border-accent-blue/20 mt-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-secondary to-dark-bg opacity-50" aria-hidden="true" />

      <div className="section-container relative z-10 py-12">
        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Column 1: About/Branding */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-4"
            >
              <h3 className="text-2xl font-heading font-bold">
                <span className="text-white">JA</span>
                <span className="text-accent-blue">.</span>
              </h3>
            </motion.div>
            <p className="text-light-secondary text-sm mb-4">
              Information Technology Student & Developer
            </p>
            <p className="text-light-secondary text-xs leading-relaxed">
              Building innovative solutions with modern web technologies and a passion for clean code.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-light-secondary hover:text-accent-blue transition-colors duration-300 text-sm inline-block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-accent-blue mt-1 flex-shrink-0" />
                <a
                  href="mailto:juanandrada@email.com"
                  className="text-light-secondary hover:text-accent-blue transition-colors duration-300 text-sm"
                >
                  juanandrada@email.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent-blue mt-1 flex-shrink-0" />
                <span className="text-light-secondary text-sm">
                  Leon, Iloilo, Philippines
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-dark-secondary rounded-full flex items-center justify-center text-light-secondary hover:text-accent-blue hover:bg-accent-blue/10 border border-dark-border hover:border-accent-blue transition-all duration-300 hover:shadow-[0_0_15px_rgba(74,158,255,0.3)]"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright & Built With */}
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-secondary text-sm">
            © {currentYear} Juan Miguel Rashley Andrada. All rights reserved.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-light-secondary text-sm"
          >
            <span>Built with</span>
            <FaHeart className="text-red-500 text-xs" />
            <span>and</span>
            <SiReact className="text-accent-blue text-base" />
            <span className="font-semibold text-accent-blue">React</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
