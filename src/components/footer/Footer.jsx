import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter, Instagram, Youtube, ArrowRight, Building2, Leaf, Sparkles, Award, Shield, CheckCircle, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ];

  const services = [
    { name: 'Architectural Design', path: '/services/architecture', icon: Building2 },
    { name: 'Structural Engineering', path: '/services/architecture' },
    { name: 'Landscape Design', path: '/services/gardening', icon: Leaf },
    { name: 'Garden Maintenance', path: '/services/gardening' },
    { name: 'Commercial Cleaning', path: '/services/cleaning', icon: Sparkles },
    { name: 'Facility Management', path: '/services/cleaning' }
  ];

  const locations = [
    {
      name: 'Johannesburg Head Office',
      address: '3 Linksfield Road, Dunvegan, Edenvale 1609',
      phone: ['011 524 6421', '011 524 6435'],
      isHeadOffice: true
    },
    {
      name: 'KwaZulu-Natal Office',
      address: '1 Devon Road, Pinetown, Durban 3610',
      phone: ['073 288 8935']
    },
    {
      name: 'Cape Town Office',
      address: '15 Suikerbos Street, Malmesbury 7300',
      phone: ['073 288 8935']
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/nittygritty', color: 'hover:bg-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/nittygritty', color: 'hover:bg-blue-700' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/nittygritty', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/nittygritty', color: 'hover:bg-pink-600' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/nittygritty', color: 'hover:bg-red-600' }
  ];

  const certifications = [
    { icon: Award, text: 'ISO Certified' },
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: CheckCircle, text: 'LEED Accredited' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A67C00] to-[#A67C00] rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">NG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Nitty Gritty</h3>
                <p className="text-xs text-amber-400 tracking-wider">INVESTMENT COMPANY</p>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading South African investment company delivering excellence in Architecture, Gardening, and Cleaning services since 2000.
            </p>

            {/* Certifications */}
            <div className="space-y-3 mb-6">
              {certifications.map((cert, idx) => {
                const Icon = cert.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Icon size={16} className="text-amber-500" />
                    <span className="text-gray-400">{cert.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
              <div className="flex gap-2">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    <ArrowRight size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
              Get In Touch
            </h4>
            
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Email</p>
                  <a href="mailto:info@nittygritty.co.za" className="text-sm text-gray-400 hover:text-amber-400 transition-colors block">
                    info@nittygritty.co.za
                  </a>
                  <a href="mailto:mike@nittygritty.co.za" className="text-sm text-gray-400 hover:text-amber-400 transition-colors block">
                    mike@nittygritty.co.za
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Call Us</p>
                  <a href="tel:0115246421" className="text-sm text-gray-400 hover:text-amber-400 transition-colors block">
                    011 524 6421
                  </a>
                  <a href="tel:0115246435" className="text-sm text-gray-400 hover:text-amber-400 transition-colors block">
                    011 524 6435
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-amber-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Business Hours</p>
                  <p className="text-sm text-gray-400">Mon - Fri: 9AM - 5PM</p>
                  <p className="text-sm text-gray-400">Sat: 9AM - 1PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Bar */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-6 text-center">Our Locations</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 group">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} className="text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-white mb-1 flex items-center gap-2">
                      {location.name}
                      {location.isHeadOffice && (
                        <span className="text-xs px-2 py-0.5 bg-amber-500 text-white rounded-full">HQ</span>
                      )}
                    </h5>
                    <p className="text-sm text-gray-400 leading-relaxed mb-2">{location.address}</p>
                    <div className="space-y-1">
                      {location.phone.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-sm text-amber-400 hover:text-amber-300 transition-colors block"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Stay Updated</h4>
                <p className="text-amber-100">Subscribe to our newsletter for updates, tips, and exclusive offers.</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                  Subscribe
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Nitty Gritty Investment Company. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-gray-400 hover:text-amber-400 transition-colors">
                Terms & Conditions
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors">
                Sitemap
              </a>
              <a href="/disclaimer" className="text-gray-400 hover:text-amber-400 transition-colors">
                Disclaimer
              </a>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Designed by</span>
              <a href="#" className="text-amber-400 hover:text-amber-300 font-semibold text-sm flex items-center gap-1">
                Your Agency
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span>🔒 Secure & Confidential</span>
              <span>✓ Licensed & Insured</span>
              <span>⭐ 5-Star Rated</span>
              <span>🏆 Award Winning</span>
              <span>📞 24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <ArrowRight size={20} className="rotate-[-90deg]" />
      </button>
    </footer>
  );
};

export default Footer;