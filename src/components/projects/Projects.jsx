import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, categories } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen py-20 bg-dark-bg">
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
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/50'
                  : 'bg-dark-secondary text-light-secondary hover:bg-dark-border hover:text-white border border-dark-border'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-20"
          >
            <p className="text-light-secondary text-xl">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
