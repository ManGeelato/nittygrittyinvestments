import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, MessageCircle } from 'lucide-react';

const FAQAccordion = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState('general');

  const faqCategories = {
    general: {
      name: 'General Questions',
      icon: '❓',
      questions: [
        {
          question: 'What areas in South Africa do you serve?',
          answer: 'We provide services across three major regions: Johannesburg (Head Office), KwaZulu-Natal (Durban), and Western Cape (Cape Town). Our teams are strategically located to serve clients nationwide with the same high-quality standards.',
          popular: true
        },
        {
          question: 'How long has Nitty Gritty been in business?',
          answer: 'Nitty Gritty was established in 2008, bringing over 15 years of experience in property services and investment management. We have successfully completed 500+ projects with a 98% client satisfaction rate.',
          popular: false
        },
        {
          question: 'Are your services insured and certified?',
          answer: 'Yes, we are fully insured and certified. We carry comprehensive liability insurance, and our teams include certified professionals in architecture, landscaping, and cleaning. We also comply with all South African regulatory requirements.',
          popular: true
        },
        {
          question: 'Do you offer emergency or after-hours services?',
          answer: 'Yes, we offer emergency services for urgent situations. Our gardening and cleaning services provide 24/7 emergency support, while architectural consultations can be scheduled for evenings and weekends by appointment.',
          popular: false
        },
        {
          question: 'Can I bundle multiple services for a discount?',
          answer: 'Absolutely! We offer package deals for clients using multiple services. Bundling architecture with gardening and cleaning services can save you up to 15% on total project costs. Contact us for a customized package quote.',
          popular: true
        }
      ]
    },
    architecture: {
      name: 'Architectural Services',
      icon: '🏛️',
      questions: [
        {
          question: 'What types of architectural projects do you handle?',
          answer: 'We handle residential, commercial, and industrial projects including new constructions, renovations, extensions, and interior design. Our expertise ranges from small home additions to large commercial developments.',
          popular: true
        },
        {
          question: 'How long does a typical architectural project take?',
          answer: 'Project timelines vary based on scope: Conceptual design (2-4 weeks), detailed documentation (4-8 weeks), and construction oversight (project duration). Most residential projects take 3-6 months from concept to completion.',
          popular: false
        },
        {
          question: 'Do you handle building plan submissions and approvals?',
          answer: 'Yes, we manage the entire approval process including municipal submissions, SANS 10400 compliance, and coordination with relevant authorities. We ensure all plans meet local building regulations and requirements.',
          popular: true
        },
        {
          question: 'What is your fee structure for architectural services?',
          answer: 'We offer flexible fee structures: percentage-based (6-12% of construction value), fixed fee, or hourly rates. During our free initial consultation, we provide transparent cost estimates based on your project scope.',
          popular: false
        },
        {
          question: 'Can you work with my existing architect or designer?',
          answer: 'Yes, we can collaborate with your existing professionals or take over partially completed projects. We believe in teamwork and can integrate seamlessly with other consultants to ensure project success.',
          popular: false
        },
        {
          question: 'Do you offer sustainable/green building design?',
          answer: 'Absolutely! We specialize in sustainable architecture including energy-efficient designs, green building materials, rainwater harvesting systems, and solar integration. We can also assist with Green Star certification.',
          popular: true
        }
      ]
    },
    gardening: {
      name: 'Gardening Services',
      icon: '🌿',
      questions: [
        {
          question: 'What gardening services do you offer?',
          answer: 'We provide comprehensive gardening services including landscape design, garden installation, regular maintenance, irrigation systems, tree care, lawn maintenance, seasonal planting, and pest control management.',
          popular: true
        },
        {
          question: 'How often should my garden be maintained?',
          answer: 'Maintenance frequency depends on your garden size and type: Weekly for intensive gardens, bi-weekly for moderate maintenance, or monthly for low-maintenance landscapes. We assess your needs during our free consultation.',
          popular: false
        },
        {
          question: 'Do you use organic and eco-friendly practices?',
          answer: 'Yes, we prioritize organic and eco-friendly practices. We use organic fertilizers, natural pest control methods, water-wise plants, and sustainable gardening techniques to protect the environment.',
          popular: true
        },
        {
          question: 'Can you work with existing gardens or only new installations?',
          answer: 'We work with both new and existing gardens. We can revitalize overgrown spaces, improve existing landscapes, or create completely new garden designs based on your preferences and budget.',
          popular: false
        },
        {
          question: 'What happens during winter or dry seasons?',
          answer: 'We provide seasonal care including winter preparation, frost protection, dry season watering schedules, and drought-resistant planting. Our maintenance plans are adapted for South African seasonal changes.',
          popular: false
        },
        {
          question: 'Do you offer garden lighting and irrigation systems?',
          answer: 'Yes, we design and install complete irrigation systems (including smart controllers) and garden lighting solutions. These can be integrated into new or existing landscapes for enhanced functionality and beauty.',
          popular: true
        }
      ]
    },
    cleaning: {
      name: 'Cleaning Services',
      icon: '✨',
      questions: [
        {
          question: 'What types of cleaning services do you provide?',
          answer: 'We offer commercial cleaning (offices, retail spaces), residential cleaning (homes, apartments), specialized cleaning (post-construction, move-in/move-out), deep cleaning, and regular maintenance cleaning.',
          popular: true
        },
        {
          question: 'Are your cleaning products safe for children and pets?',
          answer: 'Yes, we use eco-friendly, non-toxic cleaning products that are safe for children, pets, and people with allergies. All our products are environmentally responsible and meet safety standards.',
          popular: true
        },
        {
          question: 'Do I need to be home during cleaning services?',
          answer: 'Not necessarily. Many clients provide us with access arrangements. We are fully insured and bonded, and we follow strict security protocols. You can choose to be present or arrange alternative access.',
          popular: false
        },
        {
          question: 'How do you determine cleaning costs?',
          answer: 'Costs are based on property size, cleaning frequency, specific requirements, and location. We provide free on-site assessments to give you accurate, transparent pricing with no hidden costs.',
          popular: true
        },
        {
          question: 'Can I schedule one-time cleaning or only regular services?',
          answer: 'We offer both one-time cleaning (for special occasions, spring cleaning, or post-construction) and regular scheduled services (daily, weekly, bi-weekly, or monthly) to suit your needs.',
          popular: false
        },
        {
          question: 'What is your cancellation and rescheduling policy?',
          answer: 'We offer flexible cancellation with 24-hour notice for no charge. For regular clients, we provide easy rescheduling through our client portal, phone, or email. We understand that plans can change.',
          popular: false
        }
      ]
    },
    pricing: {
      name: 'Pricing & Payments',
      icon: '💰',
      questions: [
        {
          question: 'How do you structure your pricing?',
          answer: 'We offer transparent, customized pricing: Architecture (percentage, fixed fee, or hourly), Gardening (project-based or maintenance contracts), Cleaning (per visit or contract rates). All quotes include detailed breakdowns.',
          popular: true
        },
        {
          question: 'Do you offer free consultations and quotes?',
          answer: 'Yes, we provide free no-obligation consultations and detailed quotes for all services. During the consultation, we assess your needs and provide accurate pricing with no hidden costs.',
          popular: true
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept EFT, credit cards, debit cards, and cash. For larger projects, we offer structured payment plans aligned with project milestones to help manage your cash flow.',
          popular: false
        },
        {
          question: 'Are there any hidden costs or surprise charges?',
          answer: 'No, we believe in transparent pricing. All potential costs are discussed upfront, and we obtain client approval for any additional work or changes that may affect the final price.',
          popular: true
        },
        {
          question: 'Do you offer discounts for long-term contracts?',
          answer: 'Yes, we offer discounted rates for long-term maintenance contracts (gardening and cleaning) and loyalty discounts for returning clients. Package deals for multiple services also provide significant savings.',
          popular: false
        }
      ]
    }
  };

  const toggleItem = (category, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }));
  };

  const currentCategory = faqCategories[activeCategory];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Frequently Asked <span className="bg-gradient-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our services, pricing, and processes. 
            Can't find what you're looking for? Contact us directly for personalized assistance.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-1 mb-10">
            {Object.entries(faqCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white shadow-sm transform -translate-y-0.5'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-gray-200'
                }`}
              >
                <span className="text-base">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            {/* Category Header */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-b border-amber-100 p-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{currentCategory.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{currentCategory.name}</h3>
                  <p className="text-gray-600 text-sm">Common questions about {currentCategory.name.toLowerCase()}</p>
                </div>
              </div>
            </div>

            {/* Questions */}
            <div className="divide-y divide-gray-100">
              {currentCategory.questions.map((faq, index) => (
                <div key={index} className="group">
                  <button
                    onClick={() => toggleItem(activeCategory, index)}
                    className="w-full text-left p-4 lg:p-6 flex items-start justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base lg:text-lg font-semibold text-gray-900">
                          {faq.question}
                        </h4>
                        {faq.popular && (
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      {openItems[`${activeCategory}-${index}`] && (
                        <p className="text-gray-600 text-sm leading-relaxed mt-2">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex-shrink-0">
                      {openItems[`${activeCategory}-${index}`] ? (
                        <ChevronUp className="w-5 h-5 text-amber-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors" />
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Support CTA */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-4 text-white text-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base mb-1">Call Us</h4>
              <p className="text-amber-100 text-xs mb-2">Speak directly with our team</p>
              <a href="tel:0115246421" className="font-semibold text-base hover:underline">
                011 524 6421
              </a>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-4 text-white text-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base mb-1">Email Us</h4>
              <p className="text-amber-100 text-xs mb-2">Get detailed information</p>
              <a href="mailto:info@nittygritty.co.za" className="font-semibold text-base hover:underline">
                info@nittygritty.co.za
              </a>
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl p-4 text-white text-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base mb-1">Live Chat</h4>
              <p className="text-amber-100 text-xs mb-2">Instant answers online</p>
              <button className="font-semibold text-base hover:underline">
                Start Chat
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10">
            <div className="bg-white rounded-xl shadow-md border border-amber-100 p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Still Have Questions?</h3>
              <p className="text-gray-600 text-sm mb-4 max-w-2xl mx-auto">
                Our team is ready to provide personalized answers and help you find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Schedule Free Consultation
                </button>
                <button className="border border-amber-500 text-amber-700 px-6 py-3 rounded-lg font-semibold text-base hover:bg-amber-50 transition-all duration-300">
                  Download Service Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;