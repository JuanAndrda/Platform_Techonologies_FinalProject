import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';
import Timeline from './Timeline';
import Stats from './Stats';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-dark-bg">
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-heading font-bold text-white">
              Hello! I'm Juan
            </h3>

            <p className="text-light-secondary text-lg leading-relaxed">
              I'm a 2nd year Information Technology student at West Visayas State University
              in Iloilo City. Originally from Leon, Iloilo, Philippines, I have a passion
              for turning ideas into reality through code.
            </p>

            <p className="text-light-secondary text-lg leading-relaxed">
              My programming journey started with C++ in my first year, then evolved to Java
              where I developed a strong foundation in Object-Oriented Programming and Data
              Structures. I've built multiple banking system projects that demonstrate my
              understanding of complex software architecture and problem-solving skills.
            </p>

            <p className="text-light-secondary text-lg leading-relaxed">
              Before college, I specialized in Computer studies at STVEP during junior high,
              then pursued STEM at Iloilo National High School. This solid technical foundation
              has helped me excel in IT. Currently, I'm expanding into modern web development
              with React, Tailwind CSS, and full-stack technologies.
            </p>

            <div className="flex items-center space-x-2 text-accent-blue">
              <FaMapMarkerAlt />
              <span className="text-light-secondary">Leon, Iloilo, Philippines</span>
            </div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/profile-about.jpg"
                  alt="Juan Miguel Rashley Andrada"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent-blue rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-purple-600 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <Stats />

        {/* Timeline Section */}
        <Timeline />
      </div>
    </section>
  );
};

export default About;
