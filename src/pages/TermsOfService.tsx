import Navbar from '../components/Navbar';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-kvm-black mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the KVM International Solutions website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">2. Description of Services</h2>
              <p className="text-gray-700 mb-4">KVM International Solutions provides:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Heavy-duty truck and trailer parts distribution</li>
                <li>Technical consultation and parts identification</li>
                <li>Custom sourcing and procurement services</li>
                <li>Logistics and delivery coordination</li>
                <li>After-sales support and warranty services</li>
                <li>Online catalog and ordering platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">3. User Accounts and Registration</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>You may need to create an account to access certain services</li>
                <li>You are responsible for maintaining account confidentiality</li>
                <li>You must provide accurate and complete information</li>
                <li>You must promptly update any changes to your information</li>
                <li>You are responsible for all activities under your account</li>
                <li>We reserve the right to suspend or terminate accounts for violations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">4. Ordering and Purchasing</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Order Process:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel orders</li>
                <li>Order confirmation constitutes acceptance of your order</li>
                <li>Pricing and availability are subject to change without notice</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Payment Terms:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Payment terms will be specified at time of order</li>
                <li>We accept various payment methods as indicated</li>
                <li>All prices are in Canadian dollars unless otherwise stated</li>
                <li>Applicable taxes will be added to orders</li>
                <li>Late payment may result in service suspension</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Shipping and Delivery:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Delivery times are estimates and not guaranteed</li>
                <li>Risk of loss transfers upon shipment</li>
                <li>You are responsible for inspection upon delivery</li>
                <li>Shipping costs are additional unless otherwise stated</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">5. Product Information and Warranties</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Product Specifications:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We strive for accuracy but specifications may vary</li>
                <li>Images are for illustration purposes only</li>
                <li>Compatibility verification is customer's responsibility</li>
                <li>Technical specifications subject to manufacturer changes</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Warranties:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Products carry manufacturer warranties where applicable</li>
                <li>We provide warranty coordination services</li>
                <li>Warranty terms vary by manufacturer and product</li>
                <li>Labor and installation costs are customer's responsibility</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">6. Returns and Exchanges</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Returns must be authorized in advance</li>
                <li>Products must be in original condition and packaging</li>
                <li>Return shipping costs may apply</li>
                <li>Restocking fees may apply to certain products</li>
                <li>Custom or special-order items may not be returnable</li>
                <li>Return period is typically 30 days from delivery</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">7. Use of Website</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Permitted Uses:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Legitimate business purposes related to truck parts</li>
                <li>Browsing products and services</li>
                <li>Placing orders and managing accounts</li>
                <li>Accessing technical information and support</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Prohibited Uses:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Unauthorized access or hacking attempts</li>
                <li>Uploading malicious software or code</li>
                <li>Interfering with website operation</li>
                <li>Harvesting user information</li>
                <li>Violating intellectual property rights</li>
                <li>Using automated systems without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">8. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Website content is proprietary to KVM International Solutions</li>
                <li>Product images and descriptions may be owned by manufacturers</li>
                <li>Trademarks and logos are property of respective owners</li>
                <li>You may not reproduce content without written permission</li>
                <li>User-generated content may be used by us for business purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">9. Privacy and Data Protection</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Your privacy is governed by our Privacy Policy</li>
                <li>We collect and use information as described in our Privacy Policy</li>
                <li>You consent to data processing as outlined in our policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">10. Limitation of Liability</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Service Disclaimer:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Services are provided "as is" without warranties</li>
                <li>We disclaim all warranties, express or implied</li>
                <li>No guarantee of uninterrupted or error-free service</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Liability Limitations:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Our liability is limited to the value of your order</li>
                <li>We are not liable for indirect, consequential, or punitive damages</li>
                <li>We are not responsible for third-party product defects</li>
                <li>Time limitations apply to claims</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">11. Indemnification</h2>
              <p className="text-gray-700">You agree to indemnify and hold us harmless from claims arising from your use of our services or violation of these terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">12. Force Majeure</h2>
              <p className="text-gray-700">We are not liable for delays or failures due to circumstances beyond our reasonable control, including natural disasters, strikes, or government actions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">13. Dispute Resolution</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Disputes will be resolved through good faith negotiation</li>
                <li>If necessary, disputes will be subject to binding arbitration</li>
                <li>Ontario law governs these terms</li>
                <li>Courts of Ontario have exclusive jurisdiction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">14. Termination</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Either party may terminate the relationship with notice</li>
                <li>We may suspend services for non-payment or violations</li>
                <li>Termination does not affect existing orders or obligations</li>
                <li>Certain provisions survive termination</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">15. Modifications to Terms</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>We reserve the right to modify these terms</li>
                <li>Material changes will be communicated via email or website notice</li>
                <li>Continued use constitutes acceptance of modified terms</li>
                <li>You should review terms periodically</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">16. Severability</h2>
              <p className="text-gray-700">If any provision is found unenforceable, the remaining provisions remain in effect.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">17. Entire Agreement</h2>
              <p className="text-gray-700">These terms constitute the entire agreement between parties regarding use of our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">18. Contact Information</h2>
              <p className="text-gray-700 mb-4">For questions about these terms:</p>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> info@kvmintls.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> (647) 739-0354</p>
                <p className="text-gray-700"><strong>Address:</strong> 6625 Tomken Road, Unit 6 & 7, Mississauga, ON L5T 2C2</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
