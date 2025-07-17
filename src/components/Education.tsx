import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  isPresent?: boolean;
  logo: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  location, 
  period,
  isPresent = false,
  logo
}) => {
  return (
    <motion.div 
      className="mb-12 relative pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 bg-purple-600 rounded-full z-10"></div>
      
      {/* Timeline line */}
      <div className="absolute left-3 top-6 w-0.5 h-full bg-purple-200 dark:bg-purple-800 -z-10"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ml-6 transform transition-all duration-300 hover:shadow-lg hover:translate-x-1">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={institution} className="w-12 h-12 object-contain rounded-lg" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{degree}</h3>
            <h4 className="text-lg text-purple-600 dark:text-purple-400">{institution}</h4>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-3">{location}</p>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <Calendar size={16} className="mr-2" />
          <span>{period} {isPresent && <span className="ml-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs px-2 py-1 rounded-full">Present</span>}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Education</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen size={28} className="text-purple-600 dark:text-purple-400 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">My Academic Journey</h3>
          </div>
          
          <EducationItem
            degree="Bachelor In Computer Science & Engineering (Specialization in Data Science)"
            institution="Lovely Professional University"
            location="Phagwara, Punjab"
            period="Aug 2022 - Present"
            isPresent={true}
            logo="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
          />
          
          <EducationItem
            degree="Senior Secondary"
            institution="Kendriya Vidyalaya"
            location="Hyderabad, Telangana"
            period="April 2020 - May 2022"
            logo="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg"
          />
          
          <EducationItem
            degree="Secondary"
            institution="Kendriya Vidyalaya"
            location="Hyderabad, Telangana"
            period="Mar 2012 - June 2020"
            logo="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;