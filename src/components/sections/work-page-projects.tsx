'use client';

import { useState } from 'react';
import Link from 'next/link';
import VideoPlayer from '@/components/ui/VideoPlayer';

interface CaseStudy {
  id: string;
  year: string;
  company: string;
  isVideo?: boolean;
  title: string;
  description: string;
  role: string;
  contributions: string[];
  timeline: string;
  image: string;
  website: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'classcover',
    year: '2024',
    company: 'ClassCover',
    isVideo: true,
    title: 'ClassCover Ireland',
    description: 'Seamless substitute teacher management platform connecting schools with qualified substitute teachers instantly.\n\nThe platform streamlines the process of finding and booking substitute teachers, reducing administrative overhead and ensuring classroom continuity.',
    role: 'Lead Developer',
    contributions: [
      'Full-stack Development',
      'User Experience Design',
      'API Integration',
      'Database Design',
      'Performance Optimization',
      'Mobile Responsiveness',
      'User Authentication'
    ],
    timeline: '6 Months',
    image: '/classcover-showcase.mp4',
    website: 'https://classcover.com.au/'
  },
  {
    id: 'creacy-photography',
    year: '2023',
    company: 'Creacy Photography',
    title: 'Creacy Photography',
    description: 'Modern photography studio showcasing stunning visual work and client galleries.\n\nThe website features a clean, image-focused design that highlights the photographer\'s portfolio while providing an easy way for potential clients to view work and get in touch.',
    role: 'Web Developer',
    image: '/images/projects/creacyphotography.webp',
    contributions: [
      'Responsive Design',
      'Image Optimization',
      'Gallery Implementation',
      'Contact Form Integration',
      'SEO Optimization',
      'Performance Tuning',
      'Content Management'
    ],
    timeline: '4 Weeks',
    website: 'https://creacyphotography.com/'
  },
  {
    id: 'cqs',
    year: '2023',
    company: 'CQS',
    title: 'CQS',
    description: 'Professional quantity surveying firm providing comprehensive cost management services.\n\nThe website was designed to establish trust and professionalism while clearly communicating the firm\'s services and expertise in the construction industry.',
    role: 'Frontend Developer',
    image: '/images/projects/cqs.webp',
    contributions: [
      'UI/UX Design',
      'Frontend Development',
      'Service Showcase',
      'Contact System',
      'Cross-browser Compatibility',
      'Accessibility Compliance',
      'Performance Optimization'
    ],
    timeline: '6 Weeks',
    website: 'https://cqssurveyors.com/'
  },
  {
    id: 'beltany-build',
    year: '2022',
    company: 'Beltany Build',
    title: 'Beltany Build',
    description: 'A construction company specializing in high-quality residential and commercial projects.\n\nThe website showcases their portfolio, services, and company values while providing an easy way for potential clients to request quotes and view past work.',
    role: 'Full Stack Developer',
    image: '/images/projects/beltanybuild.webp',
    contributions: [
      'Custom Theme Development',
      'Project Gallery',
      'Quote Request System',
      'Mobile Optimization',
      'Content Strategy',
      'Performance Optimization',
      'Security Implementation'
    ],
    timeline: '8 Weeks',
    website: 'https://beltanybuild.com/'
  }
];

const CollapsibleSection = ({ 
  title, 
  children,
  isOpen,
  onClick 
}: { 
  title: string; 
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-t border-gray-100">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-3 text-left text-sm text-gray-700 hover:text-black transition-colors"
      >
        <span>{title}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const WorkPageProjects = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-4 max-w-[280px] pt-12">
                <div className="mb-8 mt-2 pb-6">
                  <div className="text-[14px] text-[#7A7A7A] font-book mb-2">
                    {caseStudy.year}
                  </div>
                  <h3 className="text-[20px] text-[#252525] font-normal leading-tight">{caseStudy.title}</h3>
                </div>
                
                <div className="text-[14px] text-[#252525] font-book space-y-3 leading-relaxed">
                  {caseStudy.description.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                {/* Collapsible Sections */}
                <div className="space-y-0.5 mt-8">
                  <CollapsibleSection 
                    title="Role"
                    isOpen={openSection === `role-${caseStudy.id}`}
                    onClick={() => toggleSection(`role-${caseStudy.id}`)}
                  >
                    <p>{caseStudy.role}</p>
                  </CollapsibleSection>
                  
                  <CollapsibleSection 
                    title="Contributions" 
                    isOpen={openSection === `${caseStudy.id}-contributions`}
                    onClick={() => toggleSection(`${caseStudy.id}-contributions`)}
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {caseStudy.contributions.map((contribution, idx) => (
                        <li key={idx}>{contribution}</li>
                      ))}
                    </ul>
                  </CollapsibleSection>
                  
                  <CollapsibleSection 
                    title="Timeline" 
                    isOpen={openSection === `${caseStudy.id}-timeline`}
                    onClick={() => toggleSection(`${caseStudy.id}-timeline`)}
                  >
                    {caseStudy.timeline}
                  </CollapsibleSection>
                  
                  {caseStudy.website && (
                    <div className="pt-4">
                      <a 
                        href={caseStudy.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Visit Project</span>
                        <svg 
                          className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column - Media */}
              <div className="lg:col-span-8 xl:col-span-8">
                <div className="relative w-full rounded-xl overflow-hidden">
                  {caseStudy.isVideo ? (
                    <div className="w-full">
                      <VideoPlayer 
                        src={caseStudy.image}
                        className="w-full h-auto"
                        autoPlay
                        loop
                        muted
                        controls
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-0 pb-[56.25%] bg-gray-50">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={caseStudy.id === 'classcover' ? 'eager' : 'lazy'}
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPageProjects;
