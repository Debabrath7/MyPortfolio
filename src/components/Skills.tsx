import React from 'react';
import { Code, Database, Wrench, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  logo: string;
  percentage: number;
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: SkillItemProps[];
}

const SkillItem: React.FC<SkillItemProps> = ({ name, logo, percentage }) => {
  return (
    <motion.div 
      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <img src={logo} alt={name} className="w-8 h-8 object-contain" loading="lazy" />
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
          <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <motion.div 
            className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-xl text-purple-600 dark:text-purple-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", logo: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", percentage: 90 },
        { name: "Java", logo: "https://images.pexels.com/photos/160107/coffee-cup-and-saucer-black-coffee-160107.jpeg", percentage: 75 },
        { name: "SQL", logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg", percentage: 85 }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", logo: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg", percentage: 80 },
        { name: "MongoDB", logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", percentage: 70 },
        { name: "PostgreSQL", logo: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg", percentage: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Power BI", logo: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg", percentage: 85 },
        { name: "Tableau", logo: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg", percentage: 80 },
        { name: "Git", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg", percentage: 90 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit size={24} />,
      skills: [
        { name: "TensorFlow", logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", percentage: 85 },
        { name: "PyTorch", logo: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg", percentage: 80 },
        { name: "Scikit-learn", logo: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg", percentage: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;