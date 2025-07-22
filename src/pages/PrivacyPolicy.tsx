import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-kvm-black mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                KVM International Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us for heavy-duty truck and trailer parts distribution.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Personal Information:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Contact details (name, company name, email address, phone number, mailing address)</li>
                <li>Business information (company size, fleet details, purchasing preferences)</li>
                <li>Payment information (billing address, payment method details)</li>
                <li>Account credentials if you create an account with us</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Automatically Collected Information:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address, browser type, operating system</li>
                <li>Website usage patterns, pages visited, time spent on site</li>
                <li>Referral sources and search terms used to find our site</li>
                <li>Device information and screen resolution</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Business Communication Information:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Inquiry details, service requests, and support communications</li>
                <li>Order history, parts specifications, and delivery preferences</li>
                <li>Feedback, reviews, and survey responses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">3. How We Use Your Information</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Primary Business Purposes:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Process and fulfill parts orders and service requests</li>
                <li>Provide customer support and technical assistance</li>
                <li>Maintain customer accounts and order history</li>
                <li>Communicate about orders, deliveries, and service updates</li>
                <li>Process payments and manage billing</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Marketing and Communication:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Send relevant product catalogs and parts availability updates</li>
                <li>Notify you of new products, services, and promotional offers</li>
                <li>Provide industry news and technical bulletins (with consent)</li>
                <li>Conduct customer satisfaction surveys</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Website and Service Improvement:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Analyze website usage to improve user experience</li>
                <li>Develop new products and services based on customer needs</li>
                <li>Conduct market research and business analytics</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">4. Information Sharing and Disclosure</h2>
              
              <h3 className="text-xl font-medium text-kvm-black mb-3">Business Partners:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Trusted suppliers and manufacturers to fulfill your orders</li>
                <li>Shipping and logistics partners for delivery services</li>
                <li>Payment processors for transaction handling</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Legal Requirements:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Comply with applicable laws, regulations, and legal processes</li>
                <li>Protect our rights, property, and safety, and that of our customers</li>
                <li>Respond to government requests and court orders</li>
              </ul>

              <h3 className="text-xl font-medium text-kvm-black mb-3">Business Transfers:</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>In connection with mergers, acquisitions, or asset sales</li>
              </ul>

              <p className="text-gray-700 font-medium">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement industry-standard security measures including:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and firewalls</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection</li>
                <li>Access controls and authentication measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain your information for as long as necessary to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Fulfill the purposes outlined in this policy</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Maintain business records as required by law</li>
                <li>Generally, customer data is retained for 7 years after last interaction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">7. Your Rights and Choices</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Analyze website performance and user behavior</li>
                <li>Provide personalized content and recommendations</li>
                <li>Enable certain website features and functionality</li>
              </ul>
              <p className="text-gray-700">You can control cookie settings through your browser preferences.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">9. Third-Party Links</h2>
              <p className="text-gray-700">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700">Your information may be transferred to and processed in countries other than your residence, subject to appropriate safeguards.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">11. Children's Privacy</h2>
              <p className="text-gray-700">Our services are not intended for individuals under 18 years of age.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-700">We may update this Privacy Policy periodically. We will notify you of material changes via email or website notice.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-kvm-black mb-4">13. Contact Information</h2>
              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Privacy Officer:</strong> info@kvmintls.com</p>
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

export default PrivacyPolicy;
