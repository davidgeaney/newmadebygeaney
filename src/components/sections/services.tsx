'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'Following our iterative, data-driven and collaborative process we ensure that our designs are both engaging and authentic. The projects we produce are tools which often have an intended job and goal, because of this we implement performance optimised design philosophies based on behavioural engineering.'
    },
    {
      number: '02',
      title: 'Develop',
      description: 'Utilising the best of current web technologies, we deliver high performance projects of many scales. Built with leading and proven platforms with modern build methodologies we create impactful, engaging user-experiences whilst providing robust, adaptive, future-focused solutions.'
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Focused on continual website optimisation, rooted in real user data analysis and the identification of conversion barriers. While continuously monitoring performance, we align our strategies with industry best practices to offer data-driven solutions that span digital marketing, enhancements to the customer experience, and website optimisations.'
    }
  ];

  return (
    <section className="pt-4 pl-4">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="pr-2">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xl text-black max-w-lg">
                <span className="text-gray-600 mr-2">Services</span> We specialise in digital design, development and creative strategy; uncovering insights, design concepts & developing solutions – both large and small.
              </h2>
            </div>
            <Link 
              href="/services"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden shrink-0"
            >
              <span>See our services</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href="/about#process"
                className="group relative p-3 h-full block bg-[#F0F0F0] cursor-pointer rounded-lg overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <span className="text-sm text-black block">{service.number}</span>
                    <h3 className="text-xl text-black">{service.title}</h3>
                  </div>
                  <div className="mt-auto">
                    <p className="text-sm max-w-sm text-black">{service.description}</p>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
