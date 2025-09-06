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
    <section className="pt-4 pl-4 relative overflow-visible pb-20" style={{ marginBottom: '0' }}>
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        {/* Content container with side padding */}
        <div className="pr-2">
          {/* Section Header - Stacked on mobile, row on desktop */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <h2 className="text-xl text-black max-w-lg">
              <span className="text-gray-600 mr-2">Contact</span> We're always looking to start new conversations.
            </h2>
            
            <Link 
              href="/contact"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
            >
              <span>More information</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {/* Left Column - Contact Info */}
            <div className="w-full">
              <div className="mb-12">
                <p className="text-sm text-black max-w-lg mb-8">
                  To kick off a new project, enquire about a service or to simply just get in touch, please use our contact details below or our{' '}
                  <Link href="/contact#form" className="underline hover:text-gray-600 transition-colors">
                    enquiry form
                  </Link>.
                </p>
                
                <div className="flex flex-col items-start space-y-1">
                  {/* Email with special hover effect */}
                  <div>
                    <a 
                      href="mailto:david@madebygeaney.com"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>david@madebygeaney.com</span>
                      <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                    </a>
                  </div>
                  
                  {/* Phone with special hover effect */}
                  <div>
                    <a 
                      href="tel:+353861234567"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>+353 83 379 3342</span>
                      <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:max-w-md pt-10">
              <div className="bg-white">
                {/* Form Header */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 font-normal">
                    Sign up to our newsletter
                  </p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleSubmit}>
                  <div className="form-container max-w-sm">
                    {/* First Name Field */}
                    <div className="form-group mb-4">
                      <label className="block text-xs font-medium text-gray-500 mb-1">First Name</label>
                      <div className="form-field">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Last Name Field */}
                    <div className="form-group mb-4">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Last Name</label>
                      <div className="form-field">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div className="form-group mb-4">
                      <label className="block text-xs font-medium text-gray-500 mb-1">Email Address</label>
                      <div className="form-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="example@domain.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Submit Button */}
                  <div className="form-submit pt-1 pb-8 flex justify-end max-w-sm">
                    <button
                      type="submit"
                      className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>Subscribe</span>
                      <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-b from-black/10 to-transparent" style={{ transform: 'translateY(100%)' }}></div>
    </section>
  )
}