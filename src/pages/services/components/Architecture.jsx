import React from 'react'
import ImageCarousel from '../../../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

const Architecture = () => {
  const architectureImages = [
    '/IMG-20251114-WA0058.jpg',
    '/IMG-20251114-WA0059.jpg',
    'IMG-20251114-WA0063.jpg',
    'IMG-20251114-WA0064.jpg',
    'IMG-20251114-WA0069.jpg',
    'IMG-20251114-WA0069.jpg',
    'IMG-20251114-WA0019.jpg',
    'IMG-20251114-WA0020.jpg',
    'IMG-20251114-WA0025.jpg',
    'IMG-20251114-WA0026.jpg',
    'IMG-20251114-WA0034.jpg',
    'IMG-20251114-WA0035.jpg',
    'IMG-20251114-WA0053.jpg',
    'IMG-20251114-WA0054.jpg',
    'IMG-20251114-WA0055.jpg',
    'IMG-20251114-WA0056.jpg',
    'IMG-20251114-WA0069.jpg',
  ];

return (
  <div>
    {/* HERO SECTION */}
    <section className="bg-gradient-to-r from-[#A67C00] to-[#A67C00]  text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Architecture Services</h1>
        <p className="text-lg text-gray-200 max-w-3xl">
          Professional architectural design, planning, and development solutions that bring your vision to life.
        </p>
      </div>
    </section>

    {/* GALLERY */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
          <ImageCarousel images={architectureImages} title="Architecture Projects" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Comprehensive Architectural Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide full-spectrum architectural services from concept design to project completion.
              Whether residential, commercial, or industrial — we create functional, aesthetic, and sustainable spaces.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Concept & Schematic Design</h4>
                  <p className="text-gray-600 text-sm">
                    We turn your ideas into clear, innovative architectural concepts.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Architectural Drawings</h4>
                  <p className="text-gray-600 text-sm">
                    Detailed plans, elevations, 3D renders, and technical drawings.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Municipal Submissions</h4>
                  <p className="text-gray-600 text-sm">
                    Complete documentation and submission for building plan approval.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Project Management</h4>
                  <p className="text-gray-600 text-sm">
                    End-to-end supervision ensuring quality and compliance.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900">Renovations & Additions</h4>
                  <p className="text-gray-600 text-sm">
                    Enhancing existing structures with modern and functional upgrades.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Architecture?</h3>

            <div className="space-y-4">
              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">Experienced Architects</h4>
                <p className="text-gray-600 text-sm">
                  A team of skilled professionals with years of industry expertise.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">Modern & Sustainable Designs</h4>
                <p className="text-gray-600 text-sm">
                  Eco-friendly solutions that meet global architectural standards.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">Transparent Pricing</h4>
                <p className="text-gray-600 text-sm">
                  Clear and fair pricing with no unexpected costs.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-slate-900 mb-1">High-Quality Deliverables</h4>
                <p className="text-gray-600 text-sm">
                  Detailed blueprints, 3D visuals, and compliant documentation.
                </p>
              </div>
            </div>

            <button className="w-full mt-8 bg-[#A67C00] hover:bg-[#A67C00] text-white py-3 rounded-lg font-semibold transition-all">
              Request Architectural Consultation
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* CTA SECTION */}
    <section className="bg-slate-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Let our team help you design and build the perfect space. Get in touch with us today.
        </p>
        <button className="bg-[#A67C00] hover:bg-[#A67C00] text-white px-8 py-4 rounded-lg font-semibold transition-all">
          Get in Touch
        </button>
      </div>
    </section>
  </div>
);

}

export default Architecture