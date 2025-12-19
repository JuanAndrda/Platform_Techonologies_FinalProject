import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

const AboutSection = () => {
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

        {/* Compact Overview - Only 2-3 paragraphs */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Brief text */}
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
              in Iloilo City. From Leon, Iloilo, with a passion for turning ideas into reality through code.
            </p>

            <p className="text-light-secondary text-lg leading-relaxed">
              My programming journey started with C++ in first year, then evolved to Java where
              I built banking systems using OOP and Data Structures. With a Computer major background
              from STVEP and STEM from Iloilo National High School, I'm now expanding into modern
              web development with React and Tailwind CSS.
            </p>

            {/* CTA to detailed About page */}
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Learn More About Me</span>
                <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/profile-home.jpg"
                  alt="Juan Miguel Rashley Andrada"
                  className="w-full h-full object-cover"
                />
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
      </div>
    </section>
  );
};

export default AboutSection;
