'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ContactHero = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Set timezone to Dublin/Ireland
      const dublinTime = new Date(now.toLocaleString("en-US", {timeZone: "Europe/Dublin"}));
      
      // Format time as HH:MM GMT+1
      const hours = dublinTime.getHours().toString().padStart(2, '0');
      const minutes = dublinTime.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes} GMT+1`);
      
      // Check if within working hours (9 AM to 6 PM Dublin time)
      const currentHour = dublinTime.getHours();
      setIsAvailable(currentHour >= 9 && currentHour < 18);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1">
      {/* Top bar with logo and time */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <Link href="/" className="text-lg font-medium">MADE BY GEANEY</Link>
            </div>
            <div className="ml-4 text-sm text-gray-500">
              {currentTime}
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left section - Contact info and newsletter */}
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-bold mb-8">Let's talk</h1>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Fill out the form and I'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <a href="mailto:contact@davidgeaney.com" className="text-gray-900 hover:text-gray-600">
                    contact@davidgeaney.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="text-gray-900">Dublin, Ireland</p>
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-medium mb-4">Stay updated</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-gray-900"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right section - Contact form */}
          <div className="border-l border-gray-200 pl-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact form component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const questions = [
    {
      number: '01',
      label: 'What is your name?',
      type: 'text',
      name: 'name',
      required: true
    },
    {
      number: '02',
      label: 'Your email address',
      type: 'email',
      name: 'email',
      required: true
    },
    {
      number: '03',
      label: 'What type of project is this?',
      type: 'select',
      name: 'projectType',
      options: ['Web Development', 'Mobile App', 'UI/UX Design', 'Other'],
      required: true
    },
    {
      number: '04',
      label: 'What is your budget range?',
      type: 'select',
      name: 'budget',
      options: ['€1,000 - €5,000', '€5,000 - €15,000', '€15,000 - €50,000', '€50,000+'],
      required: true
    },
    {
      number: '05',
      label: 'Tell us about your project',
      type: 'textarea',
      name: 'message',
      required: true
    }
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <h2 className="text-2xl font-bold mb-8">Start a project</h2>
      
      <div className="space-y-10">
        {questions.map((question, index) => (
          <div key={index} className="group">
            <div className="flex items-start">
              <span className="text-xs text-gray-500 w-8 flex-shrink-0">{question.number}</span>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {question.label}
                </label>
                {question.type === 'select' ? (
                  <select
                    name={question.name}
                    required={question.required}
                    value={formData[question.name as keyof typeof formData] as string}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none bg-transparent"
                  >
                    <option value="">Select an option</option>
                    {question.options?.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : question.type === 'textarea' ? (
                  <textarea
                    name={question.name}
                    rows={4}
                    required={question.required}
                    value={formData[question.name as keyof typeof formData] as string}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none resize-none"
                  />
                ) : (
                  <input
                    type={question.type}
                    name={question.name}
                    required={question.required}
                    value={formData[question.name as keyof typeof formData] as string}
                    onChange={handleChange}
                    className="mt-1 block w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-black text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default ContactHero;
