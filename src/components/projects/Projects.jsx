import { useState } from 'react';
import { projects, categories } from '../../data/projects';
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white uppercase mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-lg max-w-2xl mx-auto">
            A showcase of my recent projects and work
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-heading font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/50'
                  : 'bg-dark-secondary text-light-secondary hover:bg-dark-border hover:text-white border border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Instant display without animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-light-secondary text-xl">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
