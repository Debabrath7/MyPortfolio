import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="md:w-1/3 flex-shrink-0">
            <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <div className="w-full h-80 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold">D</span>
                  </div>
                  <p className="text-lg font-semibold">Debabrath</p>
                  <p className="text-sm opacity-90">ML Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
              I am deeply passionate about Machine Learning, Artificial Intelligence, and Research & Development (R&D). 
              I thrive on uncovering insights that drive innovation. Currently, I am expanding my expertise in Deep Learning 
              and Natural Language Processing (NLP) to build intelligent systems that make data-driven decisions. 
              My goal is to contribute to projects in AI and data science, leveraging my analytical mindset to create 
              impactful solutions. I aspire to work with top global technology leaders.
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                <span>+91 9100254762</span>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                <a href="mailto:Debabrath07@gmail.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Debabrath07@gmail.com</a>
              </div>
              
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-600 dark:text-purple-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;