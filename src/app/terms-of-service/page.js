// src/app/terms-of-service/page.js
import React from 'react';

export const metadata = {
  title: 'Terms of Service - Pips Vision',
  description: 'Terms and conditions for using Pips Vision forex trading services. Understand our service agreement and your rights and responsibilities.',
};

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Terms of Service</h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                Last Updated: February 25, 2025
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                Welcome to Pips Vision. These Terms of Service ("Terms") govern your use of our website, services, and any related content provided by Pips Vision ("we," "our," or "us"). By accessing our website or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Service Description</h2>
              <p className="text-gray-700 mb-4">
                Pips Vision provides forex trading services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Account management services</li>
                <li>Trading signals (particularly for gold)</li>
                <li>Educational content and mentorship</li>
                <li>Market analysis and commentary</li>
              </ul>
              <p className="text-gray-700 mb-6">
                Our services are intended for informational and educational purposes only. We do not guarantee specific results or profits from trading activities based on our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">3. Risk Disclosure</h2>
              <p className="text-gray-700 mb-6">
                Foreign exchange (forex) trading involves substantial risk of loss and is not suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite before trading foreign exchange. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose.
              </p>
              <p className="text-gray-700 mb-6">
                Past performance of any trading system or methodology is not necessarily indicative of future results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on our website or in any communications.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">4. Account Registration and Eligibility</h2>
              <p className="text-gray-700 mb-6">
                To access certain features of our services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="text-gray-700 mb-6">
                You must be at least 18 years old and capable of forming a legally binding contract to use our services. By using our services, you represent and warrant that you meet these eligibility requirements.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">5. Fees and Payment</h2>
              <p className="text-gray-700 mb-6">
                We may charge fees for certain services. All fees will be clearly disclosed before you incur any charges. Payment terms may vary depending on the specific service. By using our paid services, you agree to pay all fees in accordance with the pricing and payment terms presented to you.
              </p>
              <p className="text-gray-700 mb-6">
                All payments are non-refundable unless otherwise specified in writing or required by applicable law. We reserve the right to change our pricing with reasonable notice.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">6. Intellectual Property Rights</h2>
              <p className="text-gray-700 mb-6">
                All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, software, and the design, selection, and arrangement thereof, are owned by Pips Vision, our licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-6">
                You may access, use, and display our website and content on a single computer or device for your personal, non-commercial use only. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our material without our express written consent.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">7. User Conduct</h2>
              <p className="text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Use our services for any illegal purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                <li>Interfere with or disrupt the operation of our services</li>
                <li>Engage in any activity that could harm our reputation or services</li>
                <li>Use our services to transmit any harmful code or material</li>
                <li>Impersonate another person or misrepresent your affiliation with any person or entity</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-primary">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, in no event shall Pips Vision, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
              </p>
              <p className="text-gray-700 mb-6">
                In no case shall our total liability exceed the amount you paid for our services during the six months preceding the event giving rise to the liability.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">9. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless Pips Vision, its directors, employees, partners, agents, suppliers, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">10. Termination</h2>
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">11. Changes to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">12. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms or our services shall be brought exclusively in the courts of [Your Jurisdiction].
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-primary">13. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-gray-700 mb-6">
                <strong>Email:</strong> legal@pipsvision.com<br />
                <strong>WhatsApp:</strong> +254796280700
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
