'use client';

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: "Discovery & Strategy",
      description: 'We start by understanding your business, goals, and target audience. Through in-depth discussions, we define project scope, objectives, and key performance indicators.',
      bgColor: 'bg-gray-100'
    },
    {
      number: '02',
      title: 'Design & Wireframing',
      description: 'Our designers create wireframes and mockups that align with your brand. We focus on user experience, ensuring intuitive navigation and engaging interfaces.',
      bgColor: 'bg-[#E9EFF6]'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Using the latest web technologies, we build responsive, fast-loading websites. We maintain clean code and follow best practices for optimal performance.',
      bgColor: 'bg-[#F2EFF5]'
    },
    {
      number: '04',
      title: 'Launch & Optimization',
      description: 'After thorough testing, we deploy your site and monitor performance. We provide ongoing support and optimization to ensure continued success.',
      bgColor: 'bg-[#EBF6F2]'
    }
  ]

  return (
    <section className="pt-4 pl-4">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="pr-2">
          {/* Section Header - Single Line Layout */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
            <h2 className="text-xl text-black max-w-2xl">
              <span className="text-gray-600 mr-2">Process</span> Our proven approach to delivering exceptional results through collaboration, strategy, and innovative problem-solving – from initial concept to successful launch.
            </h2>
            
            <Link 
              href="/process"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
            >
              <span>Learn more</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
          
          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`${step.bgColor} rounded-lg px-6 pt-6 pb-8 h-0 min-h-[280px] pb-[80%] sm:pb-[70%] md:pb-[90%] relative`}
              >
                <div className="flex flex-col h-full">
                  <span className="text-6xl font-regular text-[#BFC8C5] leading-none mb-6">
                    {step.number}
                  </span>
                  <div className="mt-auto pt-16 pb-6 sm:pt-20">
                    <h3 className="text-lg font-book text-black mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-regular leading-relaxed mb-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
