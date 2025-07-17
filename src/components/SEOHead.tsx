import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Debabrath - Machine Learning & Data Science Specialist",
  description = "Passionate ML Engineer and Data Science Specialist with expertise in Python, Machine Learning, Deep Learning, and AI. Experienced in building end-to-end ML pipelines and data-driven solutions.",
  keywords = "Machine Learning, Data Science, Python, AI, Deep Learning, NLP, Data Analysis, Software Engineer, Debabrath",
  image = "/your-photo.jpg",
  url = "https://debabrath-portfolio.netlify.app"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Debabrath",
    "jobTitle": "Machine Learning Engineer & Data Science Specialist",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/debabrath-2174a9252",
      "https://github.com/Debabrath7"
    ],
    "knowsAbout": [
      "Machine Learning",
      "Data Science",
      "Python Programming",
      "Deep Learning",
      "Natural Language Processing",
      "Data Analysis"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Lovely Professional University"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Debabrath" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Debabrath Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#7c3aed" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;