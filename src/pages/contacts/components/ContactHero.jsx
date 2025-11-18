import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';

const ContactHero = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      description: 'Speak directly with our team',
      details: ['011 524 6421', '011 524 6435', '067 199 2309'],
      action: 'tel:0115246421',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      description: 'Send us your inquiries',
      details: ['info@nittygritty.co.za', 'mike@nittygritty.co.za'],
      action: 'mailto:info@nittygritty.co.za',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      description: 'Our office locations',
      details: ['Johannesburg • Durban • Cape Town'],
      action: '#locations',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: 'Live Chat',
      description: 'Instant online support',
      details: ['Mon-Fri: 8AM-6PM', 'Sat: 9AM-1PM'],
      action: '#chat',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Main Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-amber-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-2xl animate-bounce delay-1000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-6 h-6 border-2 border-amber-400 opacity-30 transform rotate-45"></div>
        <div className="absolute bottom-24 left-24 w-5 h-5 bg-yellow-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-10 h-10 border border-amber-300 opacity-25 transform rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-1 bg-white bg-opacity-10 backdrop-blur-sm px-3 py-1 rounded-full border border-amber-500 border-opacity-30">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-amber-300">We're Here to Help</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Let's Start
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Your Project
              </span>
              Together
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Ready to transform your property? Get in touch with Nitty Gritty today. 
              Our expert team is ready to discuss your project and provide personalized solutions 
              that exceed your expectations.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 py-3">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-amber-400 mb-0.5">98%</div>
                <div className="text-xs text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-amber-400 mb-0.5">24h</div>
                <div className="text-xs text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-amber-400 mb-0.5">500+</div>
                <div className="text-xs text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-amber-400 mb-0.5">15+</div>
                <div className="text-xs text-gray-300">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href="#contact-form"
                className="group bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
              </a>
              
              <a
                href="tel:0115246421"
                className="group border border-amber-500 text-amber-400 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-500 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Content - Contact Methods */}
          <div className="relative">
            {/* Main Contact Card */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-white border-opacity-20 p-6 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1">Get In Touch</h3>
                <p className="text-amber-100 text-sm">Multiple ways to reach us</p>
              </div>

              {/* Contact Methods Grid */}
              <div className="grid gap-4 mb-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="group bg-white bg-opacity-5 border border-white border-opacity-10 rounded-lg p-4 hover:bg-opacity-10 hover:border-amber-500 hover:border-opacity-30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-white mb-0.5">{method.title}</h4>
                        <p className="text-amber-100 text-xs mb-1">{method.description}</p>
                        <div className="space-y-0.5">
                          {method.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="text-gray-300 text-xs">
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0.5 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg p-4 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-semibold text-base">Operating Hours</h4>
                </div>
                <div className="space-y-1">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-amber-100 text-xs">{schedule.day}</span>
                      <span className={`font-semibold text-xs ${schedule.day === 'Sunday' ? 'text-amber-200' : 'text-white'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full opacity-30 animate-bounce delay-500"></div>
            
            {/* Contact Visualization */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-10 blur-lg"></div>
              
              {/* Rotating Contact Icons */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Phone className="w-5 h-5 text-amber-300" />
              </div>
              <div className="absolute top-1/2 right-0 transform translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Mail className="w-5 h-5 text-amber-300" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-amber-300" />
              </div>
              <div className="absolute top-1/2 left-0 transform translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 text-amber-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-amber-400 animate-bounce">
            <span className="text-xs font-semibold mb-1">Get in Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;