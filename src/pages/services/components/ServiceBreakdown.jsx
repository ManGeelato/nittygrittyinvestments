import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, Users, Award, CheckCircle, Star, Calendar } from 'lucide-react';

const ServiceBreakdown = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [activeCategory, setActiveCategory] = useState('architecture');

  const serviceCategories = {
    architecture: {
      name: 'Architectural Services',
      icon: '🏛️',
      color: 'from-amber-500 to-yellow-500',
      description: 'Comprehensive architectural solutions from concept to completion',
      subServices: [
        {
          id: 'conceptual-design',
          name: 'Conceptual Design & Planning',
          description: 'Transform your vision into actionable architectural plans with our innovative design process.',
          fullDescription: 'Our conceptual design service begins with understanding your vision, site analysis, and developing initial design concepts. We create schematic designs, 3D visualizations, and feasibility studies to ensure your project aligns with your goals, budget, and regulatory requirements.',
          features: [
            'Site Analysis & Feasibility Studies',
            'Concept Development & Schematic Design',
            '3D Modeling & Visualization',
            'Space Planning & Layout Optimization',
            'Building Code Compliance Analysis'
          ],
          duration: '2-4 weeks',
          team: 'Lead Architect + Design Team',
          deliverables: ['Concept Drawings', '3D Models', 'Feasibility Report', 'Cost Estimates'],
          image: '/images/services/architecture/conceptual-design.jpg'
        },
        {
          id: 'construction-docs',
          name: 'Construction Documentation',
          description: 'Detailed technical drawings and specifications for construction teams.',
          fullDescription: 'We produce comprehensive construction documents including detailed architectural drawings, specifications, and technical documentation. Our documents ensure clear communication between all stakeholders and compliance with building regulations and standards.',
          features: [
            'Detailed Architectural Drawings',
            'Technical Specifications',
            'Building Regulation Compliance',
            'Material Schedules',
            'Coordination with Consultants'
          ],
          duration: '4-8 weeks',
          team: 'Technical Team + CAD Specialists',
          deliverables: ['Construction Drawings', 'Specification Documents', 'Permit Documentation', 'Tender Packages'],
          image: '/images/services/architecture/construction-docs.jpg'
        },
        {
          id: 'project-management',
          name: 'Project Management',
          description: 'End-to-end project oversight ensuring quality and timely delivery.',
          fullDescription: 'Our project management service provides comprehensive oversight from project inception to completion. We coordinate with contractors, manage timelines, control budgets, and ensure quality standards are maintained throughout the construction process.',
          features: [
            'Contractor Coordination & Management',
            'Budget Control & Cost Management',
            'Timeline & Schedule Management',
            'Quality Assurance & Control',
            'Stakeholder Communication'
          ],
          duration: 'Project Duration',
          team: 'Project Manager + Site Supervisors',
          deliverables: ['Progress Reports', 'Budget Tracking', 'Quality Assurance Docs', 'Completion Certificates'],
          image: '/images/services/architecture/project-management.jpg'
        },
        {
          id: 'sustainable-design',
          name: 'Sustainable Architecture',
          description: 'Eco-friendly design solutions for sustainable building practices.',
          fullDescription: 'We specialize in sustainable architecture that minimizes environmental impact while maximizing energy efficiency and occupant comfort. Our designs incorporate green building principles, renewable energy integration, and sustainable material selection.',
          features: [
            'Green Building Certification (Green Star)',
            'Energy Efficiency Optimization',
            'Sustainable Material Selection',
            'Water Conservation Systems',
            'Passive Design Strategies'
          ],
          duration: 'Integrated with Design Process',
          team: 'Sustainability Specialist + Design Team',
          deliverables: ['Sustainability Report', 'Energy Analysis', 'Green Certification Docs', 'Eco-material Schedule'],
          image: '/images/services/architecture/sustainable-design.jpg'
        }
      ]
    },
    gardening: {
      name: 'Gardening Services',
      icon: '🌿',
      color: 'from-green-500 to-emerald-500',
      description: 'Professional landscaping and garden maintenance services',
      subServices: [
        {
          id: 'landscape-design',
          name: 'Landscape Design',
          description: 'Create beautiful, functional outdoor spaces with expert landscape planning.',
          fullDescription: 'Our landscape design service transforms outdoor areas into beautiful, functional spaces. We consider soil conditions, climate, and your preferences to create sustainable, low-maintenance landscapes that enhance property value and enjoyment.',
          features: [
            'Site Analysis & Soil Testing',
            'Master Planning & Concept Development',
            'Plant Selection & Placement',
            'Hardscape Design (Paths, Patios)',
            'Lighting & Irrigation Planning'
          ],
          duration: '2-3 weeks',
          team: 'Landscape Architect + Horticulturist',
          deliverables: ['Landscape Plans', 'Planting Schedules', 'Material Lists', 'Maintenance Guides'],
          image: '/images/services/gardening/landscape-design.jpg'
        },
        {
          id: 'garden-maintenance',
          name: 'Garden Maintenance',
          description: 'Regular upkeep to keep your garden looking pristine year-round.',
          fullDescription: 'Our comprehensive garden maintenance service ensures your outdoor spaces remain healthy and beautiful. We provide scheduled visits for pruning, weeding, fertilizing, and pest control, tailored to your garden\'s specific needs.',
          features: [
            'Regular Pruning & Trimming',
            'Weed Control & Soil Management',
            'Seasonal Planting & Bed Maintenance',
            'Pest & Disease Management',
            'Lawn Care & Turf Management'
          ],
          duration: 'Ongoing (Weekly/Monthly)',
          team: 'Garden Maintenance Crew',
          deliverables: ['Maintenance Schedule', 'Health Reports', 'Seasonal Recommendations', 'Service Records'],
          image: '/images/services/gardening/garden-maintenance.jpg'
        },
        {
          id: 'irrigation-systems',
          name: 'Irrigation Systems',
          description: 'Smart watering solutions for efficient garden maintenance.',
          fullDescription: 'We design and install efficient irrigation systems that conserve water while ensuring optimal plant health. Our systems include smart controllers, drip irrigation, and rainwater harvesting solutions tailored to your landscape.',
          features: [
            'Custom Irrigation System Design',
            'Smart Controller Installation',
            'Drip Irrigation Systems',
            'Rainwater Harvesting Integration',
            'System Maintenance & Winterization'
          ],
          duration: '1-2 weeks',
          team: 'Irrigation Specialist + Installation Team',
          deliverables: ['System Design Plans', 'Operation Manuals', 'Maintenance Schedule', 'Warranty Documentation'],
          image: '/images/services/gardening/irrigation-systems.jpg'
        }
      ]
    },
    cleaning: {
      name: 'Cleaning Services',
      icon: '✨',
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional cleaning solutions for commercial and residential properties',
      subServices: [
        {
          id: 'commercial-cleaning',
          name: 'Commercial Cleaning',
          description: 'Maintain professional environments with our commercial cleaning solutions.',
          fullDescription: 'Our commercial cleaning service provides comprehensive cleaning solutions for offices, retail spaces, and commercial buildings. We use eco-friendly products and advanced equipment to ensure hygienic, spotless environments that impress clients and employees.',
          features: [
            'Daily/Weekly Office Cleaning',
            'Floor Care & Maintenance',
            'Restroom Sanitization',
            'Window & Glass Cleaning',
            'Waste Management'
          ],
          duration: 'Scheduled (Daily/Weekly)',
          team: 'Commercial Cleaning Crew',
          deliverables: ['Cleaning Schedule', 'Quality Checklists', 'Supply Inventory', 'Service Reports'],
          image: '/images/services/cleaning/commercial-cleaning.jpg'
        },
        {
          id: 'residential-cleaning',
          name: 'Residential Cleaning',
          description: 'Thorough cleaning services to keep your home sparkling clean.',
          fullDescription: 'Our residential cleaning service provides detailed cleaning of homes and apartments. We focus on deep cleaning, organization, and creating healthy living environments using safe, eco-friendly cleaning products and methods.',
          features: [
            'Deep Cleaning & Spring Cleaning',
            'Regular Maintenance Cleaning',
            'Kitchen & Bathroom Sanitization',
            'Floor & Surface Care',
            'Eco-friendly Product Usage'
          ],
          duration: '2-6 hours per visit',
          team: 'Residential Cleaning Specialists',
          deliverables: ['Custom Cleaning Plans', 'Product Safety Sheets', 'Satisfaction Guarantees', 'Flexible Scheduling'],
          image: '/images/services/cleaning/residential-cleaning.jpg'
        },
        {
          id: 'specialized-cleaning',
          name: 'Specialized Cleaning',
          description: 'Targeted cleaning solutions for specific needs and situations.',
          fullDescription: 'We offer specialized cleaning services for unique requirements including post-construction cleanup, move-in/move-out cleaning, and event cleanup. Our teams are trained to handle special situations with care and efficiency.',
          features: [
            'Post-Construction Cleanup',
            'Move-In/Move-Out Cleaning',
            'Event Cleanup Services',
            'Carpet & Upholstery Cleaning',
            'High-Level & Hard-to-Reach Cleaning'
          ],
          duration: 'Varies by project',
          team: 'Specialized Cleaning Crew',
          deliverables: ['Project-specific Plans', 'Safety Documentation', 'Completion Certificates', 'Follow-up Services'],
          image: '/images/services/cleaning/specialized-cleaning.jpg'
        }
      ]
    }
  };

  const toggleSection = (serviceId) => {
    setExpandedSections(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const currentCategory = serviceCategories[activeCategory];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Detailed <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Service Breakdown</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of sub-services within each category. 
            Click on any service to see detailed information, features, and deliverables.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-1 flex flex-wrap justify-center gap-1">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-sm transform -translate-y-0.5`
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-base">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Header */}
        <div className="text-center mb-6">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentCategory.color} text-white px-4 py-2 rounded-full shadow-md mb-3`}>
            <span className="text-xl">{currentCategory.icon}</span>
            <h3 className="text-xl font-bold">{currentCategory.name}</h3>
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Service Breakdown */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentCategory.subServices.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Service Header - Always Visible */}
              <button
                onClick={() => toggleSection(service.id)}
                className="w-full text-left p-4 lg:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-bold text-base">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{service.name}</h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                    
                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-3 mt-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {service.duration}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Users className="w-3 h-3" />
                        {service.team}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-3">
                  {expandedSections[service.id] ? (
                    <ChevronUp className="w-5 h-5 text-amber-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Expandable Content */}
              {expandedSections[service.id] && (
                <div className="px-4 lg:px-6 pb-4 lg:pb-6 border-t border-gray-100">
                  <div className="pt-4 grid lg:grid-cols-2 gap-6">
                    {/* Left Column - Details */}
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-2">Service Overview</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">{service.fullDescription}</p>
                      </div>

                      <div>
                        <h5 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-amber-500" />
                          Key Features
                        </h5>
                        <div className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Additional Info */}
                    <div className="space-y-4">
                      <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500" />
                          Deliverables
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {service.deliverables.map((deliverable, delIndex) => (
                            <span 
                              key={delIndex}
                              className="px-2 py-1 bg-white text-amber-700 text-xs rounded-full border border-amber-200"
                            >
                              {deliverable}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg p-3 text-white">
                        <h5 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                          <Star className="w-4 h-4" />
                          Why Choose This Service?
                        </h5>
                        <ul className="space-y-1 text-amber-100 text-sm">
                          <li className="flex items-center gap-2">
                            <Check className="w-3 h-3" />
                            Professional expertise and quality assurance
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3 h-3" />
                            Tailored solutions for your specific needs
                          </li>
                          <li className="flex items-center gap-2">
                            <Check className="w-3 h-3" />
                            Comprehensive support throughout the process
                          </li>
                        </ul>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                        Get Quote for {service.name}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Check icon component
const Check = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default ServiceBreakdown;