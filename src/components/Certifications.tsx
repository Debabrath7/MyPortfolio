import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Eye } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  certificateUrl?: string;
}

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleViewCertificate = () => {
    if (certification.certificateUrl) {
      window.open(certification.certificateUrl, '_blank');
    } else {
      setShowPreview(true);
      // Simulate certificate viewing - you can replace this with actual certificate URLs
      setTimeout(() => setShowPreview(false), 2000);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      <div className="flex items-center mb-4">
        <img src={certification.logo} alt={certification.issuer} className="w-12 h-12 object-contain mr-3 rounded-lg" />
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
        
        <button
          onClick={handleViewCertificate}
          className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors flex items-center"
        >
          <Eye size={12} className="mr-1" />
          View
        </button>
      </div>
      
      {showPreview && (
        <div className="absolute inset-0 bg-purple-600 bg-opacity-90 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <Award size={32} className="mx-auto mb-2" />
            <p className="text-sm">Certificate Preview</p>
            <p className="text-xs opacity-75">Upload your certificate to view</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      date: "Recent",
      logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    },
    {
      title: "Machine Learning with Python",
      issuer: "Foxmula",
      date: "Aug 2023",
      logo: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "June 2023",
      logo: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg"
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "July 2023",
      logo: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "June 2023",
      logo: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Click "View" to see certificate details. Upload your certificates to enable full preview.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;