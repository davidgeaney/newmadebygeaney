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
    <section className="relative bg-white z-10 py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        <div className="px-2 md:px-4">
          {/* Section Header - Single Line Layout */}
          <div className="flex items-start justify-between mb-8">
          <div className="flex items-start">
            <p className="text-xl text-black max-w-xl">
              <span className="text-xl text-gray-600 mr-2">Contact</span> We're always looking to start new conversations.
            </p>
          </div>
          
          <Link 
            href="/contact"
            className="hidden sm:flex group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-4 rounded-lg hover:pr-10 hover:bg-black hover:text-white transition-all duration-300 items-center w-fit overflow-hidden"
          >
            <span>More info</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300" />
          </Link>
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
                    className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-4 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden"
                  >
                    <span>hello@newterritory.studio</span>
                    <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300" />
                  </a>
                </div>
                
                {/* Phone with special hover effect */}
                <div>
                  <a 
                    href="tel:+642114992221"
                    className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-4 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden"
                  >
                    <span>+64 21 149 9221</span>
                    <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="w-full max-w-lg">
            <div className="bg-white">
              <h4 className="text-sm font-medium text-gray-400 mb-6">
                Sign up to our newsletter
              </h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all text-sm"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all text-sm"
                    required
                  />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-100 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all text-sm"
                    required
                  />
                </div>
                
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="cursor-pointer group relative text-sm text-black bg-gray-100 px-4 py-2 pr-4 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden"
                  >
                    <span>Subscribe</span>
                    <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-300" />
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