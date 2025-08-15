'use client';

import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type FeedItem = {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
};

export default function FeedSection() {
  const feedItems: FeedItem[] = [
    {
      id: 1,
      title: 'The Future of Web Design in 2024',
      category: 'Design',
      date: '05/15/2024',
      imageUrl: '/images/projects/placeholdr.png',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Optimizing Website Performance',
      category: 'Development',
      date: '06/02/2024',
      imageUrl: '/images/projects/placeholdr2.png',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'UI/UX Trends to Watch',
      category: 'Design',
      date: '06/10/2024',
      imageUrl: '/images/projects/placeholdr3.png',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Building Scalable Web Apps',
      category: 'Development',
      date: '06/18/2024',
      imageUrl: '/images/projects/placeholdr.png',
      readTime: '7 min read'
    }
  ];

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
              <span className="text-gray-600 mr-2">Latest Insights</span> Thoughts, ideas, and updates on design, development, and digital strategy to help grow your online presence.
            </h2>
            
            <Link 
              href="/insights"
              className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-6 rounded-full hover:pr-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden self-start md:self-auto"
            >
              <span>View all articles</span>
              <ArrowRightIcon className="absolute w-3.5 h-3.5 right-1 opacity-0 group-hover:opacity-100 group-hover:right-2 transition-all duration-200 text-white" />
            </Link>
          </div>
          
          {/* Feed Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {feedItems.map((item) => (
              <article key={item.id} className="group">
                <div className="relative w-full pb-[100%] bg-gray-100 mb-2 rounded-lg overflow-hidden group-hover:cursor-pointer">
                  <div className="absolute inset-0 w-full h-full">
                    <div className="relative w-full h-full">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-book text-black">
                    {item.title}
                  </h3>
                  <span className="bg-gray-100 font-medium text-gray-700 text-sm px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <time 
                    dateTime={new Date(item.date).toISOString().split('T')[0]}
                    className="text-sm text-gray-700"
                  >
                    {item.date}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
