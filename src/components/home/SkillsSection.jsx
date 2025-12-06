import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SkillCard from '../skills/SkillCard';
import { skills } from '../../data/skills';

const SkillsSection = () => {
  // Select only top skills for home page (first 2-3 from each category)
  const topSkills = [
    ...skills.frontend.slice(0, 3),
    ...skills.backend.slice(0, 2),
    ...skills.fundamentals.slice(0, 2),
    ...skills.tools.slice(0, 1)
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-dark-secondary">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-lg max-w-2xl mx-auto">
            A selection of my core technical skills and the technologies I work with
          </p>
        </motion.div>

        {/* Top Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {topSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* CTA to Skills page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/skills">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>View All Skills</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
