import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : activeFilter === 'Featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <SEO
        title="My Projects | Juan Miguel Rashley Andrada"
        description="Browse my portfolio of projects featuring Java applications, web development work, and software engineering solutions."
        canonical="/projects"
      />
      <AnimatedBackground variant="projects" className="min-h-screen py-20">
        <div className="section-container">
          {/* Page Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16 pt-10"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-4">
              My Projects
            </h1>
            <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
            <p className="text-light-secondary text-xl max-w-3xl mx-auto">
              A showcase of my work, featuring projects in Java, Web Development, and Software Engineering
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
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
            animate="visible"
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
      </AnimatedBackground>
    </>
  );
};

export default ProjectsPage;
