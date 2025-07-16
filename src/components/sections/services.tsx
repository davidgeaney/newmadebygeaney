import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Strategy',
      description: 'Following our iterative, data-driven and collaborative process we ensure that our designs are both engaging and authentic. Our projects are tools which often have an intended job and goal, because of this we implement performance optimised design philosophies based on behavioural engineering.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Utilising the latest of web technology, we deliver high performance projects of many scales. Built with leading platforms and modern build methodologies we create impactful, engaging user-experiences whilst providing robust, adaptive, future-focused solutions.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'By analysing performance and aligning to industry best practices we will provide data-driven strategies across marketing, feature updates and customer experiences to ensure maximum growth potential and synergy on all platforms.'
    }
  ]

  return (
    <section className="py-10">
      
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Section Header - Single Line Layout */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 p-2 md:p-4">
          <div className="flex items-start mb-4 md:mb-0">
            <p className="text-2xl text-black max-w-lg">
              <span className="text-2xl text-gray-600 mr-2">Services</span> We offer a comprehensive range of creative services to help your brand stand out.
            </p>
          </div>
          
          <Link 
            href="/services"
            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-4 rounded-lg hover:pr-10 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
          >
            <span>View all services</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-3 max-w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-lg p-4 hover:bg-black transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="mb-8">
                <span className="text-sm text-gray-600 group-hover:text-white transition-colors block mb-1">
                  {service.number}
                </span>
                <h3 className="text-xl font-medium text-black group-hover:text-white transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="max-w-sm text-sm text-gray-600 group-hover:text-white transition-colors mb-2">
                {service.description}
              </p>
              <ArrowRightIcon className="w-3.5 h-3.5 text-white absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}