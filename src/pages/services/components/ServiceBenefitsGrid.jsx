import React from 'react';
import { 
  DollarSign, Clock, Shield, Zap, Users, Award, 
  Heart, TrendingUp, Recycle, Star, CheckCircle, 
  Building, Leaf, Sparkles, Target, Calendar 
} from 'lucide-react';

const ServiceBenefitsGrid = () => {
  const serviceBenefits = {
    architecture: {
      name: 'Architectural Services',
      icon: <Building className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500',
      description: 'Transform your vision into exceptional spaces with our comprehensive architectural solutions',
      benefits: [
        {
          icon: <DollarSign className="w-5 h-5" />,
          title: 'Cost Efficiency',
          description: 'Optimized designs that maximize your budget while delivering premium quality and value',
          features: ['Budget Optimization', 'Value Engineering', 'Cost Control', 'ROI Maximization']
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: 'Expert Design',
          description: 'Innovative architectural solutions backed by 15+ years of professional experience',
          features: ['Creative Innovation', 'Technical Expertise', 'Industry Standards', 'Aesthetic Excellence']
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Quality Assurance',
          description: 'Rigorous quality control processes ensuring exceptional craftsmanship and durability',
          features: ['Quality Control', 'Material Standards', 'Workmanship Guarantee', 'Long-term Durability']
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: 'Property Value',
          description: 'Strategic designs that significantly enhance property value and market appeal',
          features: ['Value Enhancement', 'Market Appeal', 'Investment Growth', 'Competitive Advantage']
        },
        {
          icon: <Recycle className="w-5 h-5" />,
          title: 'Sustainable Solutions',
          description: 'Eco-friendly designs incorporating sustainable materials and energy-efficient systems',
          features: ['Green Building', 'Energy Efficiency', 'Sustainable Materials', 'Environmental Care']
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Efficient Process',
          description: 'Streamlined project management ensuring timely delivery and smooth execution',
          features: ['Timely Delivery', 'Process Efficiency', 'Minimal Disruption', 'Clear Communication']
        }
      ],
      stats: [
        { value: '98%', label: 'Client Satisfaction' },
        { value: '200+', label: 'Projects Completed' },
        { value: '15+', label: 'Years Experience' },
        { value: 'R2.5M+', label: 'Average Value Added' }
      ]
    },
    gardening: {
      name: 'Gardening Services',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Create and maintain beautiful, sustainable outdoor environments that enhance your property',
      benefits: [
        {
          icon: <Heart className="w-5 h-5" />,
          title: 'Enhanced Curb Appeal',
          description: 'Beautiful landscapes that create stunning first impressions and boost property attractiveness',
          features: ['Visual Appeal', 'First Impressions', 'Aesthetic Beauty', 'Property Charm']
        },
        {
          icon: <Recycle className="w-5 h-5" />,
          title: 'Environmental Benefits',
          description: 'Sustainable gardening practices that improve air quality and support local ecosystems',
          features: ['Air Purification', 'Biodiversity Support', 'Soil Health', 'Eco-balance']
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: 'Property Value Increase',
          description: 'Well-maintained landscapes that can increase property value by up to 20%',
          features: ['Value Appreciation', 'Market Value', 'Investment Return', 'Desirability']
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Low Maintenance',
          description: 'Smart design and plant selection ensuring beautiful gardens with minimal upkeep',
          features: ['Time Saving', 'Cost Effective', 'Easy Care', 'Sustainable Design']
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Outdoor Living',
          description: 'Create functional outdoor spaces for relaxation, entertainment, and family activities',
          features: ['Entertainment Space', 'Relaxation Areas', 'Family Activities', 'Social Gathering']
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Professional Care',
          description: 'Expert maintenance ensuring plant health, proper growth, and year-round beauty',
          features: ['Plant Health', 'Expert Knowledge', 'Seasonal Care', 'Disease Prevention']
        }
      ],
      stats: [
        { value: '95%', label: 'Client Retention' },
        { value: '150+', label: 'Gardens Transformed' },
        { value: '12+', label: 'Years Experience' },
        { value: '20%', label: 'Value Increase' }
      ]
    },
    cleaning: {
      name: 'Cleaning Services',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Maintain pristine, healthy environments with our professional cleaning solutions',
      benefits: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Health & Hygiene',
          description: 'Thorough cleaning that eliminates germs, allergens, and promotes healthier living spaces',
          features: ['Germ Elimination', 'Allergen Reduction', 'Sanitization', 'Health Protection']
        },
        {
          icon: <Clock className="w-5 h-5" />,
          title: 'Time Saving',
          description: 'Professional cleaning frees up your time for more important activities and priorities',
          features: ['Time Efficiency', 'Convenience', 'Productivity Boost', 'Stress Reduction']
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Professional Results',
          description: 'Spotless cleaning outcomes using professional equipment and proven techniques',
          features: ['Professional Equipment', 'Expert Techniques', 'Consistent Quality', 'Attention to Detail']
        },
        {
          icon: <Recycle className="w-5 h-5" />,
          title: 'Eco-Friendly',
          description: 'Environmentally conscious cleaning using green products and sustainable practices',
          features: ['Green Products', 'Sustainable Methods', 'Environmental Care', 'Safe for Families']
        },
        {
          icon: <DollarSign className="w-5 h-5" />,
          title: 'Cost Effective',
          description: 'Regular professional maintenance prevents costly repairs and extends asset lifespan',
          features: ['Preventive Care', 'Asset Protection', 'Long-term Savings', 'Damage Prevention']
        },
        {
          icon: <Heart className="w-5 h-5" />,
          title: 'Peace of Mind',
          description: 'Reliable, consistent service that ensures your space is always clean and welcoming',
          features: ['Reliability', 'Consistency', 'Trust', 'Comfort']
        }
      ],
      stats: [
        { value: '99%', label: 'Satisfaction Rate' },
        { value: '150+', label: 'Regular Clients' },
        { value: '10+', label: 'Years Experience' },
        { value: '24/7', label: 'Support Available' }
      ]
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Key <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Service Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the significant advantages of choosing Nitty Gritty for your property service needs. 
            Each service is designed to deliver exceptional value and transform your investment.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Service Benefits Grid */}
        <div className="space-y-12">
          {Object.entries(serviceBenefits).map(([serviceKey, service]) => (
            <div key={serviceKey} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
                      <p className="text-base opacity-90">{service.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3">
                    {service.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs opacity-80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="group bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                    >
                      {/* Benefit Icon */}
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-105 transition-transform duration-300`}>
                        {benefit.icon}
                      </div>

                      {/* Benefit Content */}
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{benefit.description}</p>

                      {/* Features */}
                      <div className="space-y-1">
                        {benefit.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}></div>
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service-specific CTA */}
              <div className="border-t border-gray-100 p-4 bg-gray-50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-gray-900 mb-1">
                      Ready to Experience These Benefits?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Transform your property with our professional {service.name.toLowerCase()}
                    </p>
                  </div>
                  <button className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap`}>
                    Get {service.name} Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Benefits Summary */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-3">Why Choose Nitty Gritty?</h3>
            <p className="text-base text-amber-100 max-w-2xl mx-auto">
              Across all our services, we deliver consistent excellence and exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold mb-1">Quality Guarantee</h4>
              <p className="text-amber-100 text-xs">98% client satisfaction across all services</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold mb-1">Expert Teams</h4>
              <p className="text-amber-100 text-xs">Certified professionals with 10+ years experience</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold mb-1">Nationwide Service</h4>
              <p className="text-amber-100 text-xs">Operating across Johannesburg, Durban & Cape Town</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold mb-1">Comprehensive Support</h4>
              <p className="text-amber-100 text-xs">End-to-end service with ongoing maintenance</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Experience the Benefits?</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their properties and investments with Nitty Gritty's professional services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Get Free Consultation
              </button>
              <button className="border border-amber-500 text-amber-700 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-50 transition-all duration-300">
                Compare Service Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefitsGrid;