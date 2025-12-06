import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaGithub, FaCoffee } from 'react-icons/fa';
import { staggerContainer, scaleIn } from '../../utils/animations';

const Stats = () => {
  const stats = [
    { label: 'Projects Completed', value: '6+', icon: FaCode },
    { label: 'Technologies Learned', value: '10+', icon: FaLaptopCode },
    { label: 'GitHub Repos', value: '7+', icon: FaGithub },
    { label: 'Coffee Consumed', value: '∞', icon: FaCoffee }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={scaleIn}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(74, 158, 255, 0.3)"
          }}
          className="bg-dark-secondary p-6 rounded-lg text-center border border-dark-border hover:border-accent-blue transition-all duration-300"
        >
          <stat.icon className="text-4xl text-accent-blue mx-auto mb-3" />
          <h4 className="text-3xl font-heading font-bold text-white mb-2">
            {stat.value}
          </h4>
          <p className="text-light-secondary text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
