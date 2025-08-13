'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does a typical web project take?",
      answer: "Most projects take between 4-8 weeks from initial consultation to launch, depending on the scope and complexity. We'll provide a detailed timeline during our discovery phase."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes strategy, design, development, testing, and deployment. We provide transparent quotes with no hidden costs. Additional services like content creation or ongoing maintenance can be added as needed."
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer: "Yes, we offer various support and maintenance packages. These can include security updates, performance optimization, content updates, and technical support. We'll discuss your needs and recommend the best solution."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with modern technologies including React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend, we use Node.js, Express, and various databases. We choose the best stack for your specific project requirements."
    },
    {
      question: "How involved will I need to be in the process?",
      answer: "We value your input throughout the project. We'll need your feedback during key milestones, but we handle the heavy lifting. Regular check-ins ensure we stay aligned with your vision."
    },
    {
      question: "Can you help with content creation?",
      answer: "Absolutely! We offer content strategy and copywriting services to ensure your website effectively communicates your message. We can also work with your existing content or collaborate with your content team."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-4 pl-4 pb-16">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        <div className="pr-2">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
            <h2 className="text-xl text-black max-w-2xl">
              <span className="text-gray-600 mr-2">FAQs</span> Common questions about our web design and development process, services, and how we work with clients to bring digital visions to life.
            </h2>
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-4xl pl-1">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200 py-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-3 focus:outline-none group"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-book text-black group-hover:text-gray-700 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-180' : ''}`} 
                    aria-hidden="true"
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={activeIndex !== index}
                >
                  <div className="pb-4 pr-8">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
