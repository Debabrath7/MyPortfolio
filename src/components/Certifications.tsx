import React, { useState } from 'react';
import { Award, Calendar, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  certificateUrl: string;
}

const CertificationCard: React.FC<{ certification: Certification; index: number }> = ({ certification, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewCertificate = () => {
    if (certification.certificateUrl) {
      window.open(certification.certificateUrl, '_blank');
    }
  };

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        <motion.img 
          src={certification.logo} 
          alt={certification.issuer} 
          className="w-12 h-12 object-contain mr-3 rounded-lg" 
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{certification.title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{certification.issuer}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Calendar size={14} className="mr-2" />
          <span className="text-sm">{certification.date}</span>
        </div>
        
        <motion.button
          onClick={handleViewCertificate}
          className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={12} className="mr-1" />
          View Certificate
        </motion.button>
      </div>
      
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-purple-600 bg-opacity-10 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Recent",
      logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      certificateUrl: "/Deep Learning.pdf",
    },
    {
      title: "Machine Learning with Python",
      issuer: "Foxmula",
      date: "Aug 2023",
      logo: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      certificateUrl: "/New CV.pdf",
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "June 2023",
      logo: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
      certificateUrl: "/Exploratory Data Analysis For Machine Learning (IBM).pdf",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "July 2023",
      logo: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
      certificateUrl: "/New CV copy.pdf",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "June 2023",
      logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      certificateUrl: "/Gen AI.pdf",
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Click "View Certificate" to download and view the actual certificate files.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;