import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import { projects } from '../data/projects';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

const ProjectDetailPage = () => {
  const { slug } = useParams();

  // Find project by slug
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);

  // Get previous and next projects for navigation
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // If project not found, redirect to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO
        title={`${project.title} | Juan Miguel Rashley Andrada`}
        description={project.description}
        keywords={`${project.technologies.join(', ')}, Juan Andrada, Portfolio Project`}
        canonical={`/projects/${project.slug}`}
      />
      <AnimatedBackground variant="projectDetail" className="min-h-screen py-20">
      <div className="section-container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 pt-10"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-light-secondary hover:text-accent-blue transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Hero */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-light-secondary mb-6">
                {project.description}
              </p>
            </div>
            {project.featured && (
              <div className="bg-accent-blue px-4 py-2 rounded-full flex items-center space-x-2">
                <FaStar className="text-yellow-300" />
                <span className="text-white font-semibold">Featured</span>
              </div>
            )}
          </div>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 bg-dark-secondary rounded-md border border-dark-border">
              <span className="text-light-secondary text-sm">Category: </span>
              <span className="text-white font-semibold">{project.category}</span>
            </div>
            {project.date && (
              <div className="px-4 py-2 bg-dark-secondary rounded-md border border-dark-border">
                <span className="text-light-secondary text-sm">Date: </span>
                <span className="text-white font-semibold">{project.date}</span>
              </div>
            )}
            {project.status && (
              <div className="px-4 py-2 bg-dark-secondary rounded-md border border-dark-border">
                <span className="text-light-secondary text-sm">Status: </span>
                <span className="text-white font-semibold">{project.status}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
            >
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </motion.a>
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-accent-blue text-accent-blue font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {project.image ? (
            <div className="w-full h-96 rounded-2xl overflow-hidden border-2 border-dark-border hover:border-accent-blue transition-colors duration-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-96 bg-gradient-to-br from-accent-blue to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <p className="text-white text-9xl font-bold opacity-20 mb-4">
                  {project.title.charAt(0)}
                </p>
                <p className="text-white text-xl">Project Screenshot</p>
                <p className="text-light-primary text-sm mt-2">Coming Soon</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">
                Overview
              </h2>
              <div className="text-light-secondary text-lg leading-relaxed space-y-4">
                {project.fullDescription.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>
            </motion.section>

            {/* Problem & Solution */}
            {project.problem && project.solution && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                <div className="p-6 bg-dark-secondary rounded-lg border border-dark-border">
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Problem
                  </h3>
                  <p className="text-light-secondary">{project.problem}</p>
                </div>
                <div className="p-6 bg-dark-secondary rounded-lg border border-dark-border">
                  <h3 className="text-xl font-heading font-bold text-white mb-4">
                    Solution
                  </h3>
                  <p className="text-light-secondary">{project.solution}</p>
                </div>
              </motion.section>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-dark-secondary rounded-lg border border-dark-border hover:border-accent-blue transition-colors duration-300"
                    >
                      <h3 className="text-lg font-heading font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-light-secondary">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.challenges.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-dark-secondary rounded-lg border border-dark-border"
                    >
                      <h3 className="text-lg font-heading font-semibold text-accent-blue mb-2">
                        Challenge: {item.challenge}
                      </h3>
                      <p className="text-light-secondary">
                        <strong>Solution:</strong> {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Key Learnings */}
            {project.learnings && project.learnings.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {project.learnings.map((learning, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-3 text-light-secondary"
                    >
                      <span className="text-accent-blue text-xl mt-1">✓</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies Used */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 bg-dark-secondary rounded-lg border border-dark-border sticky top-24"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Technologies Used
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Tech Details */}
              {project.technologiesDetail && (
                <div className="space-y-4">
                  {Object.entries(project.technologiesDetail).map(([tech, desc]) => (
                    <div key={tech}>
                      <h4 className="text-white font-semibold mb-1">{tech}</h4>
                      <p className="text-light-secondary text-sm">{desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Future Improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-dark-secondary rounded-lg border border-dark-border"
              >
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  Future Improvements
                </h3>
                <ul className="space-y-2">
                  {project.futureImprovements.map((improvement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2 text-light-secondary text-sm"
                    >
                      <span className="text-accent-blue">→</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Navigation to Next/Previous Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-center pt-12 border-t border-dark-border"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center space-x-2 text-light-secondary hover:text-accent-blue transition-colors duration-300"
            >
              <FaArrowLeft />
              <div>
                <p className="text-sm">Previous Project</p>
                <p className="text-white font-semibold">{prevProject.title}</p>
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center space-x-2 text-light-secondary hover:text-accent-blue transition-colors duration-300 text-right"
            >
              <div>
                <p className="text-sm">Next Project</p>
                <p className="text-white font-semibold">{nextProject.title}</p>
              </div>
              <FaArrowRight />
            </Link>
          ) : (
            <div></div>
          )}
        </motion.div>

        {/* Related Projects */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.relatedProjects.map((relatedId) => {
                const relatedProject = projects.find(p => p.id === relatedId);
                if (!relatedProject) return null;

                return (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.slug}`}
                    className="block p-6 bg-dark-secondary rounded-lg border border-dark-border hover:border-accent-blue transition-all duration-300"
                  >
                    <h3 className="text-xl font-heading font-semibold text-white mb-2">
                      {relatedProject.title}
                    </h3>
                    <p className="text-light-secondary text-sm mb-4 line-clamp-2">
                      {relatedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-dark-bg text-light-secondary text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatedBackground>
    </>
  );
};

export default ProjectDetailPage;
