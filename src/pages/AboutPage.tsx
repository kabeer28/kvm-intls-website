import { ArrowRight, Target, Award, Users, CheckCircle, Phone, Mail, MapPin, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AboutPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kvm-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kvm-yellow/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-block animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About 
                <span className="text-kvm-yellow block animate-slide-in-right animation-delay-300">KVM International</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
              Leading provider of heavy commercial vehicle parts, committed to excellence and reliability in the transportation industry.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-kvm-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-kvm-yellow/5 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-500"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-kvm-yellow/10 to-gray-50 rounded-3xl p-8 border border-kvm-yellow/20 shadow-2xl">
                <div className="bg-kvm-yellow/20 w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-pulse-slow">
                  <Wrench className="h-10 w-10 text-kvm-black" />
                </div>
                <h2 className="text-4xl font-bold text-kvm-black mb-6">Leading Provider of Heavy Commercial Vehicle Parts</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  KVM International is a prominent distributor of heavy commercial vehicle parts, strategically located in Mississauga, Ontario. We are committed to providing our valued customers with best-in-class components and exceptional service, ensuring the continued success of their transportation operations.
                </p>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-in-right animation-delay-300">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-kvm-yellow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Target className="h-6 w-6 text-kvm-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-kvm-black mb-3">Strategic Location</h3>
                    <p className="text-gray-600">
                      Perfectly positioned in Mississauga, Ontario, serving the Greater Toronto Area with unmatched accessibility and service coverage.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-kvm-yellow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animation-delay-200">
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-6 w-6 text-kvm-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-kvm-black mb-3">Best-in-Class Components</h3>
                    <p className="text-gray-600">
                      Delivering superior-grade components that consistently surpass industry benchmarks for reliability and performance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-kvm-yellow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animation-delay-400">
                <div className="flex items-start">
                  <div className="bg-kvm-yellow/20 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-kvm-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-kvm-black mb-3">Exceptional Service</h3>
                    <p className="text-gray-600">
                      Committed to exceeding expectations with personalized service and dedicated support for your transportation operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-kvm-black mb-6">Our Mission</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 animate-scale-in">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-kvm-yellow/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-slow">
                <Target className="h-12 w-12 text-kvm-black" />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                KVM International prioritizes operational excellence in the heavy commercial vehicle parts sector. Our mission is to equip the transportation industry with superior-grade components, thereby maximizing uptime and efficiency for your fleet.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Recognizing the paramount importance of reliability and durability in your operations, we are dedicated to exceeding expectations by delivering products that consistently surpass industry benchmarks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-kvm-black mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-slide-in-up">
              <div className="bg-gradient-to-br from-kvm-yellow/20 to-kvm-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Wrench className="h-6 w-6 text-kvm-yellow" />
                  <span className="text-sm font-semibold text-kvm-yellow">25+ Years Experience</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Committed to delivering superior quality in every component and service we provide to our valued customers.
              </p>
            </div>
            
            <div className="text-center group animate-slide-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-kvm-yellow/20 to-kvm-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <CheckCircle className="h-10 w-10 text-kvm-black" />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Building trust through consistent performance and dependable service that keeps your fleet operational.
              </p>
            </div>
            
            <div className="text-center group animate-slide-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-kvm-yellow/20 to-kvm-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Users className="h-10 w-10 text-kvm-black" />
              </div>
              <h3 className="text-2xl font-bold text-kvm-black mb-4">Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Working closely with our clients to understand their unique needs and provide tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-kvm-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kvm-yellow/10 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Call to Inquire</h2>
            <div className="w-24 h-1 bg-kvm-yellow mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              To discuss your specific requirements and obtain a personalized quote for our heavy commercial vehicle parts and services, please contact our dedicated team. Our knowledgeable representatives are available to assist you in selecting the optimal solutions to meet the unique needs of your fleet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-slide-in-up animation-delay-300">
            <button 
              onClick={() => window.location.href = 'tel:+16477390354'}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-kvm-yellow/30 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 group"
            >
              <Phone className="h-8 w-8 text-kvm-yellow mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">(647) 739-0354</p>
              <p className="text-sm text-kvm-yellow mt-2">Click to call</p>
            </button>
            
            <button 
              onClick={() => window.location.href = 'mailto:info@kvmintls.com'}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-kvm-yellow/30 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animation-delay-200 group"
            >
              <Mail className="h-8 w-8 text-kvm-yellow mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@kvmintls.com</p>
              <p className="text-sm text-kvm-yellow mt-2">Click to email</p>
            </button>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-kvm-yellow/30 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2 animation-delay-400">
              <MapPin className="h-8 w-8 text-kvm-yellow mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Mississauga, ON</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link 
              to="/#contact"
              className="bg-kvm-yellow text-kvm-black px-8 py-4 rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
            >
              Get Personalized Quote
            </Link>
            <Link 
              to="/products"
              className="border-2 border-kvm-yellow text-kvm-yellow px-8 py-4 rounded-lg hover:bg-kvm-yellow hover:text-kvm-black transition-all duration-300 font-bold text-lg inline-flex items-center justify-center group"
            >
              Browse Our Products
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-24 h-24 bg-kvm-yellow/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-float animation-delay-1000"></div>
      </section>


    </div>
  );
}

export default AboutPage;