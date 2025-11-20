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
        emergency: '067 199 2309'
      },
      hours: {
        weekdays: '9:00 AM - 5:00 PM',
        saturday: '9:00 AM - 1:00 PM',
        sunday: 'Closed'
      },
      team: {
        size: '15+ Team Members',
        manager: 'Michael Fakude',
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
        phones: ['067 199 2309'],
        emails: ['info@nittygritty.co.za', 'kzn@nittygritty.co.za'],
        emergency: '067 199 2309'
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
        phones: ['067 199 2309'],
        emails: ['info@nittygritty.co.za', 'capetown@nittygritty.co.za'],
        emergency: '067 199 2309'
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
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 place-items-center">
            {officeLocations
              .filter((office) => office.id === "johannesburg")
              .map((office) => (
                <div 
                  key={office.id}
                  className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 max-w-2xl w-full"
                >
                  {/* Office Header with Image */}
                  <div className="relative">
                    {/* Image Placeholder */}
                    <div className={`h-48 bg-gradient-to-br ${
                      office.id === 'johannesburg' ? 'from-amber-100 to-yellow-200' :
                      'from-blue-100 to-cyan-200'
                    } relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 mx-auto mb-2 text-amber-600" />
                          <p className="font-semibold text-gray-700 text-sm">Our {office.city} Head Office</p>
                          {/* <p className="text-xs text-gray-600">Professional Service Image</p> */}
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500 text-white">
                          {office.badge}
                        </span>
                      </div>
                    </div>

                    {/* Office Title */}
                    {/* <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{office.city}</h3>
                      <p className="text-amber-100 font-semibold drop-shadow-md text-sm">{office.title}</p>
                    </div> */}
                  </div>

                  {/* Office Content */}
                  <div className="p-6">
                    {/* Address */}
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 mt-0.5 text-amber-500" />
                      <div>
                        <p className="text-gray-700 font-medium text-sm">Address</p>
                        <p className="text-gray-600 text-sm">{office.address}</p>
                      </div>
                    </div>

                    {/* Phones */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 mt-0.5 text-amber-500" />
                        <div>
                          <p className="text-gray-700 font-medium text-sm">Phone</p>
                          <div className="space-y-1">
                            {office.contact.phones.map((phone, i) => (
                              <a 
                                key={i}
                                href={`tel:${phone}`}
                                className="block text-gray-600 text-sm hover:text-amber-600"
                              >
                                {phone}
                              </a>
                            ))}
                            <div className="flex items-center gap-1 mt-1">
                              <span className="text-sm text-gray-500">Emergency:</span>
                              <a 
                                href={`tel:${office.contact.emergency}`}
                                className="text-sm text-red-600 font-semibold"
                              >
                                {office.contact.emergency}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Emails */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 mt-0.5 text-amber-500" />
                        <div>
                          <p className="text-gray-700 font-medium text-sm">Email</p>
                          <div className="space-y-1">
                            {office.contact.emails.map((email, i) => (
                              <a 
                                key={i}
                                href={`mailto:${email}`}
                                className="block text-gray-600 text-sm hover:text-amber-600 truncate"
                              >
                                {email}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-gray-700">Operating Hours</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Mon - Fri:</span>
                          <span>{office.hours.weekdays}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>{office.hours.saturday}</span>
                        </div>
                        <div className="flex justify-between text-gray-400">
                          <span>Sunday:</span>
                          <span>{office.hours.sunday}</span>
                        </div>
                      </div>
                    </div>

                    {/* Team */}
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-amber-500" />
                        <span className="text-sm font-semibold text-gray-700">Our Team</span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div>{office.team.size}</div>
                        <div>Manager: {office.team.manager}</div>
                        <div className="text-gray-500">Specialties: {office.team.specialties.join(', ')}</div>
                      </div>
                    </div>

                    {/* Amenities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Office Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {office.amenities.map((a, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="text-amber-500">
                              {a.icon}
                            </div>
                            {a.text}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Services</h4>
                      <div className="space-y-1">
                        {office.services.map((service, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <a
                        href={`https://maps.google.com/?q=${office.address}`}
                        target="_blank"
                        className="flex-1 text-center py-2 text-sm font-semibold rounded bg-amber-500 text-white hover:bg-amber-600"
                      >
                        Get Directions
                      </a>
                      <a
                        href={`tel:${office.contact.phones[0]}`}
                        className="flex-1 text-center py-2 text-sm font-semibold border border-gray-300 text-gray-700 rounded"
                      >
                        Call Office
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
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