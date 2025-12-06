import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillCategories = [
    { title: 'Frontend Development', skills: skills.frontend, color: '#61DAFB' },
    { title: 'Backend Development', skills: skills.backend, color: '#339933' },
    { title: 'Programming Fundamentals', skills: skills.fundamentals, color: '#4a9eff' },
    { title: 'Tools & Technologies', skills: skills.tools, color: '#F05032' }
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
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={categoryIndex}
            >
              {/* Category Title */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                  {category.title}
                </h3>
                <div
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
              </div>

              {/* Skills Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-light-secondary text-lg">
            Always learning and exploring new technologies to expand my skillset
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
