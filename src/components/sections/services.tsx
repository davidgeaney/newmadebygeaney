'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ServicesSection() {
    const services = [
    {
      title: 'Custom Design',
      description: 'Tailored design solutions that perfectly match your brand identity and business goals.',
      image: '/images/services/customdesign.jpg'
    },
    {
      title: 'Mobile-First',
      description: 'Responsive designs that look and function beautifully on all devices, with a focus on mobile experience.',
      image: '/images/services/mobilefirst.png'
    },

    {
      title: 'Built For Speed',
      description: 'Optimized performance for quick load times and smooth user experience.',
      image: '/images/services/builtforspeed.png'
    },
    {
      title: 'SEO Friendly',
      description: 'Websites built with search engine optimization best practices to improve visibility and rankings.',
      image: '/images/services/seofriendly.png'
    },
    {
      title: 'Clear Messaging',
      description: 'Compelling content strategy that clearly communicates your value proposition to your audience.',
      image: '/images/services/clearmessaging.png'
    },
    {
      title: 'Booking & Forms',
      description: 'Seamless integration of booking systems and contact forms to capture leads and appointments.',
      image: '/images/services/bookingandforms.png'
    },
    {
      title: 'Ongoing Support',
      description: 'Dedicated support and maintenance to keep your website running smoothly.',
      image: '/images/services/ongoingsupport.png'
    },
    {
      title: 'Scalable Support',
      description: 'Flexible solutions that grow with your business needs and traffic demands.',
      image: '/images/services/scalablesupport.png'
    },
    {
      title: 'Hosting Included',
      description: 'Reliable, secure, and fast hosting with 99.9% uptime, automatic backups, and SSL certificates included.',
      image: '/images/services/hostingincluded.png'
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
              <span className="text-2xl text-gray-600 mr-2">Services</span> We offer a comprehensive range of creative services to help your brand stand out.
            </p>
          
          <Link 
            href="/services"
            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
          >
            <span>View all services</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
          </Link>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#F3F3F1] rounded-md overflow-hidden transition-all duration-300 flex flex-col h-[500px]"
            >
              <div className="p-6 pb-8 flex flex-col h-full">
                <div className="mb-4 pl-4">
                  <h3 className="text-2xl font-normal text-black mb-2">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 max-w-sm text-lg leading-tight flex items-center">
                    {service.description}
                  </p>
                </div>
                <div className="mt-24 w-full h-[200px] flex items-end">
                  <div className="relative w-full h-full max-w-[90%] mx-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-contain ${
                        service.title === 'Mobile-First' ? 'scale-110' : 
                        service.title === 'Booking & Forms' ? 'scale-125' :
                        service.title === 'Scalable Support' ? 'scale-120' : ''
                      }`}
                      priority={index < 3}
                    />
                  </div>
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