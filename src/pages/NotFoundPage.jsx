import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Juan Miguel Rashley Andrada"
        description="The page you're looking for doesn't exist. Navigate back to the homepage or explore my portfolio."
        canonical="/404"
      />
      <div className="min-h-screen flex items-center justify-center bg-dark-bg">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <h1 className="text-9xl font-heading font-bold text-accent-blue mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-light-secondary text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center space-x-2"
              >
                <FaHome />
                <span>Go Home</span>
              </motion.button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 border-2 border-accent-blue text-accent-blue font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-accent-blue hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <FaArrowLeft />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default NotFoundPage;
