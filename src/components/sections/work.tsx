'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const WorkSection = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const projects = [
    {
      id: 'creacy-photography',
      title: 'Creacy Photography',
      description: '→ Custom portfolio with smooth animations and responsive design',
      category: 'Photography',
      outerImage: '/images/projects/creacyphotographyouterimg.jpg',
      innerImage: '/images/projects/creacyphotographyimg.jpg',
      website: 'https://creacyphotography.vercel.app/'
    },
    {
      id: 'classcover',
      title: 'Classcover',
      description: '→ Full-stack platform with booking system and admin dashboard',
      category: 'Education',
      outerImage: '/images/projects/classcoverouterimg.jpg',
      innerImage: '/images/projects/classcoverinnerimg.jpg',
      website: 'https://www.classcover.ie/'
    },
    {
      id: 'barr-build',
      title: 'Barr Build',
      description: '→ Responsive construction site with project showcase and contact forms',
      category: 'Construction',
      outerImage: '/images/projects/barrbuildouterimg.jpg',
      innerImage: '/images/projects/barrbuildinnerimg.jpg',
      website: 'https://barr-build-h2ba.vercel.app/'
    },
    {
      id: 'smile-dublin',
      title: 'Smile Dublin',
      description: '→ Modern dental practice website with appointment booking system',
      category: 'Healthcare',
      outerImage: '/images/projects/smiledublinouterimg.jpg',
      innerImage: '/images/projects/smiledublininnerimg.jpg',
      website: 'https://dentist-hazel-one.vercel.app/'
    }
  ];

  return (
    <section className="py-10">
      <div className="w-full">

        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* Section Header - Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 p-2 md:p-4 gap-4">
          <p className="text-xl text-black max-w-lg">
            <span className="text-xl text-gray-600 mr-2">Work</span> We help our clients make an impact through informed, authentic digital identities and innovative user experiences.
          </p>
          
          <a 
            href="mailto:hello@newterritory.studio"
            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-4 rounded-lg hover:pr-10 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden"
          >
            <span>View all projects</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300" />
          </a>
        </div>

        {/* Projects Grid - Colossal images with minimal spacing */}
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-2 max-w-full">
            {projects.map((project) => (
              <div key={project.id} className="group cursor-pointer relative">
                {/* Outer Image - Background */}
                <div className="relative overflow-hidden aspect-[4/3] h-[400px] md:h-[500px] lg:h-[600px] rounded-xl w-full max-w-full">
                {!imageErrors[`${project.id}-outer`] && (
                  <Image
                    src={project.outerImage}
                    alt={`${project.title} background`}
                    fill
                    className="object-cover"
                    onError={() => {
                      console.error(`Failed to load image: ${project.outerImage}`);
                      setImageErrors(prev => ({ ...prev, [`${project.id}-outer`]: true }));
                    }}
                  />
                )}
                
                {/* Inner Image - Website screenshot (16:9) centered */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 lg:p-16">
                  <div className="relative w-full max-w-md aspect-video bg-white rounded-md shadow-md overflow-hidden">
                    {!imageErrors[`${project.id}-inner`] && (
                      <Image
                        src={project.innerImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        onError={() => {
                          console.error(`Failed to load inner image: ${project.innerImage}`);
                          setImageErrors(prev => ({ ...prev, [`${project.id}-inner`]: true }));
                        }}
                      />
                    )}
                  </div>
                </div>
                
                {/* Bottom text overlay - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 overflow-hidden">
                  <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pt-8 -mt-8">
                    <p className="text-white text-sm font-medium">
                      {project.title} <span className="text-white/70 font-normal">{project.description}</span>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;