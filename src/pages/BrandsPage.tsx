import { Award } from 'lucide-react';
import Navbar from '../components/Navbar';

function BrandsPage() {
  // Brand data - featuring our key partners
  const brands = [
    { name: 'Marathon', logo: `${import.meta.env.BASE_URL}images/logos/marathon-logo.png` },
    { name: 'Silverback', logo: `${import.meta.env.BASE_URL}images/logos/silverback-logo.png` },
    { name: 'Automann', logo: `${import.meta.env.BASE_URL}images/logos/automann-logo.png` },
    { name: 'Brakeworks', logo: `${import.meta.env.BASE_URL}images/logos/brakeworks-logo.png` },
    { name: 'Holland', logo: `${import.meta.env.BASE_URL}images/logos/safholland.png` },
    { name: 'Accuride', logo: `${import.meta.env.BASE_URL}images/logos/accuride.png` },
    { name: 'Bendix', logo: `${import.meta.env.BASE_URL}images/logos/bendix.png` },
    { name: 'Conmet', logo: `${import.meta.env.BASE_URL}images/logos/conmet.png` },
    { name: 'Dana Spicer', logo: `${import.meta.env.BASE_URL}images/logos/dana.png` },
    { name: 'Eaton', logo: `${import.meta.env.BASE_URL}images/logos/eaton.png` },
    { name: 'Euclid', logo: `${import.meta.env.BASE_URL}images/logos/euclid.png` },
    { name: 'Firestone', logo: `${import.meta.env.BASE_URL}images/logos/firestone.png` },
    { name: 'Gunite', logo: `${import.meta.env.BASE_URL}images/logos/gunite.png` },
    { name: 'Haldex', logo: `${import.meta.env.BASE_URL}images/logos/haldex.png` },
    { name: 'Hendrickson', logo: `${import.meta.env.BASE_URL}images/logos/hendrickson.png` },
    { name: 'Meritor', logo: `${import.meta.env.BASE_URL}images/logos/meritor.png` },
    { name: 'MGM', logo: `${import.meta.env.BASE_URL}images/logos/mgm.png` },
    { name: 'Sampa', logo: `${import.meta.env.BASE_URL}images/logos/sampa.png` },
    { name: 'SKF', logo: `${import.meta.env.BASE_URL}images/logos/skf.png` },
    { name: 'Stemco', logo: `${import.meta.env.BASE_URL}images/logos/stemco.png` },
    { name: 'Sylvania', logo: `${import.meta.env.BASE_URL}images/logos/sylvania.png` },
    { name: 'Timken', logo: `${import.meta.env.BASE_URL}images/logos/timken.png` },
    { name: 'Wabco', logo: `${import.meta.env.BASE_URL}images/logos/wabco.png` },
    { name: 'Webb', logo: `${import.meta.env.BASE_URL}images/logos/webb.png` },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-kvm-black text-white overflow-hidden">
        {/* Background Elements - Matching the design from other pages */}
        <div className="absolute inset-0 bg-kvm-black">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-kvm-black via-kvm-black/95 to-kvm-black/80" />
          
          {/* Flowing diagonal lines - primary pattern */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(245, 223, 114, 0.4) 15px, rgba(245, 223, 114, 0.4) 17px, transparent 17px, transparent 40px)`,
              backgroundSize: '80px 80px',
              animation: 'flow 20s linear infinite',
              maskImage: 'radial-gradient(ellipse at center, transparent 60%, black 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 60%, black 90%)'
            }}
          />
          
          {/* Secondary flowing lines - offset for depth */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(245, 223, 114, 0.3) 30px, rgba(245, 223, 114, 0.3) 33px, transparent 33px, transparent 80px)`,
              backgroundSize: '120px 120px',
              animation: 'flow 30s linear infinite reverse',
              maskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 50%, black 80%)'
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Brands
                <span className="text-kvm-yellow block animate-slide-in-right animation-delay-300">We Carry</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              Trusted partnerships with industry-leading manufacturers to bring you the highest quality commercial vehicle parts.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-kvm-yellow/20 rounded-full mb-6">
              <Award className="h-8 w-8 text-kvm-black" />
            </div>
            <h2 className="text-4xl font-bold text-kvm-black mb-4">Our Trusted Partners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We work exclusively with premium manufacturers who share our commitment to quality, reliability, and innovation in the commercial vehicle industry.
            </p>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="aspect-square flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                            <span class="text-gray-400 font-semibold text-lg">${brand.name}</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-kvm-yellow/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-kvm-black mb-4">
                Don't See Your Preferred Brand?
              </h3>
              <p className="text-gray-600 mb-6">
                We're constantly expanding our partnerships. Contact us to inquire about specific brands or products you need.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-kvm-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrandsPage;
