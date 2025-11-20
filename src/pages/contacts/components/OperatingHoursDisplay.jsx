import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Phone, Mail, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

const OperatingHoursDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const operatingHours = {
    regular: [
      { day: 'Monday', hours: '9:00 AM - 5:00 PM', open: true },
      { day: 'Tuesday', hours: '9:00 AM - 5:00 PM', open: true },
      { day: 'Wednesday', hours: '9:00 AM - 5:00 PM', open: true },
      { day: 'Thursday', hours: '9:00 AM - 5:00 PM', open: true },
      { day: 'Friday', hours: '9:00 AM - 5:00 PM', open: true },
      { day: 'Saturday', hours: '9:00 AM - 1:00 PM', open: true },
      { day: 'Sunday', hours: 'Closed', open: false }
    ],
    holiday: [
      { date: 'New Year\'s Day', day: 'January 1', hours: 'Closed' },
      { date: 'Human Rights Day', day: 'March 21', hours: 'Closed' },
      { date: 'Good Friday', day: 'Varies', hours: 'Closed' },
      { date: 'Family Day', day: 'Varies', hours: 'Closed' },
      { date: 'Freedom Day', day: 'April 27', hours: 'Closed' },
      { date: 'Workers\' Day', day: 'May 1', hours: 'Closed' },
      { date: 'Youth Day', day: 'June 16', hours: 'Closed' },
      { date: 'National Women\'s Day', day: 'August 9', hours: 'Closed' },
      { date: 'Heritage Day', day: 'September 24', hours: 'Closed' },
      { date: 'Day of Reconciliation', day: 'December 16', hours: 'Closed' },
      { date: 'Christmas Day', day: 'December 25', hours: 'Closed' },
      { date: 'Day of Goodwill', day: 'December 26', hours: 'Closed' }
    ]
  };

  const emergencyServices = {
    gardening: { available: true, phone: '067 199 2309', hours: '24/7' },
    cleaning: { available: true, phone: '067 199 2309', hours: '24/7' },
    architecture: { available: false, phone: '011 524 6421', hours: 'Next Business Day' }
  };

  // Update current time and check if open
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      checkIfOpen(now);
    }, 1000);

    checkIfOpen(currentTime);

    return () => clearInterval(timer);
  }, []);

  const checkIfOpen = (time) => {
    const day = time.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = time.getHours();
    const minutes = time.getMinutes();

    if (day === 0) { // Sunday
      setIsOpen(false);
      return;
    }

    if (day === 6) { // Saturday
      setIsOpen(hour >= 9 && hour < 13);
      return;
    }

    // Weekdays
    setIsOpen(hour >= 9 && hour < 17);
  };

  const getNextOpeningTime = () => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    if (day === 0) { // Sunday
      return 'Tomorrow at 9:00 AM';
    }

    if (day === 6 && hour >= 13) { // Saturday after 1 PM
      return 'Monday at 9:00 AM';
    }

    if (hour >= 17) { // After 5 PM on weekdays
      if (day === 5) { // Friday
        return 'Monday at 9:00 AM';
      }
      return 'Tomorrow at 9:00 AM';
    }

    return 'Today';
  };

  const getCurrentStatus = () => {
    if (!isOpen) {
      return {
        status: 'closed',
        message: `We're currently closed. We reopen ${getNextOpeningTime()}`,
        icon: <AlertCircle className="w-5 h-5" />,
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      };
    }

    return {
      status: 'open',
      message: 'We\'re currently open! Come visit us or give us a call.',
      icon: <CheckCircle className="w-5 h-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    };
  };

  const status = getCurrentStatus();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Operating Hours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your visit or call with our clear business hours. We're here to serve you across all three locations with consistent scheduling.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Status Card */}
            <div className="lg:col-span-3">
              <div className={`rounded-2xl border-2 ${status.borderColor} ${status.bgColor} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${status.bgColor}`}>
                      {status.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${status.color} mb-2`}>
                        {status.status === 'open' ? 'We\'re Open!' : 'We\'re Closed'}
                      </h3>
                      <p className="text-gray-700">{status.message}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{currentTime.toLocaleTimeString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{currentTime.toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-2">Next Opening:</div>
                    <div className="text-lg font-semibold text-gray-900">{getNextOpeningTime()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Hours */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Regular Hours</h3>
                    <p className="text-amber-100">Standard business hours</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {operatingHours.regular.map((day, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        day.open ? 'bg-amber-50 border border-amber-100' : 'bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <span className={`font-semibold ${day.open ? 'text-gray-900' : 'text-gray-500'}`}>
                        {day.day}
                      </span>
                      <span className={`font-medium ${day.open ? 'text-amber-700' : 'text-gray-500'}`}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Time Zone Note */}
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    All times are in South Africa Standard Time (SAST)
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Services */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Emergency Services</h3>
                    <p className="text-red-100">After-hours support</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {Object.entries(emergencyServices).map(([service, info]) => (
                    <div key={service} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900 capitalize">
                          {service} Services
                        </span>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          info.available 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {info.available ? 'Available' : 'Next Business Day'}
                        </span>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${info.phone}`} className="hover:text-amber-600 transition-colors">
                            {info.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{info.hours}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700 text-center">
                    Emergency services may include additional charges
                  </p>
                </div>
              </div>
            </div>

            {/* Holiday Schedule */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">Holiday Schedule</h3>
                    <p className="text-blue-100">Public holiday closures</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {operatingHours.holiday.map((holiday, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-lg bg-blue-50 border border-blue-100"
                    >
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          {holiday.date}
                        </span>
                        <span className="text-sm text-gray-600">
                          {holiday.day}
                        </span>
                      </div>
                      <span className="font-medium text-blue-700 whitespace-nowrap">
                        {holiday.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-700 text-center">
                    All South African public holidays observed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Phone Support</h4>
                <p className="text-gray-600 mb-3">Speak directly with our team</p>
                <a href="tel:0115246421" className="text-amber-600 font-semibold hover:text-amber-700">
                  011 524 6421
                </a>
              </div>

              <div>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Email Support</h4>
                <p className="text-gray-600 mb-3">24/7 email assistance</p>
                <a href="mailto:info@nittygritty.co.za" className="text-amber-600 font-semibold hover:text-amber-700">
                  info@nittygritty.co.za
                </a>
              </div>

              <div>
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600 mb-3">During business hours</p>
                <div className="text-amber-600 font-semibold">
                  1 Location
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Appointment
              </a>
              <a
                href="tel:0115246421"
                className="border-2 border-amber-500 text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingHoursDisplay;