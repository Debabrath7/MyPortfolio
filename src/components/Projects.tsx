import React, { useState } from 'react';
import { Calendar, ChevronRight, Code, ExternalLink, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  date: string;
  description: string;
  skills: string[];
  points: string[];
  demoLink?: string;
  image?: string;
  category: string;
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  
  const projects: Project[] = [
    {
      title: "Big Mart Sales Price Optimization",
      date: "June 2025",
      description: "End-to-end machine learning pipeline to predict product prices for retail stores using comprehensive data analysis",
      skills: ["Python", "Machine Learning", "XGBoost", "Data Analysis"],
      points: [
        "Developed an end-to-end machine learning pipeline to predict product prices for a retail store using the Big Mart dataset",
        "Performed comprehensive data cleaning, EDA, and feature engineering to handle missing values, encode categorical variables, and engineer new features",
        "Evaluated multiple models (Linear Regression, Random Forest, XGBoost); selected XGBoost Regressor with RMSE ~1065 as the final model",
        "Implemented robust data preprocessing pipeline ensuring model reliability and accuracy"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      category: "Machine Learning"
    },
    {
      title: "Prompt Engineering for LLM-based Chatbot – Orb IQ",
      date: "Feb 2025",
      description: "Advanced prompt engineering framework for optimizing Large Language Model responses in chatbot applications",
      skills: ["LLM", "Prompt Engineering", "Natural Language Processing", "Python"],
      points: [
        "Designed and tested prompt templates using real-world QA examples from the Natural Questions dataset to improve LLM response quality",
        "Evaluated outputs manually and via semantic similarity metrics to iterate on prompt phrasing and context formatting",
        "Currently building a prompt testing framework to support systematic benchmarking across multiple LLMs",
        "Implemented automated evaluation metrics for consistent performance measurement across different prompt variations"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      category: "AI/NLP"
    },
    {
      title: "Tata Motors Stock Price Forecast",
      date: "Aug 2023",
      description: "Machine learning-based stock price forecasting model using predictive analysis techniques",
      skills: ["Python", "ML", "Predictive Analysis"],
      points: [
        "Developed a machine learning-based stock price forecasting model using Linear Regression, ARIMA, and SARIMA, improving predictive accuracy for informed investment decisions.",
        "Engineered and optimized features to capture key market trends, enhancing model performance and reducing forecasting error.",
        "Conducted comparative analysis of different models, selecting the best-performing approach for reliable stock price predictions."
      ],
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg",
      category: "Finance"
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Filter size={20} className="text-purple-600 dark:text-purple-400 mt-2 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleProject(index)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.date}</span>
                      <span className="ml-4 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full text-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedProject === index ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight size={24} className="text-purple-600 dark:text-purple-400" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        {project.image && (
                          <motion.img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                            loading="lazy"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill, skillIndex) => (
                            <motion.span 
                              key={skillIndex} 
                              className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2, delay: skillIndex * 0.1 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                        
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                        
                        <ul className="space-y-3">
                          {project.points.map((point, pointIndex) => (
                            <motion.li 
                              key={pointIndex} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: pointIndex * 0.1 }}
                            >
                              <Code size={18} className="text-purple-600 dark:text-purple-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;