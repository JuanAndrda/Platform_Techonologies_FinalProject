import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', // 'success', 'error', or ''
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      setIsSubmitting(false);
      return;
    }

    // EmailJS Integration
    try {
      // Check if EmailJS credentials are configured
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Show message that contact is unavailable
        setStatus({
          type: 'error',
          message: 'Contact form is currently unavailable. Please email me directly at juanandrada@email.com'
        });
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_name: 'Juan Miguel Rashley Andrada',
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try emailing me directly at juanandrada@email.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-light-secondary text-sm font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-md text-white placeholder-light-secondary focus:outline-none focus:border-accent-blue transition-colors duration-300"
          placeholder="Juan Miguel Rashley Andrada"
          required
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-light-secondary text-sm font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-md text-white placeholder-light-secondary focus:outline-none focus:border-accent-blue transition-colors duration-300"
          placeholder="juanandrada@example.com"
          required
        />
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="phone" className="block text-light-secondary text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-md text-white placeholder-light-secondary focus:outline-none focus:border-accent-blue transition-colors duration-300"
          placeholder="09081719408"
          required
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-light-secondary text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 bg-dark-secondary border border-dark-border rounded-md text-white placeholder-light-secondary focus:outline-none focus:border-accent-blue transition-colors duration-300 resize-none"
          placeholder="Your message here..."
          required
        />
      </div>

      {/* Status Message */}
      {status.message && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-md ${
            status.type === 'success'
              ? 'bg-green-500 bg-opacity-10 text-green-400 border border-green-500'
              : 'bg-red-500 bg-opacity-10 text-red-400 border border-red-500'
          }`}
        >
          {status.message}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
        }`}
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        {!isSubmitting && <FaPaperPlane />}
      </motion.button>
    </form>
  );
};

export default ContactForm;
