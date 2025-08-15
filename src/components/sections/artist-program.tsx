'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const ArtistProgram = () => {
  const [activeArtist, setActiveArtist] = useState<number | null>(null);

  const toggleArtist = (index: number) => {
    setActiveArtist(activeArtist === index ? null : index);
  };

  const artists = [
    { 
      name: 'Alexander Schipper',
      description: 'Contemporary artist specializing in abstract expressionism. Alexander has exhibited in galleries worldwide and his work explores the intersection of technology and traditional mediums.',
      website: 'alexanderschipper.com'
    },
    { 
      name: 'Josiah Watson',
      description: 'Multimedia artist known for immersive installations. Josiah\'s work often incorporates found objects and digital elements to create thought-provoking experiences.',
      website: 'josiahwatson.art'
    }
  ];

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
                    <span className="text-gray-400 mr-2">Artist program</span> This initiative is our way of celebrating the immeasurable impact art has on the philosophy and practice of our studio.
                  </p>
                  <p className="text-sm text-gray-300 mb-20">
                    We donate our time to design and develop a portfolio for an up-and-coming artist of any discipline, biannually. Our intention is to provide talented individuals a digital launchpad that allows access to their work and the conversations of their folios. We dedicate collective time, energy and a small financial contribution to provide a platform for artists to break out.
                  </p>
                </div>

                {/* Artists List */}
                <div className="md:w-3/5 mt-14 md:pt-16 md:ml-64">
                  <div className="w-full max-w-2xl">
                    <h3 className="text-sm font-normal text-white mb-3">Artists we've worked with:</h3>
                    <div className="space-y-1.5 w-full">
                      {artists.map((artist, index) => (
                        <div key={index} className="w-full rounded-lg overflow-hidden">
                          <button 
                            className={`w-full text-left px-3 py-3 pr-10 relative flex justify-between items-center transition-colors duration-200 ${
                              activeArtist === index ? 'bg-white' : 'bg-[#A1A1A1]'
                            }`}
                            onClick={() => toggleArtist(index)}
                          >
                            <span className={`font-normal text-sm ${activeArtist === index ? 'text-black' : 'text-white'}`}>
                              {artist.name}
                            </span>
                            <motion.span
                              className="absolute right-2"
                              initial={false}
                              animate={{
                                rotate: activeArtist === index ? 0 : 0,
                                opacity: 1
                              }}
                              transition={{ duration: 0.2 }}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth="1.5" 
                                stroke="currentColor" 
                                className={`w-4 h-4 ${activeArtist === index ? 'text-black' : 'text-white'}`}
                              >
                                {activeArtist === index ? (
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                ) : (
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                )}
                              </svg>
                            </motion.span>
                          </button>
                          <AnimatePresence>
                            {activeArtist === index && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="px-3 pb-4">
                                  <p className="text-black text-sm mb-3">{artist.description}</p>
                                  <Link 
                                    href={`https://${artist.website}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm text-black border border-black px-4 py-1 rounded-full bg-transparent inline-block"
                                  >
                                    Website
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
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

export default ArtistProgram;
