'use client';

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ServicesSection() {
    const services = [
    {
      title: 'Fully Custom Websites',
      description: 'We don\'t do cookie‑cutter. Every site is built from scratch to fit your brand perfectly.',
      image: '/images/services/customdesign.jpg'
    },
    {
      title: 'Fast Turnaround',
      description: 'We move quickly so you can launch and start seeing results sooner.',
      image: '/images/services/builtforspeed.png'
    },
    {
      title: 'Mobile‑First Design',
      description: 'Most people visit on their phone, so your site will look amazing on any screen.',
      image: '/images/services/mobilefirst.png'
    },
    {
      title: 'E‑commerce Sites',
      description: 'From product pages to secure checkout, we\'ll set you up to sell online with ease.',
      image: '/images/services/bookingandforms.png'
    },
    {
      title: 'Conversion‑Focused Design',
      description: 'Your site won\'t just look good. It will be built to turn visitors into customers.',
      image: '/images/services/clearmessaging.png'
    },
    {
      title: 'SEO & Speed Optimization',
      description: 'We make sure your site loads fast and gets found on Google.',
      image: '/images/services/seofriendly.png'
    },
    {
      title: 'Analytics & Tracking',
      description: 'See exactly who\'s visiting, where they\'re from, and what\'s working.',
      image: '/images/services/ongoingsupport.png'
    },
    {
      title: 'Easy Updates',
      description: 'Want to change a photo or update text? You can do it yourself in seconds.',
      image: '/images/services/hostingincluded.png'
    },
    {
      title: 'Ongoing Support',
      description: 'We don\'t just hand over the keys and vanish. We\'re here whenever you need us.',
      image: '/images/services/scalablesupport.png'
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
              <span className="text-2xl text-gray-600 mr-2">What We Do</span> We turn coffee into code and pixels into profit. Your website shouldn't just exist—it should work its socks off for you.
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