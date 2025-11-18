import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Phone, Mail, Car, Clock, Users } from 'lucide-react';

const InteractiveMap = () => {
  const [activeOffice, setActiveOffice] = useState('johannesburg');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const officeLocations = {
    johannesburg: {
      id: 'johannesburg',
      city: 'Johannesburg',
      title: 'Head Office',
      address: '3 Linksfield Road Dunvegan, Edenvale 1609',
      coordinates: { lat: -26.1331, lng: 28.1589 },
      contact: {
        phones: ['011 524 6421', '011 524 6435'],
        emails: ['info@nittygritty.co.za', 'mike@nittygritty.co.za'],
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
      },
      team: '15+ Team Members',
      manager: 'Michael Fakude',
      color: 'amber',
      mapZoom: 12
    },
    durban: {
      id: 'durban',
      city: 'KwaZulu Natal',
      title: 'Regional Office',
      address: '1 Devon Road, Pinetown, Durban 3610',
      coordinates: { lat: -29.9031, lng: 30.8829 },
      contact: {
        phones: ['067 199 2309'],
        emails: ['info@nittygritty.co.za', 'kzn@nittygritty.co.za'],
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
      },
      team: '8+ Team Members',
      manager: 'Sarah Johnson',
      color: 'green',
      mapZoom: 12
    },
    capeTown: {
      id: 'capeTown',
      city: 'Cape Town',
      title: 'Regional Office',
      address: '15 Suikerbos Street, Malmesbury 7300, Western Cape',
      coordinates: { lat: -33.4603, lng: 18.7279 },
      contact: {
        phones: ['067 199 2309'],
        emails: ['info@nittygritty.co.za', 'capetown@nittygritty.co.za'],
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
      },
      team: '6+ Team Members',
      manager: 'David Chen',
      color: 'blue',
      mapZoom: 12
    }
  };

  const currentOffice = officeLocations[activeOffice];

  // Initialize map when component mounts
  useEffect(() => {
    const loadMap = () => {
      setIsMapLoaded(true);
      // In a real implementation, you would initialize your map library here
      // For example: Google Maps, Mapbox, Leaflet, etc.
    };

    // Simulate map loading
    const timer = setTimeout(loadMap, 1000);
    return () => clearTimeout(timer);
  }, []);

  const getMapEmbedUrl = (office) => {
    const { coordinates, city } = office;
    const baseUrl = 'https://www.google.com/maps/embed/v1/place';
    const key = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with actual API key
    const q = encodeURIComponent(office.address);
    
    return `${baseUrl}?key=${key}&q=${q}&center=${coordinates.lat},${coordinates.lng}&zoom=${office.mapZoom}`;
  };

  const getStaticMapUrl = (office) => {
    const { coordinates, city } = office;
    // Fallback static map image URL
    return `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=13&size=600x300&markers=color:red%7C${coordinates.lat},${coordinates.lng}&key=YOUR_API_KEY`;
  };

  const getColorClasses = (color) => {
    const colorMap = {
      amber: {
        bg: 'bg-amber-500',
        gradient: 'from-amber-500 to-yellow-500',
        text: 'text-amber-600',
        border: 'border-amber-200',
        light: 'bg-amber-50'
      },
      green: {
        bg: 'bg-green-500',
        gradient: 'from-green-500 to-emerald-500',
        text: 'text-green-600',
        border: 'border-green-200',
        light: 'bg-green-50'
      },
      blue: {
        bg: 'bg-blue-500',
        gradient: 'from-blue-500 to-cyan-500',
        text: 'text-blue-600',
        border: 'border-blue-200',
        light: 'bg-blue-50'
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  const colors = getColorClasses(currentOffice.color);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Offices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at any of our strategically located offices across South Africa. 
            Each location is equipped to provide exceptional service and expert consultations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Map Container */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* Map Header */}
            <div className={`bg-gradient-to-r ${colors.gradient} p-4 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{currentOffice.city} Office</h3>
                  <p className="text-amber-100">{currentOffice.title}</p>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Map Display */}
            <div className="h-96 bg-gray-100 relative">
              {!isMapLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Interactive Map Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-12 h-12 mx-auto mb-3 text-amber-500" />
                      <p className="font-semibold">Interactive Map</p>
                      <p className="text-sm">Google Maps Integration</p>
                      <p className="text-xs mt-2">{currentOffice.address}</p>
                    </div>
                    
                    {/* Map Marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-8 h-8 ${colors.bg} rounded-full border-4 border-white shadow-lg animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Map Controls Overlay */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      +
                    </button>
                    <button className="bg-white px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      -
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Map Footer */}
            <div className="bg-white p-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  <span>Ample parking available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Open today until 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Information & Controls */}
          <div className="space-y-6">
            {/* Office Selector */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Select Office</h3>
              <div className="grid grid-cols-3 gap-2">
                {Object.values(officeLocations).map((office) => (
                  <button
                    key={office.id}
                    onClick={() => setActiveOffice(office.id)}
                    className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      activeOffice === office.id
                        ? `${getColorClasses(office.color).border} ${getColorClasses(office.color).light} transform -translate-y-1 shadow-md`
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-3 h-3 ${getColorClasses(office.color).bg} rounded-full mx-auto mb-2`}></div>
                    <div className="text-sm font-semibold text-gray-800">{office.city}</div>
                    <div className="text-xs text-gray-500">{office.title}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Office Details */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Office Header */}
              <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentOffice.city}</h3>
                    <p className="text-amber-100">{currentOffice.title}</p>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 space-y-6">
                {/* Address */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    Address
                  </h4>
                  <p className="text-gray-600">{currentOffice.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(currentOffice.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold text-sm mt-2"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      Phone
                    </h4>
                    <div className="space-y-1">
                      {currentOffice.contact.phones.map((phone, index) => (
                        <a
                          key={index}
                          href={`tel:${phone}`}
                          className="block text-gray-600 hover:text-amber-600 transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      Email
                    </h4>
                    <div className="space-y-1">
                      {currentOffice.contact.emails.map((email, index) => (
                        <a
                          key={index}
                          href={`mailto:${email}`}
                          className="block text-gray-600 hover:text-amber-600 transition-colors truncate"
                        >
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hours & Team */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      Operating Hours
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span className="font-medium">{currentOffice.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">{currentOffice.hours.saturday}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      Our Team
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>{currentOffice.team}</div>
                      <div>Manager: {currentOffice.manager}</div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${currentOffice.contact.phones[0]}`}
                    className="flex-1 bg-amber-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-amber-600 transition-colors"
                  >
                    Call Office
                  </a>
                  <a
                    href={`mailto:${currentOffice.contact.emails[0]}`}
                    className="flex-1 border border-amber-500 text-amber-600 py-3 rounded-lg font-semibold text-center hover:bg-amber-50 transition-colors"
                  >
                    Email Office
                  </a>
                </div>
              </div>
            </div>

            {/* National Coverage */}
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Nationwide Coverage</h3>
              <p className="text-amber-100 mb-4">
                With offices in Johannesburg, Durban, and Cape Town, we serve clients across South Africa with the same high-quality standards.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-amber-100 text-sm">Major Cities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-amber-100 text-sm">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-amber-100 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;