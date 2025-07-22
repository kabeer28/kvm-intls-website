import { useState, useEffect, useRef } from 'react';
import { Wrench, Award, Zap, Users, MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowRight, CheckCircle, Send, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import Navbar from '../components/Navbar';

// Import all product images
import airChamber from '../assets/images/parts/air-chamber.png';
import airDryers from '../assets/images/parts/air-dryers.png';
import airSprings from '../assets/images/parts/air-springs.png';
import airTanks from '../assets/images/parts/air-tanks.png';
import brakes from '../assets/images/parts/brakes.png';
import calipers from '../assets/images/parts/calipers.png';
import camshafts from '../assets/images/parts/camshafts.png';
import discPads from '../assets/images/parts/disc-pads.png';
import drums from '../assets/images/parts/drums.png';
import rotors from '../assets/images/parts/rotors.png';
import shocks from '../assets/images/parts/shocks.png';
import slackAdjusters from '../assets/images/parts/slack-adjusters.png';
import torqueRodAndDragLinks from '../assets/images/parts/torque-rod-and-drag-links.png';
import wheelSealsAndBearings from '../assets/images/parts/wheel-seals-and-bearings.png';

// All product images array
const productImages = [
  brakes,
  drums,
  rotors,
  discPads,
  shocks,
  airChamber,
  slackAdjusters,
  calipers,
  airSprings,
  camshafts,
  airDryers,
  wheelSealsAndBearings,
  airTanks,
  torqueRodAndDragLinks,
];

function HomePage() {
  const location = useLocation();
  const contactRef = useRef<HTMLElement | null>(null);
  
  // Handle scrolling to sections based on hash
  useEffect(() => {
    // Wait for page to fully render
    setTimeout(() => {
      if (location.hash === '#contact') {
        const contactSection = document.getElementById('contact');
        contactRef.current = contactSection;
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
  }, [location]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    // Create email subject and body formatted for Gmail
    const subject = formData.subject || `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}\n` +
                 `Email: ${formData.email}\n` +
                 `Phone: ${formData.phone || 'Not provided'}\n\n` +
                 `Message:\n${formData.message}`;
    
    // Open Gmail compose URL directly
    const emailTo = "info@kvmintls.com";
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailComposeUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-kvm-black text-white overflow-hidden h-[calc(100vh-4rem)] flex items-center">
        {/* Background Elements */}
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
          
          {/* Enhanced corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-3 border-l-3 border-kvm-yellow/30" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-3 border-r-3 border-kvm-yellow/30" />
          
          {/* Animation keyframes */}
          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes flow {
                0% { background-position: 0 0; }
                100% { background-position: 80px 80px; }
              }
            `
          }} />
        </div>
        {/* Subtle glow behind content */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-full max-w-6xl h-3/4 bg-kvm-yellow/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left pt-4 sm:pt-0">
              <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                Heavy Duty Truck & Trailer Parts
                <span className="text-kvm-yellow block animate-slide-in-right animation-delay-300"></span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                We're the leading commercial vehicle parts and components proudly serving the Greater Toronto Area with over 400 accounts and local manufacturing capabilities.
              </p>
              <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up animation-delay-900">
                <Link 
                  to="/products"
                  className="bg-kvm-yellow text-kvm-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-opacity-90 active:scale-95 transition-all transform hover:scale-105 font-bold text-base sm:text-lg text-center shadow-xl hover:shadow-2xl"
                >
                  Browse Parts Catalog
                </Link>
                <a 
                  href="#contact"
                  className="flex items-center justify-center border-2 border-kvm-yellow text-kvm-yellow px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-kvm-yellow hover:text-kvm-black transition-all font-bold text-base sm:text-lg group active:scale-95"
                >
                  Contact Sales
                  <ArrowRight className="inline h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
            
            {/* Right Column with Carousel and Stats */}
            <div className="space-y-4 sm:space-y-6">
              {/* Image Carousel */}
              <div className="relative h-[220px] xs:h-[260px] sm:h-[300px] lg:h-[350px] animate-slide-in-right animation-delay-300 overflow-hidden rounded-xl sm:rounded-2xl">
                <ImageCarousel 
                  images={productImages}
                  interval={5000}
                  className="h-full w-full"
                />
              </div>
              
              {/* Stats Grid */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-kvm-yellow/30 shadow-xl transition-all duration-500">
                <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl xs:text-3xl font-bold text-kvm-yellow animate-pulse-slow">400+</div>
                    <div className="text-xs xs:text-sm text-gray-300 mt-1">Accounts Served</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl xs:text-3xl font-bold text-kvm-yellow animate-pulse-slow animation-delay-100">25K+</div>
                    <div className="text-xs xs:text-sm text-gray-300 mt-1">Parts Available</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl xs:text-3xl font-bold text-kvm-yellow animate-pulse-slow animation-delay-200">Local</div>
                    <div className="text-xs xs:text-sm text-gray-300 mt-1">Manufacturing</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl xs:text-3xl font-bold text-kvm-yellow animate-pulse-slow animation-delay-300">GTA</div>
                    <div className="text-xs xs:text-sm text-gray-300 mt-1">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-kvm-black mb-3 sm:mb-4">Why Choose Us</h2>
            <div className="w-16 sm:w-20 h-1 bg-kvm-yellow mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
              We're committed to providing top-quality parts and exceptional service to keep your fleet moving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kvm-yellow/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Wrench className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">Expert Technicians</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Our team has decades of combined experience in heavy-duty vehicle parts.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kvm-yellow/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">Quality Parts</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">We source only the highest quality parts from trusted manufacturers.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kvm-yellow/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Quick turnaround times to minimize your vehicle's downtime.</p>
            </div>
            
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-kvm-yellow/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2">Customer Focus</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Your satisfaction is our top priority. We're here to help 24/7.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-kvm-black mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive heavy-duty parts distribution with local manufacturing capabilities and authorized dealer partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-t-4 border-kvm-yellow group animate-slide-in-up">
              <div className="bg-kvm-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wrench className="h-8 w-8 text-kvm-black" />
              </div>
              <h3 className="text-xl font-bold text-kvm-black mb-4">Brake Shoes Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Locally manufactured brake shoes in Mississauga with premium quality standards and rapid delivery times.
              </p>
              <a 
                href="#contact"
                className="flex items-center text-kvm-black font-semibold group-hover:text-kvm-yellow transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-t-4 border-kvm-yellow group animate-slide-in-up animation-delay-200">
              <div className="bg-kvm-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-kvm-black" />
              </div>
              <h3 className="text-xl font-bold text-kvm-black mb-4">Marathon Shocks</h3>
              <p className="text-gray-600 mb-4">
                Authorized distributor for Marathon shock absorbers, providing superior ride quality and durability.
              </p>
              <Link to="/products" className="flex items-center text-kvm-black font-semibold hover:text-kvm-yellow transition-colors group">
                <span>View Catalog</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-t-4 border-kvm-yellow group animate-slide-in-up animation-delay-400">
              <div className="bg-kvm-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-8 w-8 text-kvm-black" />
              </div>
              <h3 className="text-xl font-bold text-kvm-black mb-4">Torque Airbags</h3>
              <p className="text-gray-600 mb-4">
                Premium Torque airbag systems for enhanced suspension performance and load management.
              </p>
              <a 
                href="#contact"
                className="flex items-center text-kvm-black font-semibold group-hover:text-kvm-yellow transition-colors"
              >
                <span>Get Quote</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-t-4 border-kvm-yellow group animate-slide-in-up animation-delay-600">
              <div className="bg-kvm-yellow/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-kvm-black" />
              </div>
              <h3 className="text-xl font-bold text-kvm-black mb-4">Automann Partnership</h3>
              <p className="text-gray-600 mb-4">
                Access to 25,000+ parts through our exclusive partnership with Automann for comprehensive coverage.
              </p>
              <Link to="/products" className="flex items-center text-kvm-black font-semibold hover:text-kvm-yellow transition-colors group">
                <span>Browse Parts</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-kvm-black mb-6">Industry Leaders in Heavy-Duty Parts Distribution</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                KVM International Solutions has established itself as the premier distributor of heavy-duty truck and trailer parts across the Greater Toronto Area. Our commitment to quality, local manufacturing capabilities, and extensive network of partnerships make us the trusted choice for over 400 accounts.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start animate-fade-in-up">
                  <Users className="h-6 w-6 text-kvm-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">400+ Active Accounts</h4>
                    <p className="text-gray-600 text-sm">Serving businesses across the GTA with reliable parts supply</p>
                  </div>
                </div>
                <div className="flex items-start animate-fade-in-up animation-delay-200">
                  <Award className="h-6 w-6 text-kvm-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">Local Manufacturing</h4>
                    <p className="text-gray-600 text-sm">Brake shoes manufactured in Mississauga for quick delivery</p>
                  </div>
                </div>
                <div className="flex items-start animate-fade-in-up animation-delay-400">
                  <MapPin className="h-6 w-6 text-kvm-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">GTA Coverage</h4>
                    <p className="text-gray-600 text-sm">Comprehensive service area throughout Greater Toronto</p>
                  </div>
                </div>
                <div className="flex items-start animate-fade-in-up animation-delay-600">
                  <Clock className="h-6 w-6 text-kvm-yellow mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">25,000+ Parts</h4>
                    <p className="text-gray-600 text-sm">Extensive inventory through strategic partnerships</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-kvm-yellow/10 to-gray-50 rounded-2xl p-8 border border-kvm-yellow/20 shadow-2xl animate-slide-in-right">
              <h3 className="text-2xl font-bold text-kvm-black mb-6">Why Choose KVM Intls?</h3>
              <div className="space-y-4">
                <div className="flex items-center animate-slide-in-right animation-delay-200">
                  <CheckCircle className="h-5 w-5 text-kvm-yellow mr-3" />
                  <span className="text-gray-700">Local manufacturing for faster delivery times</span>
                </div>
                <div className="flex items-center animate-slide-in-right animation-delay-400">
                  <CheckCircle className="h-5 w-5 text-kvm-yellow mr-3" />
                  <span className="text-gray-700">Authorized dealer for premium brands</span>
                </div>
                <div className="flex items-center animate-slide-in-right animation-delay-600">
                  <CheckCircle className="h-5 w-5 text-kvm-yellow mr-3" />
                  <span className="text-gray-700">Comprehensive parts catalog with 25,000+ items</span>
                </div>
                <div className="flex items-center animate-slide-in-right animation-delay-800">
                  <CheckCircle className="h-5 w-5 text-kvm-yellow mr-3" />
                  <span className="text-gray-700">Dedicated service throughout the GTA</span>
                </div>
                <div className="flex items-center animate-slide-in-right animation-delay-1000">
                  <CheckCircle className="h-5 w-5 text-kvm-yellow mr-3" />
                  <span className="text-gray-700">Proven track record with 400+ satisfied accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-kvm-black mb-4">Authorized Brand Partners</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              We work with industry-leading manufacturers to bring you the highest quality parts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-kvm-yellow hover:-translate-y-4 group animate-slide-in-up">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/logos/marathon-logo.png"
                  alt="Marathon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Marathon</h3>
              <p className="text-gray-600 mb-4">
                Authorized distributor for Marathon shock absorbers, known for their superior performance and reliability in heavy-duty applications.
              </p>
              <div className="bg-kvm-yellow/10 rounded-lg p-4 border border-kvm-yellow/20 group-hover:bg-kvm-yellow/20 transition-colors">
                <span className="text-kvm-black font-semibold">Premium Shock Systems</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-kvm-yellow hover:-translate-y-4 group animate-slide-in-up animation-delay-200">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/logos/silverback-logo.png"
                  alt="Silverback"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Silverback</h3>
              <p className="text-gray-600 mb-4">
                Trusted partner for premium heavy-duty components, delivering exceptional quality and performance for commercial vehicle applications.
              </p>
              <div className="bg-kvm-yellow/10 rounded-lg p-4 border border-kvm-yellow/20 group-hover:bg-kvm-yellow/20 transition-colors">
                <span className="text-kvm-black font-semibold">Heavy-Duty Components</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-kvm-yellow hover:-translate-y-4 group animate-slide-in-up animation-delay-400">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/logos/automann-logo.png"
                  alt="Automann"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Automann</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnership providing access to over 25,000 parts, ensuring comprehensive coverage for all your heavy-duty needs.
              </p>
              <div className="bg-kvm-yellow/10 rounded-lg p-4 border border-kvm-yellow/20 group-hover:bg-kvm-yellow/20 transition-colors">
                <span className="text-kvm-black font-semibold">25,000+ Parts Available</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-kvm-yellow hover:-translate-y-4 group animate-slide-in-up animation-delay-600">
              <div className="w-32 h-32 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/logos/brakeworks-logo.png"
                  alt="Brakeworks"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Brakeworks</h3>
              <p className="text-gray-600 mb-4">
                Authorized distributor for Brakeworks brake systems and components, providing reliable stopping power for commercial vehicles.
              </p>
              <div className="bg-kvm-yellow/10 rounded-lg p-4 border border-kvm-yellow/20 group-hover:bg-kvm-yellow/20 transition-colors">
                <span className="text-kvm-black font-semibold">Professional Brake Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-12 sm:py-16 md:py-20 bg-kvm-black text-white"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
            <div className="w-16 sm:w-20 h-1 bg-kvm-yellow mx-auto mb-4 sm:mb-6"></div>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-2">
              Have questions about our products or services? Our team is here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Our Location</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">6625 Tomken Road, Unit 6 & 7, Mississauga, ON L5T 2C2</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
                    <a href="tel:+16477390354" className="text-xs sm:text-sm text-gray-400 hover:text-kvm-yellow transition-colors mt-0.5 block">+1 (647) 739-0354</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/10 p-2.5 sm:p-3 rounded-full mr-3 sm:mr-4 mt-0.5 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-kvm-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                    <a href="mailto:info@kvmtruckparts.com" className="text-xs sm:text-sm text-gray-400 hover:text-kvm-yellow transition-colors mt-0.5 block break-all">info@kvmtruckparts.com</a>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold text-sm sm:text-base mb-3">Business Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs sm:text-sm">Monday - Friday</span>
                    <span className="text-xs sm:text-sm">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs sm:text-sm">Saturday</span>
                    <span className="text-xs sm:text-sm">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 text-xs sm:text-sm">Sunday</span>
                    <span className="text-xs sm:text-sm">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl">
              <h3 className="text-xl font-bold mb-4 sm:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 text-sm sm:text-base bg-white/5 border border-gray-700 rounded-lg focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kvm-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kvm-yellow transition-colors"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kvm-black text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h3 className="font-bold text-white text-lg sm:text-xl mb-4">KVM International Solutions</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-5 leading-relaxed">Industry leaders in heavy-duty truck and trailer parts distribution across the Greater Toronto Area.</p>
              <div className="flex space-x-3">
                <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all" aria-label="Facebook">
                  <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
                <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all" aria-label="Twitter">
                  <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
                <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all" aria-label="Instagram">
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
                <a href="#" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </a>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <h4 className="font-semibold text-kvm-yellow text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
              <address className="not-italic text-gray-400 text-xs sm:text-sm leading-relaxed">
                <p>6625 Tomken Road, Unit 6 & 7, Mississauga, ON L5T 2C2</p>
                <p className="mt-2">Phone: <a href="tel:6477390354" className="hover:text-white transition-colors">(647) 739-0354</a></p>
                <p>Email: <a href="mailto:info@kvmintls.com" className="hover:text-white transition-colors">info@kvmintls.com</a></p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} KVM Truck Parts. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors whitespace-nowrap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default HomePage;