'use client';

import React from 'react';
import { motion } from 'framer-motion';

type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

export function ProcessSection() {
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'We draw inspiration from proven designs and combine it with a collaborative, data-driven process to create work that is both engaging and authentic. Every layout, color, and interaction is intentional, built to serve a clear purpose.'
    },
    {
      number: '02',
      title: 'Develop',
      description: 'By combining advanced frameworks with AI-assisted workflows, we craft websites that perform exceptionally and remain easy to manage. Keeping pace with modern tech means every build is faster and more efficient.'
    },
    {
      number: '03',
      title: 'Scale',
      description: 'We continually refine and optimise websites using real user data, identifying friction points and conversion barriers to enhance user experience, boost engagement, and grow your online presence.'
    }
  ];

  return (
    <div className="mt-24 px-4">
      {/* Full-width subtle divider line */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
        <div className="h-[0.5px] bg-gray-200"></div>
      </div>
      
      <div className="mb-12">
        <p className="text-3xl text-black font-light">
          <span className="text-3xl text-gray-600 font-light mr-2">Process</span> Our approach covers the full lifecycle of a website. From research and planning to design, build, and launch, we make sure each stage is handled with precision, purpose, and a focus on performance.
        </p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative group h-[260px] w-full"
            >
              <div className="w-full h-full bg-[#F0F0F0] text-black rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white flex flex-col">
                <div>
                  <span className="text-sm block">{service.number}</span>
                  <h3 className="text-xl">{service.title}</h3>
                </div>
                <p className="text-sm mt-auto max-w-xs">{service.description}</p>
                <div className="absolute bottom-2 right-2 w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity">
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
