import React from 'react';
import { X, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    description: string;
    image: string;
    category?: string;
  } | null;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-xl max-w-2xl w-full animate-scale-in shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-shrink-0 flex justify-between items-center p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-kvm-black line-clamp-1">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 flex-shrink-0 ml-2"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          </button>
        </div>
        
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5">
          {/* Image - Slightly larger while maintaining compact layout */}
          <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex-shrink-0 mx-auto sm:mx-0" style={{ width: '180px', height: '180px' }}>
            <div className="relative w-full h-full rounded overflow-hidden bg-gray-100 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/assets/placeholder-product.png';
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400 text-center p-2">
                  <ImageIcon className="h-8 w-8 mb-1" />
                  <span className="text-xs">No image</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {product.category && (
              <div className="inline-block bg-kvm-yellow/20 text-kvm-yellow text-2xs sm:text-xs font-medium px-2 py-0.5 rounded-full mb-2">
                {product.category}
              </div>
            )}
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
        
        <div className="flex-shrink-0 border-t border-gray-200 p-3 sm:p-4">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <Link 
              to="/#contact"
              className="bg-kvm-yellow text-kvm-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-bold shadow hover:shadow-md whitespace-nowrap inline-flex items-center justify-center"
              onClick={onClose}
            >
              Contact Us
            </Link>
            <a 
              href="tel:6477390354"
              className="border border-kvm-yellow text-kvm-yellow px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg hover:bg-kvm-yellow hover:text-kvm-black transition-all duration-300 font-medium whitespace-nowrap inline-flex items-center justify-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;