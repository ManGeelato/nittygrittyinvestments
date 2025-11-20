import React from 'react'
import ImageCarousel from '../../../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

const Cleaning = () => {
  const cleaningImages = [
    '/11.png',
    '/12.png',
    '/6.png',
    '/4.png',
    '/10.png',
    '/10.png',
  ];

return (
  <div>

    {/* HERO */}
    <section className="bg-gradient-to-r from-[#A67C00] to-[#A67C00] text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cleaning Services</h1>
        <p className="text-lg text-gray-200 max-w-3xl">
          Professional residential, commercial, and industrial cleaning services that guarantee spotless results.
        </p>
      </div>
    </section>

    {/* GALLERY */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
          <ImageCarousel images={cleaningImages} title="Cleaning Projects" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Complete Cleaning Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide high-quality and reliable cleaning services tailored for homes, offices, complexes,
              retail stores, estates, and industrial facilities.
              Whether you need once-off deep cleaning or ongoing maintenance — we’ve got you covered.
            </p>

            <ul className="space-y-4">

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Deep Cleaning</h4>
                  <p className="text-gray-600 text-sm">
                    Intensive cleaning for homes, offices, and buildings — top to bottom.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Office & Commercial Cleaning</h4>
                  <p className="text-gray-600 text-sm">
                    Daily and weekly cleaning to maintain a hygienic workspace.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Post-Construction Cleaning</h4>
                  <p className="text-gray-600 text-sm">
                    Removing dust, paint, cement residue — leaving the site ready for use.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Carpet & Upholstery Cleaning</h4>
                  <p className="text-gray-600 text-sm">
                    Deep cleaning using safe chemicals and stain removal treatments.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-3">
                <CheckCircle size={20} className="text-[#A67C00] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#A67C00]">Estate & Complex Cleaning</h4>
                  <p className="text-gray-600 text-sm">
                    Reliable cleaning for shared spaces, hallways, and communal areas.
                  </p>
                </div>
              </li>

            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Cleaning Services?</h3>

            <div className="space-y-4">

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Professional & Trained Staff</h4>
                <p className="text-gray-600 text-sm">
                  Our team follows strict hygiene and quality standards.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Eco-Friendly Products</h4>
                <p className="text-gray-600 text-sm">
                  Safe, non-toxic cleaning chemicals suitable for all environments.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Flexible Service Plans</h4>
                <p className="text-gray-600 text-sm">
                  Daily, weekly, monthly, or once-off cleaning options.
                </p>
              </div>

              <div className="border-l-4 border-[#A67C00] pl-4">
                <h4 className="font-semibold text-[#A67C00] mb-1">Strict Quality Control</h4>
                <p className="text-gray-600 text-sm">
                  Supervisors ensure every space is cleaned to perfection.
                </p>
              </div>

            </div>

            <button className="w-full mt-8 bg-[#A67C00] hover:bg-[#A67C00] text-white py-3 rounded-lg font-semibold transition-all">
              Request Cleaning Service
            </button>
          </div>

        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-slate-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Cleaning?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Let us handle the dirt while you focus on what matters. Contact us for a cleaning plan that fits your needs.
        </p>
        <button className="bg-[#A67C00] hover:bg-[#A67C00] text-white px-8 py-4 rounded-lg font-semibold transition-all">
          Get in Touch
        </button>
      </div>
    </section>

  </div>
);
}

export default Cleaning;
