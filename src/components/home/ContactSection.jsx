import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { fadeInUp } from '../../utils/animations';

const ContactSection = () => {
  const quickLinks = [
    { icon: FaEnvelope, label: "Email", value: "juanandrada@email.com", link: "mailto:juanandrada@email.com" },
    { icon: FaGithub, label: "GitHub", value: "@JuanAndrda", link: "https://github.com/JuanAndrda" },
    { icon: FaLinkedin, label: "LinkedIn", value: "Connect", link: "#" }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 bg-dark-secondary overflow-hidden">
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-secondary to-dark-bg opacity-80" aria-hidden="true" />

      {/* Decorative Orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full filter blur-3xl" aria-hidden="true" />

      <div className="section-container relative z-10">
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
            Have a question or want to work together? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Quick Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {quickLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative block p-6 bg-gradient-to-br from-dark-bg to-dark-secondary rounded-lg border border-dark-border hover:border-transparent transition-all duration-300 text-center overflow-hidden hover:shadow-[0_0_30px_rgba(74,158,255,0.3)]"
            >
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent-blue via-purple-600 to-accent-blue p-[1px] pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-dark-bg to-dark-secondary rounded-lg" />
              </div>

              {/* Icon with Circular Background */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-blue/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <link.icon className="text-3xl text-accent-blue" />
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-heading font-bold text-white mb-1">{link.label}</h3>
                <p className="text-light-secondary text-sm">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center p-8 rounded-xl border border-accent-blue/30 max-w-3xl mx-auto overflow-hidden bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg"
        >
          {/* Glow Effect Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-purple-600/10 to-accent-blue/10 opacity-50 blur-xl" aria-hidden="true" />

          <div className="relative z-10">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Let's Start a Conversation
            </h3>
            <p className="text-light-secondary text-lg mb-6">
              Whether you have a project idea, a question, or just want to connect,
              I'm always open to new opportunities and conversations.
            </p>

            {/* Enhanced Button with Pulse Animation */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(74,158,255,0.3)",
                    "0 0 30px rgba(74,158,255,0.5)",
                    "0 0 20px rgba(74,158,255,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-10 py-4 bg-gradient-to-r from-accent-blue to-purple-600 text-white font-heading font-semibold uppercase tracking-wider rounded-md transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg"
              >
                <span>Send Me a Message</span>
                <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
