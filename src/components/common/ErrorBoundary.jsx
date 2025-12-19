import { Component } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-block p-6 bg-red-500/10 rounded-full mb-6"
            >
              <FaExclamationTriangle className="text-6xl text-red-500" />
            </motion.div>

            <h1 className="text-4xl font-heading font-bold text-white mb-4">
              Oops! Something went wrong
            </h1>

            <p className="text-light-secondary mb-8">
              We encountered an unexpected error. Don't worry, it's not your fault!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-accent-blue text-white font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FaHome />
                <span>Go Home</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-6 py-3 border-2 border-accent-blue text-accent-blue font-heading font-semibold uppercase tracking-wider rounded-md hover:bg-accent-blue hover:text-white transition-all duration-300"
              >
                Reload Page
              </motion.button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 p-4 bg-dark-secondary rounded-md text-left"
              >
                <p className="text-xs text-light-secondary font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
