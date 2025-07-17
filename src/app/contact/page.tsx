'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/sections/footer';

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
    helpType: ''
  });
  
  const [expandedSections, setExpandedSections] = useState<{[key: number]: boolean}>({
    1: true,
    2: false,
    3: false,
    4: false,
    5: false
  });
  
  const toggleSection = (sectionNumber: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionNumber]: !prev[sectionNumber]
    }));
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Set timezone to Dublin/Ireland
      const dublinTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Dublin"}));
      
      // Format time as HH:MM:SS
      const hours = dublinTime.getHours().toString().padStart(2, '0');
      const minutes = dublinTime.getMinutes().toString().padStart(2, '0');
      const seconds = dublinTime.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
      
      // Check if within working hours (9 AM to 6 PM Dublin time)
      const currentHour = dublinTime.getHours();
      setIsAvailable(currentHour >= 9 && currentHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'Feed', href: '/#feed' },
    { name: 'Contact', href: '/contact' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white relative">
        <div className="w-full pt-6 pl-6">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2 tracking-tight">
              MADE BY GEANEY
            </h1>
            <div className="flex items-center space-x-2 mb-4 cursor-default">
              <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span className="text-sm font-medium text-gray-700">Donegal</span>
              <div className="relative group h-[20px] flex items-center">
                <span className="inline-block text-sm font-mono text-gray-700 transition-opacity duration-200 group-hover:opacity-0 min-w-[100px]">
                  {currentTime} GMT+1
                </span>
                <span className="absolute left-0 text-xs font-mono text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {isAvailable ? "Here to help :)" : "We're asleep :("}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:bottom-auto md:top-6">
          <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 shadow-md">
            <div className="flex items-center space-x-4 md:space-x-6 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-sm ${link.href === '/contact' ? 'text-black font-medium' : 'text-gray-500 hover:text-black'} transition-all duration-300 h-full flex items-center overflow-hidden`}
                >
                  <span className="relative overflow-hidden h-5 flex items-center">
                    <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">
                      {link.name}
                    </span>
                    <span className="absolute left-0 top-full w-full text-black transform group-hover:-translate-y-full transition-transform duration-300">
                      {link.name}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </section>

      {/* Full width divider */}
      <div className="w-full border-t border-gray-200 mt-12"></div>
      
      {/* Contact Section */}
      <div className="flex-1 bg-white">
        <div className="w-full pt-0 pl-6">
          <div className="max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left column - Contact info */}
              <div className="pt-4">
                <p className="text-black mb-12 text-xl max-w-lg">
                  To kick off a new project, enquire about a service or to simply just get in touch, please use our contact details or form below.
                </p>
                
                {/* Contact Info */}
                <div className="mb-12">
                  <div className="flex gap-12">
                    <div className="w-24 flex-shrink-0">
                      <h3 className="text-sm font-medium text-gray-400">Contact</h3>
                    </div>
                    <div>
                      <a 
                        href="mailto:hello@newmadebygeaney.com"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden mb-2"
                      >
                        <span>hello@newmadebygeaney.com</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="mb-12">
                  <div className="flex gap-12">
                    <div className="w-24 flex-shrink-0">
                      <h3 className="text-sm font-medium text-gray-400">Socials</h3>
                    </div>
                    <div className="space-y-2">
                      <a 
                        href="https://instagram.com/newmadebygeaney" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Instagram</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a 
                        href="https://linkedin.com/company/newmadebygeaney" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>LinkedIn</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Playlists */}
                <div className="mb-12">
                  <div className="flex gap-12">
                    <div className="w-24 flex-shrink-0">
                      <h3 className="text-sm font-medium text-gray-400">Playlists</h3>
                    </div>
                    <div className="space-y-2">
                      <a 
                        href="https://open.spotify.com/playlist/your-playlist-1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Studio Vibes</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                      <a 
                        href="https://open.spotify.com/playlist/your-playlist-2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Creative Flow</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <div className="flex gap-12">
                    <div className="w-24 flex-shrink-0">
                      <h3 className="text-sm font-medium text-gray-400">Newsletter</h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600 mb-4">
                        Subscribe to our newsletter for updates and insights.
                      </p>
                      <form className="space-y-3">
                        <div>
                          <input
                            type="text"
                            name="newsletterFirstName"
                            placeholder="First name"
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="newsletterLastName"
                            placeholder="Last name"
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="newsletterEmail"
                            placeholder="Email address"
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div className="flex justify-end mt-2">
                          <button
                            type="submit"
                            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                          >
                            Subscribe
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

              {/* Right column - Contact form */}
              <div className="border-l border-gray-200 pl-12 py-4">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-10">
                    {/* Question 01 */}
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-4 flex items-start">
                        <span className="text-gray-400 text-xs mt-1 mr-2">01</span>
                        <label className="text-gray-500 text-sm">How can we help?</label>
                      </div>
                      <div className="col-span-8">
                        <label className="block text-sm text-gray-500 mb-1">Reason for enquiry</label>
                        <div className="relative">
                          <select
                            name="helpType"
                            value={formData.helpType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none pr-8"
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              backgroundImage: 'none'
                            }}
                          >
                            <option value="">I have a new project</option>
                            <option value="partnership">Partnership opportunity</option>
                            <option value="general">General inquiry</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Question 02 */}
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-4 flex items-start">
                        <span className="text-gray-400 text-xs mt-1 mr-2">02</span>
                        <label className="text-gray-500 text-sm">Tell us about yourself</label>
                      </div>
                      <div className="col-span-8 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">First name</label>
                            <input
                              type="text"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-500 mb-1">Last name</label>
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Position</label>
                          <input
                            type="text"
                            name="position"
                            placeholder="CEO"
                            value={formData.position}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Email address</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Question 03 */}
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-4 flex items-start">
                        <span className="text-gray-400 text-xs mt-1 mr-2">03</span>
                        <label className="text-gray-500 text-sm">Tell us about your business</label>
                      </div>
                      <div className="col-span-8 space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">What is your business called?</label>
                          <input
                            type="text"
                            name="businessName"
                            placeholder="Classcover Ireland"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">What do you do?</label>
                          <input
                            type="text"
                            name="businessDescription"
                            placeholder="Connect schools with qualified substitute teachers"
                            value={formData.businessDescription}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Where are you located?</label>
                          <input
                            type="text"
                            name="location"
                            placeholder="Donegal, Ireland"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">How long have you been operating?</label>
                          <div className="relative">
                            <select
                              name="yearsOperating"
                              value={formData.yearsOperating}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none pr-8"
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              backgroundImage: 'none'
                            }}
                            >
                              <option value="">Start-up</option>
                              <option value="0-5">0-5 years</option>
                              <option value="5-10">5-10 years</option>
                              <option value="10+">10+ years</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Question 04 */}
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-4 flex items-start">
                        <span className="text-gray-400 text-xs mt-1 mr-2">04</span>
                        <label className="text-gray-500 text-sm">Tell us about the project</label>
                      </div>
                      <div className="col-span-8 space-y-4">
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">What best describes your project?</label>
                          <div className="relative">
                            <select
                              name="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none pr-8"
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              backgroundImage: 'none'
                            }}
                            >
                              <option value="ecommerce">eCommerce Development</option>
                              <option value="website">Website Design & Development</option>
                              <option value="upgrades">Website Upgrades</option>
                              <option value="consultancy">Digital Consultancy</option>
                              <option value="media">New Media Project</option>
                              <option value="charity">Charity Engagement</option>
                              <option value="artist">Artist Program</option>
                              <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">How much are you looking to invest into the project?</label>
                          <div className="relative">
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none pr-8"
                            style={{
                              WebkitAppearance: 'none',
                              MozAppearance: 'none',
                              backgroundImage: 'none'
                            }}
                            >
                              <option value="lt5k">Less than 5k</option>
                              <option value="5-10k">5-10k</option>
                              <option value="10k+">10k+</option>
                              <option value="deal">We want to make a deal</option>
                              <option value="sponsorship">We are looking for sponsorship</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm text-gray-500 mb-1">Describe your project?</label>
                          <textarea
                            name="projectDescription"
                            placeholder="e.g - what problem you're trying to solve, who and where you serve, about your current operations"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Question 05 */}
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-4 flex items-start">
                        <span className="text-gray-400 text-xs mt-1 mr-2">05</span>
                        <label className="text-gray-500 text-sm">Additional information</label>
                      </div>
                      <div className="col-span-8">
                        <textarea
                          name="message"
                          placeholder="Social links, how you found us, anything!"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-2 bg-gray-100 border-0 rounded-xl text-sm focus:ring-0 focus:outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-200 flex items-center w-fit overflow-hidden"
                      >
                        <span>Submit</span>
                        <svg className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
