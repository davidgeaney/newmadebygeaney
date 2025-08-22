'use client';

interface Partner {
  name: string;
  url: string;
  description?: string;
}

const partners: Partner[] = [
  { 
    name: 'Webflow', 
    url: 'https://webflow.com',
    description: 'No-code website builder and hosting platform'
  },
  { 
    name: 'Figma', 
    url: 'https://figma.com',
    description: 'Collaborative interface design tool'
  },
  { 
    name: 'Shopify', 
    url: 'https://shopify.com',
    description: 'E-commerce platform'
  },
  { 
    name: 'Stripe', 
    url: 'https://stripe.com',
    description: 'Payment processing platform'
  },
  { 
    name: 'Vercel', 
    url: 'https://vercel.com',
    description: 'Cloud platform for static sites and serverless functions'
  },
  { 
    name: 'Supabase', 
    url: 'https://supabase.com',
    description: 'Open source Firebase alternative'
  },
];

export default function PartnersAndCollaborators() {
  return (
    <section className="bg-white py-10">
      <div className="w-full">
        {/* Full-width subtle divider line */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-4">
          <div className="h-[0.5px] bg-gray-200"></div>
        </div>
        
        <div className="px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Left side - Text */}
            <div className="md:w-1/3">
              <p className="text-xl text-black">
                <span className="text-xl text-gray-600 mr-2">Partners & Collaborators</span>
                We work with industry-leading platforms and tools to deliver exceptional digital experiences.
              </p>
              <p className="text-xl text-black mt-8 mb-8">
                These are some of the technologies we trust and use daily.
              </p>
            </div>

            {/* Right side - Partner Tags */}
            <div className="md:max-w-4xl pr-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-4 border border-gray-200 rounded-lg
                      hover:bg-gray-50 transition-colors duration-200
                      group
                    "
                  >
                    <h3 className="font-medium text-black group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                    {partner.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {partner.description}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
