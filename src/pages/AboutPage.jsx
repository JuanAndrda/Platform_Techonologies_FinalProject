import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import { fadeInUp } from '../utils/animations';
import Timeline from '../components/about/Timeline';
import Stats from '../components/about/Stats';
import { FaDownload, FaArrowRight, FaCode } from 'react-icons/fa';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Me | Juan Miguel Rashley Andrada"
        description="Learn about my journey as an Information Technology student at West Visayas State University, my skills, background, and what drives me as a developer in Leon, Iloilo, Philippines."
        canonical="/about"
      />
      <AnimatedBackground variant="about" className="min-h-screen py-20">
      <div className="section-container">
        {/* Page Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 pt-10"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-4">
            About Me
          </h1>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-xl max-w-3xl mx-auto">
            Learn more about my journey, background, and what drives me as a developer
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-heading font-bold text-white mb-6">
              Hello! I'm Juan Miguel Rashley Andrada
            </h2>

            <div className="space-y-4 text-light-secondary text-lg leading-relaxed">
              <p>
                I'm a 2nd year Information Technology student at West Visayas State University,
                based in Leon, Iloilo, Philippines, with a passion for turning ideas into reality
                through code. My journey in programming began with a curiosity about how things
                work behind the scenes, and it has evolved into a deep commitment to crafting
                elegant solutions to complex problems.
              </p>

              <p>
                My foundation in Information Technology started with Java, where I developed a
                strong understanding of Object-Oriented Programming principles and Data
                Structures. Through building multiple banking system projects, I learned the
                importance of writing clean, maintainable, and scalable code.
              </p>

              <p>
                Currently, I'm expanding my skillset into modern web development,
                mastering technologies like React, Tailwind CSS, and exploring the exciting
                ecosystem of full-stack development. I believe in continuous learning and
                staying updated with the latest industry trends and best practices.
              </p>

              <p>
                Beyond coding, I'm passionate about problem-solving, collaborative
                development, and creating user-centric applications that make a real
                impact. I'm always eager to take on challenging projects that push my
                boundaries and help me grow as a developer.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2">
                <FaDownload />
                <span>Download Resume</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile Photo Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-2xl bg-gradient-to-br from-accent-blue to-purple-600 flex items-center justify-center overflow-hidden"
              >
                <div className="text-center p-8">
                  <div className="text-9xl font-heading font-bold text-white opacity-50 mb-4">
                    JA
                  </div>
                  <p className="text-white text-xl font-heading">Profile Photo</p>
                  <p className="text-light-primary text-sm mt-2">Coming Soon</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent-blue rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-purple-600 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Education & Timeline */}
        <Timeline />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 p-12 bg-dark-secondary rounded-2xl border border-dark-border"
        >
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-light-secondary text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <FaArrowRight />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-accent-blue hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatedBackground>
    </>
  );
};

export default AboutPage;
