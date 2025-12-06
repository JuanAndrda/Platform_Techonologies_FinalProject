import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SkillCard from '../components/skills/SkillCard';
import { skills } from '../data/skills';
import { FaArrowRight } from 'react-icons/fa';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

const SkillsPage = () => {
  return (
    <>
      <SEO
        title="Skills & Technologies | Juan Miguel Rashley Andrada"
        description="Explore my technical expertise in Java, Web Development, React, and more. A comprehensive overview of technologies I work with."
        canonical="/skills"
      />
      <AnimatedBackground variant="skills" className="min-h-screen py-20">
      <div className="section-container">
        {/* Page Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 pt-10"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-4">
            Skills & Technologies
          </h1>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-xl max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
        </motion.div>

        {/* All Skills Grid - Organized by Category */}
        <div className="space-y-12">
          {/* Frontend Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#61DAFB] rounded-full mr-3"></span>
              Frontend Development
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.frontend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#339933] rounded-full mr-3"></span>
              Backend Development
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.backend.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Programming Fundamentals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#4a9eff] rounded-full mr-3"></span>
              Programming Fundamentals
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.fundamentals.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-[#F05032] rounded-full mr-3"></span>
              Tools & Technologies
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.tools.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Learning Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-12 bg-dark-bg rounded-2xl border border-dark-border"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-6 text-center">
            My Learning Philosophy
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-heading font-semibold text-white mb-3">
                Continuous Learning
              </h4>
              <p className="text-light-secondary">
                I believe in staying updated with the latest technologies and industry
                best practices through constant learning and experimentation.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h4 className="text-xl font-heading font-semibold text-white mb-3">
                Hands-On Practice
              </h4>
              <p className="text-light-secondary">
                Building real projects is the best way to learn. Each project I create
                teaches me something new and valuable.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-heading font-semibold text-white mb-3">
                Community Driven
              </h4>
              <p className="text-light-secondary">
                Learning from others and sharing knowledge with the community helps
                everyone grow together.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Want to see these skills in action?
          </h3>
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Browse My Projects</span>
              <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </AnimatedBackground>
    </>
  );
};

export default SkillsPage;
