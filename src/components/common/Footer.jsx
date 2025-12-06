import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaHeart, FaReact } from 'react-icons/fa';

const Footer = () => {
  const socials = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com/JuanAndrda' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://www.facebook.com/juanrashley.andrada' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/onemiguel_' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary py-8 mt-20">
      <div className="section-container">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links - Mobile Only */}
          <div className="flex lg:hidden items-center space-x-6">
            {socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-light-secondary hover:text-accent-blue transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-light-secondary">
            <p className="text-sm">
              © {currentYear} Juan Miguel Rashley Andrada. All rights reserved.
            </p>
          </div>

          {/* Built With */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-light-secondary text-sm"
          >
            <span>Built with</span>
            <FaHeart className="text-red-500" />
            <span>and</span>
            <FaReact className="text-accent-blue" />
            <span>React</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
