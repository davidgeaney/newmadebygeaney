import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ProcessSection() {
  const processSteps = [
    {
      number: '01',
      title: "Let's chat",
      description: 'We start with a conversation to understand your vision, goals, and requirements for the project.',
      bgColor: 'bg-gray-100'
    },
    {
      number: '02',
      title: 'Figure out the plan',
      description: 'We develop a detailed strategy and roadmap tailored to your specific needs and objectives.',
      bgColor: 'bg-[#E9EFF6]'
    },
    {
      number: '03',
      title: 'Design & Develop',
      description: 'Our team creates stunning designs and brings them to life with clean, efficient code.',
      bgColor: 'bg-[#F2EFF5]'
    },
    {
      number: '04',
      title: 'Launch & Grow',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
      bgColor: 'bg-[#EBF6F2]'
    }
  ]

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="px-4 md:px-6">
          {/* Section Header - Single Line Layout */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
            <p className="text-2xl text-black max-w-xl">
              <span className="text-2xl text-gray-600 mr-2">Process</span> Our proven approach to delivering exceptional results.
            </p>
            
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
                className={`${step.bgColor} rounded-lg p-6 h-0 min-h-[350px] pb-[100%] relative`}
              >
                <div className="flex flex-col h-full">
                  <span className="text-6xl font-regular text-[#BFC8C5] leading-none mb-4">
                    {step.number}
                  </span>
                  <div className="mt-auto pt-32">
                    <h3 className="text-lg font-normal text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-regular">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Centered CTA Button */}
          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
