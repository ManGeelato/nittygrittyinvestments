import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Car, Train, Wifi, Coffee } from 'lucide-react';

const MultiLocationCards = () => {
  const officeLocations = [
    {
      id: 'johannesburg',
      city: 'Johannesburg',
      title: 'Head Office',
      address: '3 Linksfield Road Dunvegan, Edenvale 1609',
      coordinates: { lat: -26.1331, lng: 28.1589 },
      contact: {
        phones: ['011 524 6421', '011 524 6435'],
        emails: ['info@nittygritty.co.za', 'mike@nittygritty.co.za'],
        emergency: '073 288 8935'
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      team: {
        size: '15+ Team Members',
        manager: 'Mike Grundy',
        specialties: ['Architecture', 'Corporate Services']
      },
      amenities: [
        { icon: <Car className="w-3 h-3" />, text: 'Ample Parking' },
        { icon: <Train className="w-3 h-3" />, text: 'Near Highway' },
        { icon: <Wifi className="w-3 h-3" />, text: 'Free WiFi' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Client Lounge' }
      ],
      services: ['Full Architectural Services', 'Project Management', 'Client Consultations'],
      image: '/images/locations/johannesburg-office.jpg',
      color: 'from-amber-500 to-yellow-500',
      badge: 'Primary Office'
    },
    {
      id: 'durban',
      city: 'KwaZulu Natal',
      title: 'Regional Office',
      address: '1 Devon Road, Pinetown, Durban 3610',
      coordinates: { lat: -29.9031, lng: 30.8829 },
      contact: {
        phones: ['073 288 8935'],
        emails: ['info@nittygritty.co.za', 'kzn@nittygritty.co.za'],
        emergency: '073 288 8935'
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      team: {
        size: '8+ Team Members',
        manager: 'Sarah Johnson',
        specialties: ['Gardening Services', 'Coastal Projects']
      },
      amenities: [
        { icon: <Car className="w-3 h-3" />, text: 'Secure Parking' },
        { icon: <Train className="w-3 h-3" />, text: 'Central Location' },
        { icon: <Wifi className="w-3 h-3" />, text: 'Meeting Rooms' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Garden View' }
      ],
      services: ['Gardening & Landscaping', 'Coastal Architecture', 'Maintenance Services'],
      image: '/images/locations/durban-office.jpg',
      color: 'from-green-500 to-emerald-500',
      badge: 'Coastal Hub'
    },
    {
      id: 'cape-town',
      city: 'Cape Town',
      title: 'Regional Office',
      address: '15 Suikerbos Street, Malmesbury 7300, Western Cape',
      coordinates: { lat: -33.4603, lng: 18.7279 },
      contact: {
        phones: ['073 288 8935'],
        emails: ['info@nittygritty.co.za', 'capetown@nittygritty.co.za'],
        emergency: '073 288 8935'
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      team: {
        size: '6+ Team Members',
        manager: 'David Chen',
        specialties: ['Sustainable Design', 'Wine Estate Projects']
      },
      amenities: [
        { icon: <Car className="w-3 h-3" />, text: 'Visitor Parking' },
        { icon: <Train className="w-3 h-3" />, text: 'Easy Access' },
        { icon: <Wifi className="w-3 h-3" />, text: 'Video Conferencing' },
        { icon: <Coffee className="w-3 h-3" />, text: 'Mountain View' }
      ],
      services: ['Sustainable Architecture', 'Vineyard Landscaping', 'Commercial Cleaning'],
      image: '/images/locations/cape-town-office.jpg',
      color: 'from-blue-500 to-cyan-500',
      badge: 'Western Cape Base'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Office Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategically located across South Africa to serve you better. 
            Visit any of our offices for personalized service and expert consultations.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeLocations.map((office, index) => (
            <div 
              key={office.id}
              className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              {/* Office Header with Image */}
              <div className="relative">
                {/* Image Placeholder */}
                <div className={`h-40 bg-gradient-to-br ${
                  office.id === 'johannesburg' ? 'from-amber-100 to-yellow-200' :
                  office.id === 'durban' ? 'from-green-100 to-emerald-200' :
                  'from-blue-100 to-cyan-200'
                } relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className={`w-10 h-10 mx-auto mb-2 ${
                        office.id === 'johannesburg' ? 'text-amber-600' :
                        office.id === 'durban' ? 'text-green-600' :
                        'text-blue-600'
                      }`} />
                      <p className="font-semibold text-gray-700 text-sm">{office.city} Office</p>
                      <p className="text-xs text-gray-600">Professional Service Image</p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                      office.id === 'johannesburg' ? 'bg-amber-500 text-white' :
                      office.id === 'durban' ? 'bg-green-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {office.badge}
                    </span>
                  </div>
                </div>

                {/* Office Title */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">{office.city}</h3>
                  <p className="text-amber-100 font-semibold drop-shadow-md text-sm">{office.title}</p>
                </div>
              </div>

              {/* Office Content */}
              <div className="p-4">
                {/* Address */}
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    office.id === 'johannesburg' ? 'text-amber-500' :
                    office.id === 'durban' ? 'text-green-500' :
                    'text-blue-500'
                  }`} />
                  <div>
                    <p className="text-gray-700 font-medium text-xs">Address</p>
                    <p className="text-gray-600 text-xs">{office.address}</p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-2 mb-3">
                  {/* Phone Numbers */}
                  <div className="flex items-start gap-2">
                    <Phone className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                      office.id === 'johannesburg' ? 'text-amber-500' :
                      office.id === 'durban' ? 'text-green-500' :
                      'text-blue-500'
                    }`} />
                    <div>
                      <p className="text-gray-700 font-medium text-xs">Phone</p>
                      <div className="space-y-0.5">
                        {office.contact.phones.map((phone, phoneIndex) => (
                          <a 
                            key={phoneIndex}
                            href={`tel:${phone}`}
                            className="block text-gray-600 text-xs hover:text-amber-600 transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                        <div className="flex items-center gap-1 mt-0.5">
                          <span className="text-xs text-gray-500">Emergency:</span>
                          <a 
                            href={`tel:${office.contact.emergency}`}
                            className="text-xs text-red-600 hover:text-red-700 font-semibold"
                          >
                            {office.contact.emergency}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div className="flex items-start gap-2">
                    <Mail className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                      office.id === 'johannesburg' ? 'text-amber-500' :
                      office.id === 'durban' ? 'text-green-500' :
                      'text-blue-500'
                    }`} />
                    <div>
                      <p className="text-gray-700 font-medium text-xs">Email</p>
                      <div className="space-y-0.5">
                        {office.contact.emails.map((email, emailIndex) => (
                          <a 
                            key={emailIndex}
                            href={`mailto:${email}`}
                            className="block text-gray-600 text-xs hover:text-amber-600 transition-colors truncate"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <Clock className={`w-3 h-3 ${
                      office.id === 'johannesburg' ? 'text-amber-500' :
                      office.id === 'durban' ? 'text-green-500' :
                      'text-blue-500'
                    }`} />
                    <span className="text-xs font-semibold text-gray-700">Operating Hours</span>
                  </div>
                  <div className="space-y-0.5 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span className="font-medium">{office.hours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">{office.hours.saturday}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Sunday:</span>
                      <span className="font-medium">{office.hours.sunday}</span>
                    </div>
                  </div>
                </div>

                {/* Team Information */}
                <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-1 mb-1">
                    <Users className={`w-3 h-3 ${
                      office.id === 'johannesburg' ? 'text-amber-500' :
                      office.id === 'durban' ? 'text-green-500' :
                      'text-blue-500'
                    }`} />
                    <span className="text-xs font-semibold text-gray-700">Our Team</span>
                  </div>
                  <div className="space-y-0.5 text-xs text-gray-600">
                    <div>{office.team.size}</div>
                    <div>Manager: {office.team.manager}</div>
                    <div className="text-gray-500">Specialties: {office.team.specialties.join(', ')}</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-700 mb-1">Office Amenities</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {office.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center gap-1 text-xs text-gray-600">
                        <div className={`${
                          office.id === 'johannesburg' ? 'text-amber-500' :
                          office.id === 'durban' ? 'text-green-500' :
                          'text-blue-500'
                        }`}>
                          {amenity.icon}
                        </div>
                        {amenity.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-700 mb-1">Key Services</h4>
                  <div className="space-y-0.5">
                    {office.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-1 text-xs text-gray-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          office.id === 'johannesburg' ? 'bg-amber-500' :
                          office.id === 'durban' ? 'bg-green-500' :
                          'bg-blue-500'
                        }`}></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1 pt-3 border-t border-gray-100">
                  <a
                    href={`https://maps.google.com/?q=${office.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center py-1.5 px-2 text-xs font-semibold rounded transition-all duration-300 ${
                      office.id === 'johannesburg' ? 
                      'bg-amber-500 text-white hover:bg-amber-600' :
                      office.id === 'durban' ? 
                      'bg-green-500 text-white hover:bg-green-600' :
                      'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${office.contact.phones[0]}`}
                    className="flex-1 text-center py-1.5 px-2 text-xs font-semibold border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-all duration-300"
                  >
                    Call Office
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-100">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Not Sure Which Office to Contact?</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl mx-auto">
              Our central team will direct you to the right office based on your location and project requirements. 
              Start with our head office for general inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:0115246421"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Call Head Office
              </a>
              <a
                href="mailto:info@nittygritty.co.za"
                className="border border-amber-500 text-amber-700 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-50 transition-all duration-300"
              >
                Email Central Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiLocationCards;