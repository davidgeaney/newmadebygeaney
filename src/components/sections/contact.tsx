"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

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
            <p className="text-xl text-black max-w-xl">
              <span className="text-xl text-gray-600 mr-2">Contact</span> We're always looking to start new conversations.
            </p>
            
            <a 
              href="mailto:hello@newterritory.studio"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
            >
              <span>Get in touch</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {/* Left Column - Contact Info */}
            <div className="w-full">
              <div className="mb-12">
                <p className="text-sm text-black max-w-lg mb-8">
                  To kick off a new project, enquire about a service or to simply just get in touch, please use our contact details below or our{' '}
                  <Link 
                    href="/contact"
                    className="text-black hover:text-gray-600 transition-colors underline"
                  >
                    enquiry form
                  </Link>
                  .
                </p>
                
                <div className="flex flex-col items-start space-y-1">
                  {/* Email with special hover effect */}
                  <div>
                    <a 
                      href="mailto:hello@newterritory.studio"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>hello@newterritory.studio</span>
                      <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                    </a>
                  </div>
                  
                  {/* Phone with special hover effect */}
                  <div>
                    <a 
                      href="tel:+642114992221"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>+64 21 149 9221</span>
                      <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Newsletter Form */}
            <div className="w-full md:max-w-md pt-10">
              <div className="bg-white">
                <h4 className="text-sm font-medium text-gray-400 mb-4">
                  Newsletter
                </h4>
                
                <p className="text-sm text-gray-600 mb-4">
                  Subscribe to our newsletter for updates and insights.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3 max-w-sm">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="flex justify-end mt-2">
                    <button
                      type="submit"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>Subscribe</span>
                      <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}