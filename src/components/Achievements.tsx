import React from 'react';
import { Trophy, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <motion.div 
                  className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full text-purple-600 dark:text-purple-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Trophy size={40} />
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Research Paper Publication</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Published a Research Paper on <strong>"Stock Price Analysis Through Machine Learning Models"</strong> in The International 
                    Journal of Research and Analytical Reviews (IJRAR). This research explores the application of various machine learning 
                    algorithms for predicting stock market trends and price movements.
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      Oct 2023
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      Published
                    </span>
                    <motion.a 
                      href="https://drive.google.com/file/d/your-research-paper-id/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} className="mr-1" />
                      View Paper
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;