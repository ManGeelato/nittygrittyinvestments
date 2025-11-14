import React from 'react';
import { Building2, Briefcase, Award } from 'lucide-react';

const ClientsLogoSlider = () => {
  // Sample client logos (you'll replace these with actual company names/logos)
  const clients = [
    { id: 1, name: 'Tech Innovations Ltd', industry: 'Technology' },
    { id: 2, name: 'Sandton Properties', industry: 'Real Estate' },
    { id: 3, name: 'Gateway Mall', industry: 'Retail' },
    { id: 4, name: 'Waterfall Estate', industry: 'Residential' },
    { id: 5, name: 'Rosebank Medical', industry: 'Healthcare' },
    { id: 6, name: 'City Center Complex', industry: 'Commercial' },
    { id: 7, name: 'Coastal Resort Group', industry: 'Hospitality' },
    { id: 8, name: 'Manufacturing Corp', industry: 'Industrial' },
    { id: 9, name: 'Heritage Trust', industry: 'Heritage' },
    { id: 10, name: 'Corporate Holdings', industry: 'Corporate' },
    { id: 11, name: 'Elite Developments', industry: 'Development' },
    { id: 12, name: 'Prime Estates', industry: 'Real Estate' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-10 lg:py-12 bg-gradient-to-br from-white via-gray-50 to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 rounded-full text-amber-800 text-xs font-medium mb-3">
            <Award size={14} className="text-amber-600" />
            <span>Trusted By Industry Leaders</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Our Valued <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Proud to serve South Africa's leading businesses across multiple industries
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-3 max-w-3xl mx-auto mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A67C00] to-[#A67C00] bg-clip-text text-transparent mb-1">
              5000+
            </div>
            <p className="text-xs text-gray-600 font-medium">Clients Served</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A67C00] to-[#A67C00] bg-clip-text text-transparent mb-1">
              15+
            </div>
            <p className="text-xs text-gray-600 font-medium">Industries</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#A67C00] to-[#A67C00] bg-clip-text text-transparent mb-1">
              98%
            </div>
            <p className="text-xs text-gray-600 font-medium">Satisfaction</p>
          </div>
        </div>

        {/* Continuous Scrolling Logo Container */}
        <div className="relative">
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll hover:pause-animation">
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 mx-3 w-56"
                >
                  <div className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-amber-400 h-28 flex flex-col items-center justify-center">
                    {/* Logo Placeholder - Replace with actual logos */}
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                      <Building2 size={24} className="text-amber-600" />
                    </div>
                    
                    {/* Client Name */}
                    <h3 className="text-sm font-bold text-gray-900 text-center mb-1 line-clamp-1">
                      {client.name}
                    </h3>
                    
                    {/* Industry Tag */}
                    <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full font-medium">
                      {client.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <Briefcase size={16} className="text-amber-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Enterprise Ready</p>
              <p className="text-xs text-gray-600">Trusted by Fortune 500</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Award size={16} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Award Winning</p>
              <p className="text-xs text-gray-600">Industry Recognition</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Building2 size={16} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Nationwide Service</p>
              <p className="text-xs text-gray-600">3 Strategic Locations</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-700 mb-3 text-base">
            Join our growing list of satisfied clients
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
          >
            Become a Client Today
          </a>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsLogoSlider;