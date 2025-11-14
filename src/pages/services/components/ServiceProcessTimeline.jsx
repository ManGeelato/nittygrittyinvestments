import React, { useState } from 'react';
import { Calendar, Users, FileText, CheckCircle, Clock, Award, MessageCircle, Building, Leaf, Sparkles } from 'lucide-react';

const ServiceProcessTimeline = () => {
  const [activeProcess, setActiveProcess] = useState('architecture');

  const serviceProcesses = {
    architecture: {
      name: 'Architectural Services',
      icon: <Building className="w-6 h-6" />,
      color: 'from-amber-500 to-yellow-500',
      description: 'Comprehensive architectural design and project management process',
      steps: [
        {
          phase: 'Phase 1',
          title: 'Initial Consultation & Briefing',
          description: 'We begin by understanding your vision, requirements, and project constraints.',
          duration: '1-2 weeks',
          team: 'Lead Architect, Client',
          deliverables: ['Project Brief', 'Feasibility Study', 'Initial Concepts'],
          tasks: [
            'Site visit and analysis',
            'Client requirements gathering',
            'Budget and timeline discussion',
            'Regulatory requirement review'
          ],
          icon: <MessageCircle className="w-5 h-5" />
        },
        {
          phase: 'Phase 2',
          title: 'Concept Design & Development',
          description: 'Transforming your vision into tangible design concepts and preliminary plans.',
          duration: '2-4 weeks',
          team: 'Design Team, CAD Specialists',
          deliverables: ['Concept Drawings', '3D Models', 'Material Palettes'],
          tasks: [
            'Schematic design development',
            '3D modeling and visualization',
            'Material and finish selection',
            'Preliminary cost estimation'
          ],
          icon: <FileText className="w-5 h-5" />
        },
        {
          phase: 'Phase 3',
          title: 'Detailed Design & Documentation',
          description: 'Creating comprehensive construction documents and technical specifications.',
          duration: '4-6 weeks',
          team: 'Technical Team, Engineers',
          deliverables: ['Construction Drawings', 'Technical Specifications', 'Permit Documents'],
          tasks: [
            'Detailed architectural drawings',
            'Coordination with consultants',
            'Building regulation compliance',
            'Tender documentation preparation'
          ],
          icon: <FileText className="w-5 h-5" />
        },
        {
          phase: 'Phase 4',
          title: 'Construction Phase Services',
          description: 'Overseeing the construction process to ensure quality and adherence to design.',
          duration: 'Project Duration',
          team: 'Project Manager, Site Supervisors',
          deliverables: ['Site Reports', 'Progress Updates', 'Quality Certificates'],
          tasks: [
            'Contractor coordination',
            'Site inspections and supervision',
            'Quality control and assurance',
            'Progress monitoring and reporting'
          ],
          icon: <Users className="w-5 h-5" />
        },
        {
          phase: 'Phase 5',
          title: 'Project Completion & Handover',
          description: 'Final inspections, documentation, and formal project handover.',
          duration: '2-3 weeks',
          team: 'Project Team, Client',
          deliverables: ['As-built Drawings', 'Operation Manuals', 'Completion Certificate'],
          tasks: [
            'Final inspections and snagging',
            'As-built documentation',
            'Operation and maintenance manuals',
            'Project close-out and handover'
          ],
          icon: <Award className="w-5 h-5" />
        }
      ]
    },
    gardening: {
      name: 'Gardening Services',
      icon: <Leaf className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Professional landscape design and garden maintenance process',
      steps: [
        {
          phase: 'Phase 1',
          title: 'Site Assessment & Consultation',
          description: 'Comprehensive analysis of your outdoor space and understanding your vision.',
          duration: '1 week',
          team: 'Landscape Architect, Horticulturist',
          deliverables: ['Site Analysis Report', 'Initial Concepts', 'Soil Test Results'],
          tasks: [
            'Site measurement and analysis',
            'Soil testing and condition assessment',
            'Client needs and preference discussion',
            'Budget and maintenance level planning'
          ],
          icon: <MessageCircle className="w-5 h-5" />
        },
        {
          phase: 'Phase 2',
          title: 'Landscape Design & Planning',
          description: 'Creating detailed landscape plans and planting schemes.',
          duration: '2-3 weeks',
          team: 'Design Team, Planting Specialists',
          deliverables: ['Landscape Master Plan', 'Planting Schedule', 'Irrigation Plan'],
          tasks: [
            'Master landscape planning',
            'Plant selection and placement',
            'Hardscape design development',
            'Irrigation system planning'
          ],
          icon: <FileText className="w-5 h-5" />
        },
        {
          phase: 'Phase 3',
          title: 'Implementation & Installation',
          description: 'Executing the landscape design with precision and care.',
          duration: '2-6 weeks',
          team: 'Installation Crew, Gardeners',
          deliverables: ['Installed Landscape', 'Planting Completion', 'System Setup'],
          tasks: [
            'Site preparation and grading',
            'Hardscape installation',
            'Planting and turf establishment',
            'Irrigation system installation'
          ],
          icon: <Users className="w-5 h-5" />
        },
        {
          phase: 'Phase 4',
          title: 'Establishment & Maintenance',
          description: 'Ensuring your garden thrives with proper care and maintenance.',
          duration: 'Ongoing',
          team: 'Maintenance Crew, Horticulturist',
          deliverables: ['Maintenance Schedule', 'Health Reports', 'Seasonal Care Plan'],
          tasks: [
            'Regular watering and feeding',
            'Pruning and trimming',
            'Pest and disease management',
            'Seasonal planting and care'
          ],
          icon: <CheckCircle className="w-5 h-5" />
        }
      ]
    },
    cleaning: {
      name: 'Cleaning Services',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Professional cleaning service delivery process',
      steps: [
        {
          phase: 'Phase 1',
          title: 'Assessment & Custom Plan',
          description: 'Understanding your space and creating a tailored cleaning strategy.',
          duration: '1-2 days',
          team: 'Cleaning Supervisor, Client',
          deliverables: ['Custom Cleaning Plan', 'Schedule Proposal', 'Quote'],
          tasks: [
            'Site walkthrough and assessment',
            'Cleaning requirements discussion',
            'Frequency and schedule planning',
            'Special requirement identification'
          ],
          icon: <MessageCircle className="w-5 h-5" />
        },
        {
          phase: 'Phase 2',
          title: 'Team Assignment & Preparation',
          description: 'Assigning the right team and preparing equipment and supplies.',
          duration: '1-2 days',
          team: 'Operations Manager, Cleaning Crew',
          deliverables: ['Team Assignment', 'Equipment Checklist', 'Supply Inventory'],
          tasks: [
            'Team selection and briefing',
            'Equipment and supply preparation',
            'Safety protocol review',
            'Client-specific requirement training'
          ],
          icon: <Users className="w-5 h-5" />
        },
        {
          phase: 'Phase 3',
          title: 'Service Execution',
          description: 'Professional cleaning service delivery with quality assurance.',
          duration: 'Scheduled Service Duration',
          team: 'Cleaning Crew, Quality Inspector',
          deliverables: ['Cleaned Space', 'Quality Checklist', 'Service Report'],
          tasks: [
            'Systematic cleaning execution',
            'Quality control inspections',
            'Client communication updates',
            'Issue resolution and adjustments'
          ],
          icon: <CheckCircle className="w-5 h-5" />
        },
        {
          phase: 'Phase 4',
          title: 'Quality Assurance & Feedback',
          description: 'Ensuring satisfaction and continuous service improvement.',
          duration: 'Ongoing',
          team: 'Quality Manager, Client',
          deliverables: ['Satisfaction Survey', 'Service Improvement Plan', 'Next Schedule'],
          tasks: [
            'Post-service inspection',
            'Client feedback collection',
            'Service quality evaluation',
            'Schedule and plan adjustments'
          ],
          icon: <Award className="w-5 h-5" />
        }
      ]
    }
  };

  const currentProcess = serviceProcesses[activeProcess];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Service Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we deliver exceptional results through our structured, transparent approach. 
            From initial consultation to final delivery, every step is carefully planned and executed.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Service Type Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-1 flex flex-wrap justify-center gap-1">
            {Object.entries(serviceProcesses).map(([key, process]) => (
              <button
                key={key}
                onClick={() => setActiveProcess(key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeProcess === key
                    ? `bg-gradient-to-r ${process.color} text-white shadow-sm transform -translate-y-0.5`
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                {process.icon}
                {process.name}
              </button>
            ))}
          </div>
        </div>

        {/* Process Header */}
        <div className="text-center mb-10">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentProcess.color} text-white px-4 py-2 rounded-full shadow-md mb-3`}>
            {currentProcess.icon}
            <h3 className="text-xl font-bold">{currentProcess.name}</h3>
          </div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {currentProcess.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-amber-400 to-yellow-500 transform -translate-x-1/2 hidden lg:block"></div>

            {/* Process Steps */}
            <div className="space-y-8 lg:space-y-12">
              {currentProcess.steps.map((step, index) => (
                <div key={index} className="relative flex flex-col lg:flex-row items-start gap-6 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transform -translate-x-1/2 z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Step Number */}
                  <div className="flex-shrink-0 lg:w-28 text-center lg:text-right">
                    <div className="lg:hidden w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-base mx-auto mb-3">
                      {index + 1}
                    </div>
                    <div className="hidden lg:block">
                      <div className="text-2xl font-bold text-amber-600 mb-1">{step.phase}</div>
                      <div className="text-xs text-gray-500 font-semibold">STEP {index + 1}</div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-white rounded-xl shadow-md border border-gray-100 p-4 lg:p-6 hover:shadow-lg transition-all duration-500 group-hover:-translate-y-0.5">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      {/* Main Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center text-white">
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{step.title}</h4>
                            <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {step.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                {step.team}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{step.description}</p>

                        {/* Tasks */}
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-800 text-sm mb-2">Key Activities:</h5>
                          <div className="grid sm:grid-cols-2 gap-1">
                            {step.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                                <span className="text-gray-700 text-xs">{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="lg:w-56 flex-shrink-0">
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                          <h5 className="font-semibold text-gray-800 text-sm mb-2 flex items-center gap-2">
                            <FileText className="w-3 h-3 text-amber-500" />
                            Deliverables
                          </h5>
                          <div className="space-y-1">
                            {step.deliverables.map((deliverable, delIndex) => (
                              <div key={delIndex} className="flex items-center gap-2">
                                <Check className="w-3 h-3 text-amber-500" />
                                <span className="text-gray-700 text-xs">{deliverable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Summary */}
        <div className="mt-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-1">Structured Timeline</h4>
              <p className="text-amber-100 text-sm">Clear phases with defined timelines and milestones</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-1">Expert Team</h4>
              <p className="text-amber-100 text-sm">Dedicated professionals for each phase</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold mb-1">Quality Assured</h4>
              <p className="text-amber-100 text-sm">Rigorous quality control at every step</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Ready to Start Your Project?</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized timeline for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Begin Your Project Journey
              </button>
              <button className="border border-amber-500 text-amber-700 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-50 transition-all duration-300">
                Download Process Guide
              </button>
            </div>
          </div>
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

export default ServiceProcessTimeline;