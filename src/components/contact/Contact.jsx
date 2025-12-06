import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: 'Leon, Iloilo, Philippines'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+63 XXX XXX XXXX'
    },
    {
      icon: FaEnvelope,
      label: 'E-mail',
      value: 'juanandrada@email.com'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-dark-secondary">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
          <p className="text-light-secondary text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                CONTACT
              </h3>
              <p className="text-light-secondary text-lg leading-relaxed mb-8">
                Get in touch with me for collaborations, projects, or just to say hi!
                I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="p-3 bg-accent-blue rounded-lg flex-shrink-0">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-semibold mb-1">
                      {item.label}
                    </h4>
                    <p className="text-light-secondary">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-dark-border"
            >
              <p className="text-light-secondary text-sm italic">
                Available for freelance opportunities and collaborations
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-dark-bg p-8 rounded-lg border border-dark-border">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                CONTACT FORM
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
