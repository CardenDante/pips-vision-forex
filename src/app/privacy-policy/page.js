// src/app/privacy-policy/page.js
import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Pips Vision',
  description: 'Privacy policy for Pips Vision forex trading services. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Last Updated: February 25, 2025
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                At Pips Vision ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you provide to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, services, or communicate with us.
              </p>
              <p className="text-gray-700 mb-6">
                By accessing our website or using our services, you consent to the collection and use of information as described in this policy. We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal information.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect the following types of information:
              </p>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name, email address, phone number, and other contact details</li>
                <li>Payment information (processed securely through our payment processors)</li>
                <li>Trading experience and financial information related to our services</li>
                <li>Communication records when you contact us</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Device information (e.g., IP address, browser type, operating system)</li>
                <li>Usage data (e.g., pages visited, time spent on the site)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Sending service-related notifications and updates</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Improving our website and services</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Service providers who assist us in operating our business</li>
                <li>Financial institutions or payment processors to complete transactions</li>
                <li>Legal authorities when required by law or to protect our rights</li>
                <li>Business partners with your consent</li>
              </ul>
              <p className="text-gray-700 mb-6">
                We do not sell, rent, or trade your personal information to third parties for marketing purposes without your explicit consent.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing consent for processing your information</li>
                <li>Restricting or objecting to certain processing activities</li>
                <li>Data portability (receiving your data in a structured format)</li>
                <li>Lodging a complaint with a supervisory authority</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings. For more information about how we use cookies, please refer to our Cookie Policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Children's Privacy</h2>
              <p className="text-gray-700 mb-6">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Email:</strong> privacy@pipsvision.com<br />
                <strong>WhatsApp:</strong> +1234567890
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
