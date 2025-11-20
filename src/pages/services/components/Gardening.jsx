import React from 'react'
import ImageCarousel from '../../../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

const Gardening = () => {
  const gardeningImages = [
    '/13.png',
    '/481047747_594395333427392_7274881059531875022_n.jpg',
    '/IMG-20250127-WA0009.jpg',
  ];

return (
  <div>

    {/* HERO */}
    <section className="bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gardening Services</h1>
        <p className="text-lg text-gray-200 max-w-3xl">
          Professional gardening, landscaping, and outdoor maintenance solutions to keep your property beautiful all year round.
        </p>
      </div>
    </section>

    {/* GALLERY */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
          <ImageCarousel images={gardeningImages} title="Gardening Projects" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Complete Gardening Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              From landscape design to full garden maintenance, we offer tailored services for homes, estates,
              complexes, commercial properties, and outdoor venues. Your garden deserves professional care.
            </p>

            <ul className="space-y-4">

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Lawn Care & Maintenance</h4>
                  <p className="text-gray-600 text-sm">
                    Regular mowing, edging, weed control, and fertilizing for a healthy, green lawn.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Tree Trimming & Pruning</h4>
                  <p className="text-gray-600 text-sm">
                    Professional shaping and pruning for trees, hedges, and shrubs.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Landscaping & Garden Design</h4>
                  <p className="text-gray-600 text-sm">
                    Custom layouts, flowerbeds, pathways, and complete outdoor transformations.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Garden Clean-Ups</h4>
                  <p className="text-gray-600 text-sm">
                    Seasonal clean-ups, debris removal, soil turning, and plant bed refreshing.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Irrigation Systems</h4>
                  <p className="text-gray-600 text-sm">
                    Installation, repairs, and optimization of water-efficient irrigation.
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Gardening Services?</h3>

            <div className="space-y-4">

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Skilled Garden Specialists</h4>
                <p className="text-gray-600 text-sm">
                  Experienced gardeners committed to quality and detail.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Custom Landscaping Designs</h4>
                <p className="text-gray-600 text-sm">
                  Tailor-made designs that bring your outdoor vision to life.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Sustainable Gardening Methods</h4>
                <p className="text-gray-600 text-sm">
                  Eco-friendly planting and water-saving practices.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Reliable Maintenance Plans</h4>
                <p className="text-gray-600 text-sm">
                  Weekly, bi-weekly, monthly, or once-off garden care.
                </p>
              </div>

            </div>

            <button className="w-full mt-8 bg-[#A67C00] hover:bg-[#8c6800] text-white py-3 rounded-lg font-semibold transition-all">
              Request Gardening Service
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Gardening?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Whether it’s maintenance or a full landscape makeover, our team is ready to transform your outdoor space.
        </p>
        <button className="bg-[#A67C00] hover:bg-[#8c6800] text-white px-8 py-4 rounded-lg font-semibold transition-all">
          Get in Touch
        </button>
      </div>
    </section>

  </div>
);
}

export default Gardening;
