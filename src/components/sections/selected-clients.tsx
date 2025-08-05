'use client';

import { useState } from 'react';

// Sample client data with categories and website URLs
const clients = [
  { name: 'Devon Made Glass', categories: ['Design', 'Branding'], url: 'https://devonmadeglass.com' },
  { name: 'Checks Downtown', categories: ['E-Commerce', 'Web Design'], url: 'https://checksdowntown.com' },
  { name: 'Simon James Design', categories: ['Design', 'Branding'], url: 'https://simonjamesdesign.com' },
  { name: 'Beuchat', categories: ['E-Commerce', 'Development'], url: 'https://beuchat.com' },
  { name: 'Relay Tech', categories: ['Development', 'Strategy'], url: 'https://relay.tech' },
  { name: 'Commoners', categories: ['Design', 'Branding'], url: 'https://commoners.co.nz' },
  { name: 'twenty-seven names', categories: ['E-Commerce'], url: 'https://twentysevennames.com' },
  { name: '10XL', categories: ['Design', 'Branding'], url: 'https://10xl.co.nz' },
  { name: 'Mate Act Now', categories: ['Charity'], url: 'https://mateactnow.com' },
  { name: 'Blink Boys', categories: ['Design', 'Branding'], url: 'https://blinkboys.com' },
  { name: 'Crane Brothers', categories: ['E-Commerce', 'Web Design'], url: 'https://crane-brothers.com' },
  { name: 'Jasmax', categories: ['Design', 'Strategy'], url: 'https://jasmax.com' },
  { name: 'Okreal', categories: ['Strategy', 'Development'], url: 'https://okreal.co' },
  { name: 'Round', categories: ['Branding'], url: 'https://round.agency' },
  { name: 'Knowear', categories: ['Web Design'], url: 'https://knowear.co' },
  { name: 'Porter Packaging', categories: ['Branding', 'Strategy'], url: 'https://porterpackaging.com' },
  { name: 'Future Co', categories: ['Development'], url: 'https://future.co' },
  { name: 'Argus', categories: ['Strategy'], url: 'https://argus.com' },
  { name: 'Mina', categories: ['Branding'], url: 'https://mina.com' },
  { name: 'Wonder Group', categories: ['Web Design', 'Development'], url: 'https://wondergroup.com' },
];

// Extract all unique categories from clients
const allCategories = ['All', ...new Set(clients.flatMap(client => client.categories))];

export default function SelectedClients() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Check if a client matches the selected category
  const isClientActive = (client: { categories: string[] }) => {
    return selectedCategory === 'All' || client.categories.includes(selectedCategory);
  };

  return (
    <section className="bg-white py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left side - Text and Filters */}
            <div className="md:w-1/3">
              <p className="text-xl text-black">
                <span className="text-xl text-gray-600 mr-2">Selected Clients</span>
                From industry leading brands to up-and-coming innovators, we work alongside our clients to give them the edge in the digital world.
              </p>
              <p className="text-xl text-black mt-8 mb-8">
                Here is a selection of some of our favourites.
              </p>

              {/* Filter Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    className={`
                      text-sm px-4 py-2 rounded-full 
                      transition-all duration-200 w-fit
                      whitespace-nowrap
                      ${selectedCategory === category 
                        ? 'bg-black text-white' 
                        : 'bg-gray-100 text-black'}
                    `}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Client Tags */}
            <div className="md:max-w-4xl pr-12">
              <div className="grid grid-flow-col auto-cols-[minmax(0,_1fr)] auto-rows-[minmax(0,_1fr)] gap-[30px]">
                <div className="flex flex-col gap-2">
                  {clients.filter((_, i) => i % 3 === 0).map((client) => {
                    const isActive = isClientActive(client) || selectedCategory === 'All';
                    return isActive ? (
                      <a
                        key={client.name}
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-sm px-4 py-2 rounded-full 
                          transition-all duration-200 w-fit
                          bg-gray-100 text-black whitespace-nowrap
                          opacity-100 cursor-pointer
                        "
                      >
                        {client.name}
                      </a>
                    ) : (
                      <div 
                        key={client.name}
                        className="
                          text-sm px-4 py-2 rounded-full 
                          w-fit bg-gray-100 text-gray-400 
                          whitespace-nowrap opacity-30
                        "
                      >
                        {client.name}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-2">
                  {clients.filter((_, i) => i % 3 === 1).map((client) => {
                    const isActive = isClientActive(client) || selectedCategory === 'All';
                    return isActive ? (
                      <a
                        key={client.name}
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-sm px-4 py-2 rounded-full 
                          transition-all duration-200 w-fit
                          bg-gray-100 text-black whitespace-nowrap
                          opacity-100 cursor-pointer
                        "
                      >
                        {client.name}
                      </a>
                    ) : (
                      <div 
                        key={client.name}
                        className="
                          text-sm px-4 py-2 rounded-full 
                          w-fit bg-gray-100 text-gray-400 
                          whitespace-nowrap opacity-30
                        "
                      >
                        {client.name}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-2">
                  {clients.filter((_, i) => i % 3 === 2).map((client) => {
                    const isActive = isClientActive(client) || selectedCategory === 'All';
                    return isActive ? (
                      <a
                        key={client.name}
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-sm px-4 py-2 rounded-full 
                          transition-all duration-200 w-fit
                          bg-gray-100 text-black whitespace-nowrap
                          opacity-100 cursor-pointer
                        "
                      >
                        {client.name}
                      </a>
                    ) : (
                      <div 
                        key={client.name}
                        className="
                          text-sm px-4 py-2 rounded-full 
                          w-fit bg-gray-100 text-gray-400 
                          whitespace-nowrap opacity-30
                        "
                      >
                        {client.name}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
