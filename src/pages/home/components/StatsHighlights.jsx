import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Building2, MapPin, Clock, CheckCircle, Star } from 'lucide-react';

const StatsHighlights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    locations: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Building2,
      endValue: 2500,
      suffix: '+',
      label: 'Projects Completed',
      color: 'from-[#A67C00] to-[#A67C00]',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      description: 'Across all service categories'
    },
    {
      icon: Users,
      endValue: 5000,
      suffix: '+',
      label: 'Happy Clients',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Residential & Commercial'
    },
    {
      icon: Clock,
      endValue: 20,
      suffix: '+',
      label: 'Years Experience',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      description: 'Industry expertise since 2013'
    },
    {
      icon: MapPin,
      endValue: 3,
      suffix: '',
      label: 'Service Locations',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Johannesburg, Durban, Cape Town'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for excellence in service delivery and customer satisfaction'
    },
    {
      icon: CheckCircle,
      title: 'Quality Certified',
      description: 'Fully licensed, insured, and certified by relevant industry bodies'
    },
    {
      icon: Star,
      title: '98% Satisfaction Rate',
      description: 'Consistently high ratings from our valued clients across all services'
    },
    {
      icon: TrendingUp,
      title: 'Growing Strong',
      description: 'Expanding our reach while maintaining our commitment to excellence'
    }
  ];

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const counters = [
      { key: 'projects', end: 2500 },
      { key: 'clients', end: 5000 },
      { key: 'experience', end: 20 },
      { key: 'locations', end: 3 }
    ];

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        projects: Math.floor(counters[0].end * progress),
        clients: Math.floor(counters[1].end * progress),
        experience: Math.floor(counters[2].end * progress),
        locations: Math.floor(counters[3].end * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          projects: counters[0].end,
          clients: counters[1].end,
          experience: counters[2].end,
          locations: counters[3].end
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const displayValues = {
    projects: isVisible ? counts.projects : 0,
    clients: isVisible ? counts.clients : 0,
    experience: isVisible ? counts.experience : 0,
    locations: isVisible ? counts.locations : 0
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(217, 119, 6) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-100 rounded-full text-amber-800 text-xs font-medium mb-3">
            <TrendingUp size={14} className="text-amber-600" />
            <span>Our Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Results That <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">Speak</span> For Themselves
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto px-4">
            Two decades of excellence, thousands of satisfied clients, and a commitment to quality that never wavers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const values = [displayValues.projects, displayValues.clients, displayValues.experience, displayValues.locations];
            
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-4 lg:p-5 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Subtle hover border */}
                <div className={`absolute inset-0 rounded-xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${stat.color} -z-10`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={stat.iconColor} size={24} strokeWidth={2} />
                  </div>

                  {/* Number */}
                  <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {values[idx].toLocaleString()}{stat.suffix}
                  </div>

                  {/* Label */}
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Subtle decorative corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${stat.color} opacity-3 rounded-bl-full`}></div>
              </div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#A67C00] to-[#A67C00] px-5 py-4 lg:px-6 lg:py-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white text-center">
              Why Choose Nitty Gritty?
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 p-5 lg:p-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={idx}
                  className="text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative inline-flex mb-3">
                    <div className="absolute inset-0 bg-amber-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="text-amber-600" size={24} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-gray-900 mb-1">
                    {achievement.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-gray-50 to-amber-50 px-5 py-5 text-center border-t border-gray-100">
            <p className="text-gray-700 mb-3 font-medium text-sm">
              Ready to experience the Nitty Gritty difference?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
            >
              Get Your Free Quote
              <TrendingUp size={16} />
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 lg:gap-6 text-gray-600">
          <div className="flex items-center gap-1.5 text-sm">
            <CheckCircle className="text-green-600" size={16} />
            <span className="font-medium">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Award className="text-amber-600" size={16} />
            <span className="font-medium">Award Winning</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <Star className="text-amber-600 fill-amber-600" size={16} />
            <span className="font-medium">5-Star Rated</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsHighlights;