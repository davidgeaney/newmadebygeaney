'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Design',
      description: 'We draw inspiration from proven designs and combine it with a collaborative, data-driven process to create work that is both engaging and authentic. Every layout, color, and interaction is intentional, built to serve a clear purpose. Not just visuals, but solutions built to perform and deliver results.'
    },
    {
      number: '02',
      title: 'Develop',
      description: 'By combining advanced frameworks with AI-assisted workflows, we craft websites that perform exceptionally and remain easy to manage. Keeping pace with modern tech means every build is faster, more efficient, and ready for whatever comes next.'
    },
    {
      number: '03',
      title: 'Scale',
      description: 'We continually refine and optimise websites using real user data, identifying friction points and conversion barriers. By monitoring performance, following best practices, and ensuring SEO-friendly implementations, we deliver improvements that enhance user experience, boost engagement, and grow your online presence.'
    }
  ];

  return (
    <section className="pt-4 pl-4">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="pr-2">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-xl text-black max-w-lg">
                <span className="text-gray-600 mr-2">Services</span> From design to code, we create websites that are built for your business, not for someone else’s template.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-16">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href="/about#process"
                className="group relative p-3 h-full block bg-[#F0F0F0] cursor-pointer rounded-lg overflow-hidden transition-colors duration-300 hover:bg-black"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-14">
                    <span className="text-sm text-black group-hover:text-white transition-colors duration-300 block">{service.number}</span>
                    <h3 className="text-xl text-black group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  </div>
                  <div className="mt-auto relative pr-6">
                    <p className="text-sm max-w-sm text-black group-hover:text-white transition-colors duration-300">{service.description}</p>
                    <ArrowRightIcon className="absolute bottom-0 right-0 w-4 h-4 text-black group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
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
