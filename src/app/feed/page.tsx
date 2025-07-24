"use client";

import MainLayout from '@/components/layouts/main-layout';

export default function FeedPage() {
  return (
    <MainLayout>
      <section className="py-10">
          <div className="w-full">
            {/* Full-width subtle divider line */}
            <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
              <div className="h-px bg-gray-200"></div>
            </div>

            {/* Content container with side padding */}
            <div className="px-4 md:px-6">
              {/* Section Header - Stacked on mobile, row on desktop */}
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                <p className="text-xl text-black max-w-lg">
                  <span className="text-xl text-gray-600 mr-2">Feed</span> Stay updated with our latest work, thoughts, and insights from the world of design and development.
                </p>
              </div>

              {/* Feed content will go here */}
              <div className="mt-16">
                {/* Placeholder for feed content */}
                <p className="text-gray-600">Feed content coming soon...</p>
              </div>
            </div>
          </div>
        </section>
    </MainLayout>
  );
}
