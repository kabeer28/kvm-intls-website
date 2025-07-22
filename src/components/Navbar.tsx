import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center group gap-6">
            <div className="relative">
              <img 
                src="/images/truck.png" 
                alt="Truck Logo" 
                className="h-24 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
              />
            </div>
            <img 
              src="/images/kvm.png" 
              alt="KVM Text Logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:translate-x-1" 
            />
          </Link>
          
          <div className="hidden md:flex space-x-16 items-center">
            <Link 
              to="/" 
              className={`relative px-0 py-2 flex flex-col items-center ${isActive('/') ? 'text-kvm-black font-bold' : 'text-gray-700 hover:text-kvm-black'} transition-colors duration-300`}
            >
              <span className="relative z-10">Home</span>
              {isActive('/') && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-kvm-yellow"></span>
              )}
            </Link>
            
            <Link 
              to="/products" 
              className={`relative px-0 py-2 flex flex-col items-center ${isActive('/products') ? 'text-kvm-black font-bold' : 'text-gray-700 hover:text-kvm-black'} transition-colors duration-300`}
            >
              <span className="relative z-10">Products</span>
              {isActive('/products') && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-kvm-yellow"></span>
              )}
            </Link>
            
            <Link 
              to="/about" 
              className={`relative px-0 py-2 flex flex-col items-center ${isActive('/about') ? 'text-kvm-black font-bold' : 'text-gray-700 hover:text-kvm-black'} transition-colors duration-300`}
            >
              <span className="relative z-10">About</span>
              {isActive('/about') && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-kvm-yellow"></span>
              )}
            </Link>
            
            <Link 
              to="/#contact" 
              className="relative px-0 py-2 flex flex-col items-center text-gray-700 hover:text-kvm-black transition-colors duration-300"
            >
              <span className="relative z-10">Contact</span>
            </Link>
          </div>
          
          <Link 
            to="/#contact"
            className="flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-kvm-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kvm-yellow transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
