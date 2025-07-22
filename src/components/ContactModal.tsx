import React, { useState } from 'react';
import { X, Send, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      return;
    }

    // Create email subject and body
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0A` +
                 `Email: ${formData.email}%0D%0A` +
                 `Phone: ${formData.phone || 'Not provided'}%0D%0A%0D%0A` +
                 `Message:%0D%0A${formData.message}`;
    
    // Open default email client
    window.location.href = `mailto:info@kvmintls.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Close the modal after a short delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  if (!isOpen) return null;

  const contactInfo = {
    email: 'info@kvmintls.com',
    phone: '(647) 739-0354',
    address: '6625 Tomken Road, Unit 6 & 7, Mississauga, ON L5T 2C2'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-kvm-black">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close contact form"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-kvm-black mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Ready to partner with the GTA's leading heavy-duty parts distributor? Contact our team today for personalized service and competitive pricing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <MapPin className="h-6 w-6 text-kvm-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-kvm-black mb-1">Our Location</h4>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="h-6 w-6 text-kvm-yellow mr-4" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">Email Us</h4>
                    <a href={`mailto:${contactInfo.email}`} className="text-kvm-blue hover:underline">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Phone className="h-6 w-6 text-kvm-yellow mr-4" />
                  <div>
                    <h4 className="font-semibold text-kvm-black">Call Us</h4>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-kvm-blue hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-kvm-black mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-kvm-yellow focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-kvm-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kvm-yellow transition-colors"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;