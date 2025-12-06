import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialSidebar = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/JuanAndrda',
      color: '#ffffff'
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: 'https://www.facebook.com/juanrashley.andrada',
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/onemiguel_',
      color: '#E4405F'
    }
  ];

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-6 pl-6">
        {socials.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              x: 5,
              color: social.color
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-2xl text-light-secondary hover:text-accent-blue transition-all duration-300"
            aria-label={social.name}
          >
            <social.icon />
          </motion.a>
        ))}

        {/* Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-0.5 bg-light-secondary mx-auto"
        />
      </div>
    </motion.div>
  );
};

export default SocialSidebar;
