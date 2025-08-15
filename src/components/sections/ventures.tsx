import React from 'react';
import Link from 'next/link';

const Ventures = () => {
  return (
    <section className="pt-4 pb-10 text-white" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="w-full">
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="w-full max-w-7xl">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Text Content */}
                <div className="md:w-2/5">
                  <p className="text-xl text-white mb-6">
                    <span className="text-gray-400 mr-2">Ventures</span> If an attractive enough opportunity arises we offer an equity-for-service model where our compensation is replaced by co-ownership of the project we are working on.
                  </p>
                </div>

                {/* Additional Content and CTA */}
                <div className="md:w-3/5 md:ml-64">
                  <div className="space-y-4 text-gray-300">
                    <p>For opportunities with excellent potential but limitations in its resourcing, we may forgo our usual monetary compensation in exchange for an ownership stake in the success of the project.</p>
                    <p>We only offer this for projects with potential we consider highly motivating as to warrant onboarding the risks associated with the project alongside operators that we can foresee an excellent working relationship with, creating a more collaborative and mutually beneficial project with greater potential from our involvement.</p>
                    <p>If you have an idea but don't know where to start, please get in touch.</p>
                  </div>
                  <div className="mt-8">
                    <Link 
                      href="/contact" 
                      className="group relative text-sm text-white bg-[#999999] px-4 py-1.5 pr-6 rounded-full hover:pr-8 hover:bg-white hover:text-black transition-all duration-200 flex items-center w-fit overflow-hidden"
                    >
                      <span>Contact us</span>
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

export default Ventures;
