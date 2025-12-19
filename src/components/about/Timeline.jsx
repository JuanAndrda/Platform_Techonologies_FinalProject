import { motion } from 'framer-motion';
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import { timeline } from '../../data/timeline';
import { fadeInUp, slideInLeft } from '../../utils/animations';

const Timeline = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-20"
    >
      <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
        My Journey
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-border" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="relative mb-12 md:mb-16"
          >
            <div className={`flex flex-col md:flex-row items-start md:items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent-blue rounded-full border-4 border-dark-bg z-10" />

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(74, 158, 255, 0.2)"
                  }}
                  className="bg-dark-secondary p-6 rounded-lg border border-dark-border hover:border-accent-blue transition-all duration-300"
                >
                  {/* Year Badge */}
                  <div className="inline-block bg-accent-blue px-4 py-1 rounded-full text-white text-sm font-semibold mb-3">
                    {item.year}
                  </div>

                  {/* Title */}
                  <div className="flex items-start space-x-3 mb-3">
                    <FaGraduationCap className="text-accent-blue text-2xl flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="text-light-secondary text-sm">
                        {item.institution}
                      </p>
                      <p className="text-light-secondary text-xs italic">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-light-secondary text-sm mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 text-light-secondary text-sm"
                        >
                          <FaCheckCircle className="text-accent-blue flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Timeline;
