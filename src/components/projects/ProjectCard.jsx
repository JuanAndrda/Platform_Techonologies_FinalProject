import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Gradient variations based on category
  const gradientMap = {
    'Java': 'from-orange-500 to-red-600',
    'Web Development': 'from-accent-blue to-purple-600',
    'Featured': 'from-cyan-500 to-blue-600',
  };

  const gradient = gradientMap[project.category] || 'from-accent-blue to-purple-600';

  return (
    <div className="bg-dark-secondary rounded-lg overflow-hidden border border-dark-border hover:border-accent-blue transition-all duration-300 group flex flex-col h-full hover:-translate-y-2">

      {/* Project Image - Fixed Height */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden flex-shrink-0`}>
        {/* Actual Project Image */}
        {project.image && !imageError && (
          <>
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-700" />
            )}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </>
        )}

        {/* Fallback letter if no image or error */}
        {(!project.image || imageError) && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <p className="text-white text-6xl font-bold opacity-30 drop-shadow-lg">
                {project.title.charAt(0)}
              </p>
            </div>
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-bg bg-opacity-90 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-accent-blue rounded-full text-white hover:bg-opacity-80 hover:scale-110 transition-all"
            aria-label="View on GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent-blue rounded-full text-white hover:bg-opacity-80 hover:scale-110 transition-all"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="text-2xl" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-accent-blue px-3 py-1 rounded-full flex items-center space-x-1">
            <FaStar className="text-yellow-300 text-xs" />
            <span className="text-white text-xs font-semibold">Featured</span>
          </div>
        )}
      </div>

      {/* Project Info - Flexible grow to fill space */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="text-xs font-semibold text-accent-blue bg-accent-blue bg-opacity-10 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title - Fixed height */}
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accent-blue transition-colors line-clamp-2 min-h-[3.5rem]">
          {project.title}
        </h3>

        {/* Description - Fixed 3 lines */}
        <p className="text-light-secondary text-sm mb-4 line-clamp-3 min-h-[4.5rem]">
          {project.description}
        </p>

        {/* Technologies - Push to bottom */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs text-light-secondary bg-dark-bg px-3 py-1 rounded-full border border-dark-border"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-light-secondary bg-dark-bg px-3 py-1 rounded-full border border-dark-border">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* View Project Button - Fixed at bottom */}
      <div className="px-6 pb-6 mt-auto">
        <Link to={`/projects/${project.slug}`}>
          <button className="block w-full py-3 text-center bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
            View Project →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
