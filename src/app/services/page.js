"use client";

import React, { useState } from 'react';
import { FaUserCog, FaChartLine, FaGraduationCap, FaWhatsapp, FaArrowRight, FaCheck, FaQuestionCircle } from 'react-icons/fa';
import Button from '../../components/ui/Button';

// export const metadata = {
//   title: 'Our Services - Pips Vision',
//   description: 'Professional forex trading services including account management, free gold signals, and comprehensive mentorship classes.',
// };

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('account');

  const tabContent = {
    account: {
      title: 'Account Management',
      icon: <FaUserCog className="text-5xl text-primary mb-6" />,
      description: 'Let our expert traders manage your forex account with proven strategies for consistent growth and managed risk.',
      features: [
        'Professional management by experienced traders',
        'Customized risk management based on your goals',
        'Regular performance reports',
        'Transparent fee structure',
        'No hidden charges or commissions',
        'Direct communication with your account manager'
      ],
      faqs: [
        {
          question: 'What is the minimum deposit required?',
          answer: 'The minimum deposit required for our account management service is $1,000. This allows us to effectively implement our strategies and manage risk properly.'
        },
        {
          question: 'How is performance measured?',
          answer: 'We measure performance through monthly return percentages, drawdown management, and risk-adjusted returns. You\'ll receive detailed monthly reports showing all trading activity and performance metrics.'
        },
        {
          question: 'What are your management fees?',
          answer: 'We operate on a performance-based fee structure - we only earn when you profit. Our standard fee is 25% of the monthly profits, with no fees charged during months without profit.'
        }
      ]
    },
    signals: {
      title: 'Gold Trading Signals',
      icon: <FaChartLine className="text-5xl text-primary mb-6" />,
      description: 'Receive daily gold trading signals with clear entry/exit points and stop loss levels to maximize your profits.',
      features: [
        'Daily gold trading signals',
        'Clear entry, stop loss, and take profit levels',
        'Technical analysis explanation with each signal',
        'Delivery via WhatsApp for immediate notification',
        'Historical performance tracking',
        'Additional market insights and commentary'
      ],
      faqs: [
        {
          question: 'How many signals do you provide daily?',
          answer: 'We typically provide 1-3 gold trading signals per day, depending on market conditions. We prioritize quality over quantity, so some days may have fewer signals if clear opportunities aren\'t present.'
        },
        {
          question: 'What is your average win rate?',
          answer: 'Our gold signals maintain an average win rate of 70-75% based on historical performance. However, past performance does not guarantee future results.'
        },
        {
          question: 'Do I need to be online all day to use the signals?',
          answer: 'No. Our signals include detailed entry, stop loss, and take profit levels so you can set your trades and let them run. We also send updates if market conditions change.'
        }
      ]
    },
    mentorship: {
      title: 'Mentorship Program',
      icon: <FaGraduationCap className="text-5xl text-primary mb-6" />,
      description: 'Learn forex trading from experienced professionals through our comprehensive mentorship program.',
      features: [
        'Structured curriculum from basics to advanced strategies',
        'Live trading sessions with professional traders',
        'One-on-one coaching and feedback',
        'Trading psychology and risk management focus',
        'Lifetime access to course materials',
        'Community of like-minded traders'
      ],
      faqs: [
        {
          question: 'How long is the mentorship program?',
          answer: 'Our core mentorship program runs for 12 weeks, with live sessions twice weekly. However, you\'ll receive lifetime access to all materials and ongoing community support after completion.'
        },
        {
          question: 'Is this suitable for complete beginners?',
          answer: 'Yes, our program is designed to accommodate both beginners and intermediate traders. We start with fundamentals and progressively advance to more complex strategies.'
        },
        {
          question: 'Will I be profitable after completing the program?',
          answer: 'While we provide all the knowledge and tools needed to become a profitable trader, success depends on your dedication, practice, and discipline in applying what you\'ve learned. Trading involves risk, and profitability requires consistent application of proper techniques.'
        }
      ]
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Professional forex trading services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section">
        <div className="container">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'account'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('account')}
            >
              Account Management
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'signals'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('signals')}
            >
              Gold Signals
            </button>
            <button
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === 'mentorship'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('mentorship')}
            >
              Mentorship
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-12">
              {tabContent[activeTab].icon}
              <h2 className="text-primary mb-4">{tabContent[activeTab].title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {tabContent[activeTab].description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {tabContent[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <span className="bg-accent text-white p-1 rounded-full mr-3 mt-1">
                      <FaCheck />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                {tabContent[activeTab].faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <FaQuestionCircle className="text-primary mr-2" />
                      {faq.question}
                    </h4>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                href={`https://wa.me/yourphonenumber?text=I'm interested in your ${tabContent[activeTab].title} service`}
                variant="primary"
                className="text-lg px-8 py-4"
                external
              >
                <FaWhatsapp className="mr-2" /> Inquire About This Service
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Service - WhatsApp Group */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="bg-primary text-white p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-semibold mb-4">Join Our WhatsApp Community</h3>
                <p className="text-blue-100 mb-4">
                  Get free trading insights, market analysis, and join a community of serious traders.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="mr-2 text-accent-light" /> Daily market updates
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2 text-accent-light" /> Free occasional signals
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="mr-2 text-accent-light" /> Trading education tips
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-right">
                <Button
                  href="https://chat.whatsapp.com/your-group-link"
                  variant="accent"
                  className="text-lg px-8 py-4"
                  external
                >
                  <FaWhatsapp className="mr-2" /> Join WhatsApp Group <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}