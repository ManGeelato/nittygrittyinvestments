import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { 
      name: 'SERVICES', 
      path: '/services',
      dropdown: [
        { name: 'Architectural Services', path: '/services/architecture' },
        { name: 'Gardening Services', path: '/services/gardening' },
        { name: 'Cleaning Services', path: '/services/cleaning' }
      ]
    },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };



  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block bg-[#A67C00] text-white text-xs">
        <div className="max-w-7xl mx-auto px-3 py-1.5 flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5">
              <Phone size={12} />
              <span>011 524 6421</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={12} />
              <span>info@nittygritty.co.za</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>Johannesburg</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-3">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center gap-2"
                onClick={() => setActiveDropdown(null)}
              >
                {/* <div className="w-10 h-10 bg-gradient-to-br from-[#A67C00] to-[#A67C00] rounded-lg flex items-center justify-center shadow-md">
                </div> */}
                <div className="flex flex-col">
                  <img 
                    src="/d7d831cb-7271-4c3a-a7a2-abe75ecb44d2_removalai_preview.png" 
                    alt="Nitty Gritty" 
                    className="h-14 w-auto"
                  />
                  
                  {/* <span className="text-xs text-gray-600 tracking-wider">
                    INVESTMENTS
                  </span> */}
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div 
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-0.5 font-medium transition-colors duration-200 py-1.5 text-sm ${
                      isActiveLink(link.path) 
                        ? 'text-amber-600' 
                        : 'text-gray-700 hover:text-amber-600'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="mt-0.5" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-3 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavigation('/contact')}
                className="px-4 py-2 bg-gradient-to-r  from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-3 py-2 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`block w-full text-left px-3 py-2 rounded-lg font-medium transition-colors text-sm ${
                      isActiveLink(link.path)
                        ? 'bg-amber-50 text-amber-600'
                        : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                    }`}
                  >
                    {link.name}
                  </button>
                  {link.dropdown && (
                    <div className="pl-3 space-y-0.5 mt-0.5">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigation(item.path)}
                          className="block w-full text-left px-3 py-1.5 text-xs text-gray-600 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-2 mt-2 border-t border-gray-200 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-gray-600 px-3">
                  <Phone size={14} className="text-amber-600" />
                  <span>011 524 6421</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-600 px-3">
                  <Mail size={14} className="text-amber-600" />
                  <span>info@nittygritty.co.za</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <div className="pt-2">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md text-sm"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;