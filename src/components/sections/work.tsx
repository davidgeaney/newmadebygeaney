'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CaseStudy {
  id: string;
  year: string;
  company: string;
  title: string;
  description: string;
  role: string;
  contributions: string[];
  timeline: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'dropbox-emoji',
    year: '2024',
    company: 'Dropbox',
    title: 'Emoji Reactions',
    description: 'Joined the Mobile Preview Team as a Product Design Intern, where I helped with emoji reaction integration on the mobile commenting experience.\n\nI successfully launched new emoji reaction features for mobile comments for 700,000 weekly active users across iOS and Android.',
    role: 'Product Design Intern',
    contributions: [
      'UX/UI Design',
      'User Interviews',
      'Prototyping',
      'Interaction Design',
      'Competitive Analysis',
      'Stakeholder Alignment',
      'Engineer Collaboration'
    ],
    timeline: '7 Weeks',
    image: '/images/projects/spotify-discovery.jpg'
  },
  {
    id: 'spotify-discovery',
    year: '2023',
    company: 'Spotify',
    title: 'Music Discovery',
    description: 'Worked on enhancing the music discovery experience for users by introducing a new algorithmic playlist feature.\n\nThe project resulted in a 22% increase in user engagement with recommended content and a 15% boost in playlist saves.',
    role: 'UX Designer',
    image: '/images/projects/spotify-discovery.jpg',
    contributions: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'A/B Testing',
      'Data Analysis',
      'User Flows',
      'UI Design'
    ],
    timeline: '12 Weeks'
  },
  {
    id: 'airbnb-experiences',
    year: '2023',
    company: 'Airbnb',
    title: 'Local Experiences',
    description: 'Redesigned the local experiences booking flow to increase conversions and improve user satisfaction.\n\nThe new design led to a 30% increase in bookings and received positive feedback for its intuitive interface and streamlined process.',
    role: 'Product Designer',
    image: '/images/projects/airbnb-experiences.jpg',
    contributions: [
      'User Journey Mapping',
      'Interface Design',
      'Usability Testing',
      'Interaction Design',
      'Design System Updates',
      'Cross-functional Collaboration',
      'Performance Metrics Analysis'
    ],
    timeline: '10 Weeks'
  },
  {
    id: 'netflix-mobile',
    year: '2022',
    company: 'Netflix',
    title: 'Mobile App Redesign',
    description: 'Led the redesign of the Netflix mobile app to improve content discoverability and user retention.\n\nThe redesign resulted in a 25% increase in daily active users and a 40% improvement in content discovery metrics.',
    role: 'Senior Product Designer',
    image: '/images/projects/netflix-mobile.jpg',
    contributions: [
      'Design Strategy',
      'User Research',
      'High-fidelity Prototypes',
      'Design System Development',
      'User Testing',
      'Stakeholder Presentations',
      'Engineering Handoff'
    ],
    timeline: '16 Weeks'
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
    <div className="border-b border-gray-200 pb-2">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-2 text-left text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        {title}
        <span className="ml-2 w-4 h-4 flex items-center justify-center">
          {isOpen ? (
            <span className="text-lg leading-none">−</span>
          ) : (
            <span className="text-lg leading-none">+</span>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const WorkSection = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="pt-6 pl-6">
      <div className="w-full border-t border-gray-200 my-12"></div>
      <div className="max-w-7xl">
        
        <div className="space-y-24">
          {caseStudies.map((caseStudy) => (
            <article key={caseStudy.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-4">
                <div className="mb-24">
                  <div className="text-sm text-gray-500">
                    {caseStudy.year}
                  </div>
                  <h3 className="text-4xl font-medium">{caseStudy.title}</h3>
                </div>
                
                <div className="text-sm text-gray-700 space-y-4">
                  {caseStudy.description.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Collapsible Sections */}
                <div className="space-y-1 mt-8">
                  <CollapsibleSection 
                    title="Role"
                    isOpen={openSection === `role-${caseStudy.id}`}
                    onClick={() => toggleSection(`role-${caseStudy.id}`)}
                  >
                    <p>{caseStudy.role}</p>
                  </CollapsibleSection>
                  
                  <CollapsibleSection 
                    title="Contributions"
                    isOpen={openSection === `contributions-${caseStudy.id}`}
                    onClick={() => toggleSection(`contributions-${caseStudy.id}`)}
                  >
                    <ul className="list-disc pl-5 space-y-1">
                      {caseStudy.contributions.map((contribution, index) => (
                        <li key={index}>{contribution}</li>
                      ))}
                    </ul>
                  </CollapsibleSection>
                  
                  <CollapsibleSection 
                    title="Timeline"
                    isOpen={openSection === `timeline-${caseStudy.id}`}
                    onClick={() => toggleSection(`timeline-${caseStudy.id}`)}
                  >
                    <p>{caseStudy.timeline}</p>
                  </CollapsibleSection>
                </div>
              </div>
              
              {/* Right Column - Image */}
              <div className="lg:col-span-8 -mr-12">
                <div className="relative w-[120%] h-[80vh] max-h-[800px] bg-gray-100 overflow-visible">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;