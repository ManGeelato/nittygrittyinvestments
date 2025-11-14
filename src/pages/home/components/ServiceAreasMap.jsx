import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Building2, Navigation, ExternalLink, CheckCircle } from 'lucide-react';

const ServiceAreasMap = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      id: 0,
      name: "Head Office - Johannesburg",
      city: "Johannesburg",
      region: "Gauteng",
      address: "3 Linksfield Road, Dunvegan, Edenvale 1609",
      phone: ["011 524 6421", "011 524 6435"],
      email: ["info@nittygritty.co.za", "mike@nittygritty.co.za"],
      color: "from-[#A67C00] to-[#A67C00]",
      bgColor: "bg-amber-50",
      mapPosition: { top: "35%", left: "55%" },
      services: ["Architecture", "Gardening", "Cleaning"],
      featured: true
    },
    {
      id: 1,
      name: "KwaZulu-Natal Office",
      city: "Durban",
      region: "KwaZulu-Natal",
      address: "1 Devon Road, Pinetown, Durban 3610",
      phone: ["073 288 8935"],
      email: ["info@nittygritty.co.za"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      mapPosition: { top: "48%", left: "62%" },
      services: ["Architecture", "Gardening", "Cleaning"],
      featured: false
    },
    {
      id: 2,
      name: "Cape Town Office",
      city: "Cape Town",
      region: "Western Cape",
      address: "15 Suikerbos Street, Malmesbury 7300",
      phone: ["073 288 8935"],
      email: ["info@nittygritty.co.za"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      mapPosition: { top: "75%", left: "35%" },
      services: ["Architecture", "Gardening", "Cleaning"],
      featured: false
    }
  ];

  const businessHours = {
    weekdays: "Monday - Friday: 9AM to 5PM",
    saturday: "Saturday: 9AM to 1PM",
    sunday: "Sunday: Closed"
  };

  const currentLocation = locations[activeLocation];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217, 119, 6) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 rounded-full text-amber-800 text-xs font-medium mb-3">
            <MapPin size={14} className="text-amber-600" />
            <span>Our Locations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Serving South Africa's <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Major Cities</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
            Three strategic locations to serve you better across Gauteng, KwaZulu-Natal, and Western Cape
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-xl lg:rounded-2xl p-5 lg:p-6 shadow-lg relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-30"></div>

              {/* South Africa Map Illustration */}
              <div className="relative aspect-[4/5] bg-white rounded-xl shadow-md overflow-hidden">
                {/* Simplified SA Map Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 400 500" className="w-full h-full opacity-10">
                    <path d="M 100 50 L 350 50 L 380 150 L 370 250 L 340 350 L 280 450 L 120 450 L 50 350 L 60 150 Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>

                {/* Location Markers */}
                {locations.map((location, idx) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(idx)}
                    className="absolute group"
                    style={{
                      top: location.mapPosition.top,
                      left: location.mapPosition.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r ${location.color} opacity-30 animate-ping ${activeLocation === idx ? 'block' : 'hidden'}`}></div>
                    
                    {/* Marker */}
                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      activeLocation === idx 
                        ? `bg-gradient-to-r ${location.color} scale-110 ring-2 ring-white` 
                        : 'bg-white hover:scale-105'
                    }`}>
                      <MapPin 
                        className={activeLocation === idx ? 'text-white' : 'text-gray-700'} 
                        size={20} 
                        fill={activeLocation === idx ? 'currentColor' : 'none'}
                      />
                    </div>

                    {/* City Label */}
                    <div className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-full text-xs font-bold shadow-md transition-all duration-300 ${
                      activeLocation === idx 
                        ? `bg-gradient-to-r ${location.color} text-white scale-105` 
                        : 'bg-white text-gray-700 group-hover:scale-100'
                    }`}>
                      {location.city}
                    </div>
                  </button>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(245, 158, 11)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  <line x1="55%" y1="35%" x2="62%" y2="48%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4,4" />
                  <line x1="55%" y1="35%" x2="35%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {locations.map((location, idx) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(idx)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 text-xs ${
                      activeLocation === idx
                        ? `bg-gradient-to-r ${location.color} text-white shadow-md scale-105`
                        : 'bg-white text-gray-700 hover:shadow-sm'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${activeLocation === idx ? 'bg-white' : `bg-gradient-to-r ${location.color}`}`}></div>
                    <span className="font-medium">{location.city}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Header */}
              <div className={`bg-gradient-to-r ${currentLocation.color} p-5 lg:p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <MapPin size={96} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  {currentLocation.featured && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-2">
                      <Building2 size={12} />
                      <span>HEAD OFFICE</span>
                    </div>
                  )}
                  <h3 className="text-xl lg:text-2xl font-bold mb-1">{currentLocation.name}</h3>
                  <p className="text-white/90 text-xs">{currentLocation.region}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 lg:p-5 space-y-4">
                {/* Address */}
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${currentLocation.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <MapPin className={`bg-gradient-to-r ${currentLocation.color} bg-clip-text text-transparent`} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">{currentLocation.address}</p>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(currentLocation.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-xs font-medium mt-1 group"
                    >
                      <Navigation size={12} className="group-hover:rotate-45 transition-transform" />
                      Get Directions
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${currentLocation.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Phone className={`bg-gradient-to-r ${currentLocation.color} bg-clip-text text-transparent`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Phone</h4>
                    {currentLocation.phone.map((phone, idx) => (
                      <a 
                        key={idx}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="block text-gray-600 hover:text-amber-600 transition-colors text-sm"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${currentLocation.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Mail className={`bg-gradient-to-r ${currentLocation.color} bg-clip-text text-transparent`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Email</h4>
                    {currentLocation.email.map((email, idx) => (
                      <a 
                        key={idx}
                        href={`mailto:${email}`}
                        className="block text-gray-600 hover:text-amber-600 transition-colors text-sm break-all"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-3">
                  <div className={`w-10 h-10 ${currentLocation.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Clock className={`bg-gradient-to-r ${currentLocation.color} bg-clip-text text-transparent`} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1.5">Business Hours</h4>
                    <div className="space-y-0.5 text-xs">
                      <p className="text-gray-600">{businessHours.weekdays}</p>
                      <p className="text-gray-600">{businessHours.saturday}</p>
                      <p className="text-gray-500">{businessHours.sunday}</p>
                    </div>
                  </div>
                </div>

                {/* Services Available */}
                <div className={`${currentLocation.bgColor} rounded-lg p-4`}>
                  <h4 className="font-bold text-gray-900 text-sm mb-2 flex items-center gap-1.5">
                    <CheckCircle className={`bg-gradient-to-r ${currentLocation.color} bg-clip-text text-transparent`} size={16} />
                    Services Available
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentLocation.services.map((service, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`block w-full text-center px-4 py-2.5 bg-gradient-to-r ${currentLocation.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm`}
                >
                  Contact This Office
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#A67C00] to-[#A67C00] rounded-xl lg:rounded-2xl p-5 lg:p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
            <MapPin size={192} strokeWidth={1} />
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Comprehensive Coverage Across South Africa
            </h3>
            <p className="text-white/90 text-sm mb-4 max-w-3xl mx-auto">
              With offices strategically located in Johannesburg, Durban, and Cape Town, we're positioned to serve clients throughout South Africa's major metropolitan areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-1.5 text-sm">
                <CheckCircle size={16} />
                <span className="font-medium">Fast Response Times</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <CheckCircle size={16} />
                <span className="font-medium">Local Expertise</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm">
                <CheckCircle size={16} />
                <span className="font-medium">Nationwide Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasMap;