import React from 'react';
import { Linkedin, Mail, Phone, MapPin, Award, Calendar, Building } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Fakude",
      position: "Director & CEO",
      department: "Executive Leadership",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "20+ years",
      location: "Johannesburg",
      email: "mike@nittygritty.co.za",
      phone: "067 199 2309",
      bio: "Visionary leader with extensive experience in investment management and property development. Founded Nitty Gritty with a mission to transform the property services industry.",
      specialties: ["Strategic Planning", "Investment Analysis", "Business Development", "Leadership"],
      achievements: ["Industry Innovator Award 2020", "Top CEO Finalist 2022"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Nombulelo Saboya",
      position: "Chief Operations Officer",
      department: "Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "15+ years",
      location: "Durban",
      email: "sarah@nittygritty.co.za",
      phone: "011 524 6421",
      bio: "Operations expert specializing in process optimization and service delivery. Ensures seamless coordination across all three service divisions and regional offices.",
      specialties: ["Operations Management", "Process Improvement", "Quality Control", "Team Leadership"],
      achievements: ["Operational Excellence Award 2021", "Service Delivery Champion"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Michelle Adonsi",
      position: "Head of Architecture",
      department: "Architecture",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "18+ years",
      location: "Cape Town",
      email: "david@nittygritty.co.za",
      phone: "011 524 6435",
      bio: "Registered architect with a passion for innovative design and sustainable building practices. Leads our architectural team in creating transformative spaces.",
      specialties: ["Architectural Design", "Project Management", "Sustainable Building", "3D Visualization"],
      achievements: ["SA Institute of Architects Award", "Green Building Council Member"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Kgaugelo",
      position: "Head of Gardening",
      department: "Gardening & Landscaping",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "12+ years",
      location: "Johannesburg",
      email: "grace@nittygritty.co.za",
      phone: "011 524 6421",
      bio: "Horticulture specialist with expertise in landscape design and sustainable gardening practices. Transforms outdoor spaces into beautiful, functional environments.",
      specialties: ["Landscape Design", "Horticulture", "Irrigation Systems", "Garden Maintenance"],
      achievements: ["Landscaper of the Year 2019", "Sustainable Gardening Advocate"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Mpilo",
      position: "Head of Cleaning",
      department: "Cleaning & Maintenance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "10+ years",
      location: "Durban",
      email: "james@nittygritty.co.za",
      phone: "067 199 2309",
      bio: "Cleaning industry professional with expertise in commercial and residential cleaning standards. Implements innovative cleaning solutions and quality assurance protocols.",
      specialties: ["Commercial Cleaning", "Quality Assurance", "Team Training", "Eco-friendly Solutions"],
      achievements: ["Cleaning Standards Excellence", "Client Satisfaction Leader"],
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Lisa van der Merwe",
      position: "Finance Manager",
      department: "Finance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      experience: "14+ years",
      location: "Cape Town",
      email: "lisa@nittygritty.co.za",
      phone: "011 524 6435",
      bio: "Financial expert specializing in investment analysis and portfolio management. Ensures sound financial decisions and sustainable business growth.",
      specialties: ["Financial Analysis", "Investment Strategy", "Budget Management", "Risk Assessment"],
      achievements: ["CFA Charterholder", "Financial Excellence Award"],
      social: {
        linkedin: "#"
      }
    }
  ];

  const departments = [
    { name: "Executive", count: 1, color: "from-amber-500 to-yellow-500" },
    { name: "Operations", count: 1, color: "from-amber-600 to-orange-500" },
    { name: "Architecture", count: 1, color: "from-orange-500 to-amber-600" },
    { name: "Gardening", count: 1, color: "from-amber-400 to-yellow-400" },
    { name: "Cleaning", count: 1, color: "from-yellow-500 to-amber-400" },
    { name: "Finance", count: 1, color: "from-amber-300 to-yellow-300" }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 h-48 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Meet Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Leadership Team</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto px-4">
            The experienced professionals driving Nitty Gritty's success across South Africa. 
            Each team member brings unique expertise and dedication to delivering exceptional service.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Member Image & Basic Info */}
              <div className="relative">
                {/* Team Member Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x400/4A5568/FFFFFF?text=${encodeURIComponent(member.name.split(' ').map(n => n[0]).join(''))}`;
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-amber-700 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {member.experience}
                  </div>
                  
                  {/* Location Badge */}
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-amber-700 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {member.location}
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.position}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="absolute bottom-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.social.linkedin}
                    className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href={`mailto:${member.email}`}
                    className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-amber-600 font-semibold text-sm mb-1">{member.department}</p>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">{member.bio}</p>

                {/* Specialties */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-800 mb-1.5">Specialties</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((specialty, specIndex) => (
                      <span 
                        key={specIndex}
                        className="px-1.5 py-0.5 bg-amber-50 text-amber-700 text-xs rounded border border-amber-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-800 mb-1.5 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    Achievements
                  </h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="text-xs text-gray-600 flex items-center gap-1">
                        <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-3 border-t border-amber-100">
                  <div className="flex flex-col gap-1.5">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-amber-600 transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-amber-600 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamSection;