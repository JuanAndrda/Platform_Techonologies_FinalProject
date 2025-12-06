import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animations';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/contact/ContactForm';
import { AnimatedBackground } from '../components/common/AnimatedBackground';

const ContactPage = () => {
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
    <>
      <SEO
        title="Contact Me | Juan Miguel Rashley Andrada"
        description="Get in touch with me for collaboration opportunities, questions, or project inquiries. Let's work together!"
        canonical="/contact"
      />
      <AnimatedBackground variant="contact" className="min-h-screen py-20">
        <div className="section-container">
          {/* Page Header - SINGLE TITLE */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16 pt-10"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white uppercase mb-4">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-accent-blue mx-auto mb-6" />
            <p className="text-light-secondary text-xl max-w-3xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Content - NO DUPLICATE TITLE */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
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
                    animate={{ opacity: 1, x: 0 }}
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
                animate={{ opacity: 1 }}
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
              animate="visible"
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
      </AnimatedBackground>
    </>
  );
};

export default ContactPage;
