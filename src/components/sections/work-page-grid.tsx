'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  outerImage: string;
  innerImage: string;
  website: string;
}

const projects: Project[] = [
  {
    id: 'creacy-photography',
    title: 'Creacy Photography',
    description: 'Custom portfolio with smooth animations and responsive design',
    category: 'Photography',
    outerImage: '/images/projects/creacyphotographyouterimg.jpg',
    innerImage: '/images/projects/creacyphotographyimg.jpg',
    website: 'https://creacyphotography.vercel.app/'
  },
  {
    id: 'classcover',
    title: 'Classcover',
    description: 'Full-stack platform with booking system and admin dashboard',
    category: 'Education',
    outerImage: '/images/projects/classcoverouterimg.jpg',
    innerImage: '/images/projects/classcoverinnerimg.jpg',
    website: 'https://www.classcover.ie/'
  },
  {
    id: 'barr-build',
    title: 'Barr Build',
    description: 'Responsive construction site with project showcase and contact forms',
    category: 'Construction',
    outerImage: '/images/projects/barrbuildouterimg.jpg',
    innerImage: '/images/projects/barrbuildinnerimg.jpg',
    website: 'https://barr-build-h2ba.vercel.app/'
  },
  {
    id: 'project-4',
    title: 'Project 4',
    description: 'Example project description',
    category: 'Web Design',
    outerImage: '/placeholder.jpg',
    innerImage: '/placeholder.jpg',
    website: '#'
  },
  {
    id: 'project-5',
    title: 'Project 5',
    description: 'Example project description',
    category: 'Branding',
    outerImage: '/placeholder.jpg',
    innerImage: '/placeholder.jpg',
    website: '#'
  },
  {
    id: 'project-6',
    title: 'Project 6',
    description: 'Example project description',
    category: 'Development',
    outerImage: '/placeholder.jpg',
    innerImage: '/placeholder.jpg',
    website: '#'
  }
];

const WorkPageGrid = () => {
  const [isGridView, setIsGridView] = useState(true); // true for 3x3, false for 2x2

  const toggleGridView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>

        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          {/* Section Header - Stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <p className="text-xl text-black max-w-lg">
              <span className="text-xl text-gray-600 mr-2">Work</span> We help our clients make an impact through informed, authentic digital identities and innovative user experiences.
            </p>

            <button
              onClick={toggleGridView}
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
              aria-label={isGridView ? 'Switch to 2x2 grid' : 'Switch to 3x3 grid'}
            >
              <span className="mr-2">
                {isGridView ? (
                  <Squares2X2Icon className="w-4 h-4" />
                ) : (
                  <Squares4X4Icon className="w-4 h-4" />
                )}
              </span>
              <span>{isGridView ? '2x2' : '3x3'}</span>
            </button>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-6 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {projects.slice(0, isGridView ? 9 : 4).map((project) => (
              <Link 
                href={project.website} 
                key={project.id} 
                className={`group cursor-pointer transition-all duration-300 ${isGridView ? 'h-80' : 'h-[28rem]'}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`relative w-full h-full bg-gray-100 rounded-lg overflow-hidden transition-all duration-300 ${isGridView ? 'h-3/4' : 'h-4/5'}`}>
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Image 
                      src={project.outerImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      fill
                      priority
                      sizes={isGridView ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
                    />
                  </div>
                  
                  {/* Project overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View All Projects Button - Only shown in 2x2 mode */}
          {!isGridView && (
            <div className="mt-12 text-center">
              <button 
                className="inline-flex items-center text-sm font-medium text-black hover:text-gray-700 transition-colors"
                onClick={() => setIsGridView(true)}
              >
                View all projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkPageGrid;
