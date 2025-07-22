import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductDetailModal from '../components/ProductDetailModal';
import ContactModal from '../components/ContactModal';
import Navbar from '../components/Navbar';

// Import product images
import brakesImg from '../assets/images/parts/brakes.png';
import drumsImg from '../assets/images/parts/drums.png';
import rotorsImg from '../assets/images/parts/rotors.png';
import discPadsImg from '../assets/images/parts/disc-pads.png';
import shocksImg from '../assets/images/parts/shocks.png';
import airChambersImg from '../assets/images/parts/air-chamber.png';
import slackAdjustersImg from '../assets/images/parts/slack-adjusters.png';
import calipersImg from '../assets/images/parts/calipers.png';
import airSpringsImg from '../assets/images/parts/air-springs.png';
import airTanksImg from '../assets/images/parts/air-tanks.png';
import airDryersImg from '../assets/images/parts/air-dryers.png';
import camshaftsImg from '../assets/images/parts/camshafts.png';
import wheelSealsImg from '../assets/images/parts/wheel-seals-and-bearings.png';
import torqueRodsImg from '../assets/images/parts/torque-rod-and-drag-links.png';

const products = [
  {
    name: 'Brakes',
    description: 'High-quality brake systems and components for heavy-duty commercial vehicles. Our brake solutions ensure maximum stopping power and safety for your fleet operations.',
    image: brakesImg,
    category: 'Braking Systems'
  },
  {
    name: 'Brake Drums',
    description: 'Durable brake drums engineered for heavy-duty applications. Manufactured to precise specifications for optimal performance and longevity.',
    image: drumsImg,
    category: 'Braking Systems'
  },
  {
    name: 'Brake Rotors',
    description: 'Premium brake rotors designed for commercial vehicles. Heat-treated and balanced for consistent braking performance under demanding conditions.',
    image: rotorsImg,
    category: 'Braking Systems'
  },
  {
    name: 'Disc Pads',
    description: 'Professional-grade disc brake pads offering superior stopping power and extended service life for heavy-duty truck and trailer applications.',
    image: discPadsImg,
    category: 'Braking Systems'
  },
  {
    name: 'Shock Absorbers',
    description: 'Marathon shock absorbers providing exceptional ride quality and load stability. Authorized distributor for premium shock systems.',
    image: shocksImg,
    category: 'Suspension'
  },
  {
    name: 'Air Brake Chambers',
    description: 'Reliable air brake chambers for consistent braking performance. Built to withstand the rigors of commercial vehicle operations.',
    image: airChambersImg,
    category: 'Air Brake Systems'
  },
  {
    name: 'Slack Adjusters',
    description: 'Automatic and manual slack adjusters ensuring proper brake adjustment and optimal performance throughout the service life.',
    image: slackAdjustersImg,
    category: 'Braking Systems'
  },
  {
    name: 'Brake Calipers',
    description: 'Heavy-duty brake calipers engineered for commercial applications. Precision-manufactured for reliable braking performance.',
    image: calipersImg,
    category: 'Braking Systems'
  },
  {
    name: 'Air Springs',
    description: 'Torque air springs and suspension components providing superior load management and ride comfort for heavy-duty vehicles.',
    image: airSpringsImg,
    category: 'Suspension'
  },
  {
    name: 'Air Tanks',
    description: 'High-capacity air reservoirs for air brake systems. DOT-approved for commercial vehicle applications.',
    image: airTanksImg,
    category: 'Air Brake Systems'
  },
  {
    name: 'Air Dryers',
    description: 'Advanced air drying systems to remove moisture from air brake systems, preventing freeze-ups and component corrosion.',
    image: airDryersImg,
    category: 'Air Brake Systems'
  },
  {
    name: 'Camshafts',
    description: 'Precision-engineered camshafts for diesel engines, manufactured to exacting specifications for optimal performance.',
    image: camshaftsImg,
    category: 'Engine Components'
  },
  {
    name: 'Wheel Seals & Bearings',
    description: 'Premium wheel end components designed for maximum durability and service life in heavy-duty applications.',
    image: wheelSealsImg,
    category: 'Wheel End'
  },
  {
    name: 'Torque Rods & Drag Links',
    description: 'Heavy-duty suspension components providing precise axle alignment and stability under load.',
    image: torqueRodsImg,
    category: 'Suspension'
  }
];

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products by active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenContactModal={openContactModal} />

      {/* Products Header */}
      <section className="relative bg-gradient-to-br from-kvm-black via-gray-900 to-gray-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kvm-yellow/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Heavy Duty 
              <span className="text-kvm-yellow block animate-slide-in-right animation-delay-300">Parts Catalog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              Comprehensive selection of premium parts for commercial vehicles. From brake systems to suspension components, we have everything you need to keep your fleet running.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-kvm-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-1000"></div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-kvm-yellow text-kvm-black shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                onClick={() => handleProductClick(product)}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-t-4 border-kvm-yellow group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      style={{ maxHeight: '180px' }}
                    />
                  </div>
                </div>
                <div className="min-h-[120px]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-kvm-yellow transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {product.description}
                  </p>
                </div>
                <div className="flex items-center text-kvm-yellow font-medium group-hover:translate-x-1 transition-transform duration-300">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-kvm-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kvm-yellow/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Need Help Finding the Right Parts?</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-8">
              Our experienced team is ready to help you find the exact components you need for your fleet.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <button 
              onClick={openContactModal}
              className="bg-kvm-yellow text-kvm-black px-8 py-4 rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl"
            >
              Contact Our Experts
            </button>
            <Link 
              to="/"
              className="border-2 border-kvm-yellow text-kvm-yellow px-8 py-4 rounded-lg hover:bg-kvm-yellow hover:text-kvm-black transition-all duration-300 font-bold text-lg inline-flex items-center justify-center group"
            >
              Back to Home
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-kvm-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-1000"></div>
      </section>

      <ProductDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default ProductsPage;