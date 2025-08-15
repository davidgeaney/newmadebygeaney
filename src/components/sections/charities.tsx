import React from 'react';
import Link from 'next/link';

const Charities = () => {
  return (
    <section className="py-4 text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="w-full">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="w-full max-w-7xl">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Text Content */}
                <div className="md:w-2/5">
                  <p className="text-xl text-white mb-12">
                    <span className="text-gray-400 mr-2">Charities</span> Service to our communities allows us to benefit our world in more ways than just for pure financial gain. As a studio, we contribute or donate to charitable causes on a regular schedule.
                  </p>
                  <p className="text-sm text-gray-300 mb-20">
                    By fostering a commitment to social responsibility we aim to have an active role in making a positive impact on society. It is an excellent way for us to engage our team beyond their roles around a common cause creating a more positive and inclusive workplace culture.
                  </p>
                </div>

                {/* Charity Lists */}
                <div className="md:w-3/5 mt-20 md:mt-32 md:ml-64">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-normal text-neutral-500 mb-1">Charities we've worked for</h3>
                      <ul className="flex flex-wrap gap-2">
                        {['Mate Act Now', 'Koha Apparel', 'Mothers All Together', 'SPCA'].map((charity, index) => (
                          <li key={index}>
                            <Link 
                              href="#" 
                              className="group relative text-sm text-white bg-[#999999] px-4 py-1 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                            >
                              <span>{charity}</span>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-normal text-neutral-500 mb-1">Regular donators</h3>
                      <ul className="flex flex-wrap gap-2">
                        {['St John', 'Wheelchair Rugby New Zealand'].map((donor, index) => (
                          <li key={index}>
                            <Link 
                              href="#" 
                              className="group relative text-sm text-white bg-[#999999] px-4 py-1 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                            >
                              <span>{donor}</span>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-black"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charities;
