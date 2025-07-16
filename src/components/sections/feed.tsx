import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function FeedSection() {
  const feedItems = [
    {
      title: 'The Future of Brand Identity',
      excerpt: 'How emerging technologies are reshaping the way we think about brand design and digital experiences.',
      date: 'March 15, 2024',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e0d8045-6747-4070-bc57-e647587b3f52-newterritory-studio/assets/images/cdn-areafiftyonestore_3569580221609578064_2025-02-16.jpeg?'
    },
    {
      title: 'Digital Transformation in Design',
      excerpt: 'Navigating the intersection of creativity and technology in modern design practices.',
      date: 'March 10, 2024',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e0d8045-6747-4070-bc57-e647587b3f52-newterritory-studio/assets/images/cdn-bypariah_3553196942365452424_2025-01-25.jpeg?'
    },
    {
      title: 'Sustainable Design Practices',
      excerpt: 'Creating beautiful work while being mindful of our environmental impact.',
      date: 'March 5, 2024',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e0d8045-6747-4070-bc57-e647587b3f52-newterritory-studio/assets/images/cdn-i9yg5f9a.png?'
    },
    {
      title: 'The Power of Storytelling',
      excerpt: 'How narrative drives successful brand experiences across all touchpoints.',
      date: 'February 28, 2024',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9e0d8045-6747-4070-bc57-e647587b3f52-newterritory-studio/assets/images/cdn-sur_3.jpg?'
    }
  ]

  return (
    <section className="py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-px bg-gray-200"></div>
        </div>
        
        {/* Section Header - Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 p-2 md:p-4 gap-4">
          <p className="text-xl text-black max-w-xl">
            <span className="text-xl text-gray-600 mr-2">Feed</span> Thoughts, insights, and perspectives on design and creativity.
          </p>
          
          <Link 
            href="/feed"
            className="group relative text-sm text-black bg-gray-100 px-4 py-2.5 pr-4 rounded-lg hover:pr-10 hover:bg-black hover:text-white transition-all duration-300 flex items-center w-fit overflow-hidden"
          >
            <span>View all posts</span>
            <ArrowRightIcon className="absolute w-3.5 h-3.5 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 transition-all duration-300" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-2 max-w-full">
          {feedItems.map((item, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <time className="text-xs text-gray-500 uppercase tracking-wide">{item.date}</time>
                <h3 className="text-lg font-medium text-black group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}