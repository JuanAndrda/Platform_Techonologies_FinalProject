import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { scaleIn } from '../../utils/animations';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -10 }}
      className="bg-dark-secondary rounded-lg overflow-hidden border border-dark-border hover:border-accent-blue transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-accent-blue to-purple-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <p className="text-white text-6xl font-bold opacity-20">
              {project.title.charAt(0)}
            </p>
          </div>
        </div>

        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-dark-bg bg-opacity-90 flex items-center justify-center space-x-4"
        >
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-accent-blue rounded-full text-white hover:bg-opacity-80 transition-all"
            aria-label="View on GitHub"
          >
            <FaGithub className="text-2xl" />
          </motion.a>

          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-accent-blue rounded-full text-white hover:bg-opacity-80 transition-all"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="text-2xl" />
            </motion.a>
          )}
        </motion.div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-blue px-3 py-1 rounded-full flex items-center space-x-1">
            <FaStar className="text-yellow-300 text-xs" />
            <span className="text-white text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent-blue bg-accent-blue bg-opacity-10 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-light-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-light-secondary bg-dark-bg px-3 py-1 rounded-full border border-dark-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* View Project Button */}
      <div className="px-6 pb-6">
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block w-full py-3 text-center bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300"
        >
          View Project →
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
