"use client";

import React, { useState } from 'react';
import { FaUserCog, FaChartLine, FaGraduationCap, FaWhatsapp, FaArrowRight, FaCheck, FaQuestionCircle } from 'react-icons/fa';
import Button from '../../components/ui/Button';

export default function ServicesContent() {
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
                href={`https://wa.me/254796280700?text=I'm interested in your ${tabContent[activeTab].title} service`}
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
      
      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-primary">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Clear and competitive pricing for our forex trading services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Account Management Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
              <div className="text-center mb-6">
                <FaUserCog className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Account Management</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">25%</span>
                  <span className="text-gray-600 ml-2">of Profits</span>
                </div>
                <p className="text-gray-500 mt-2">No profit, no fee</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">$1,000 minimum deposit</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Professional management</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Monthly performance reports</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Risk management focused</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Regular updates and communication</span>
                </li>
              </ul>
              
              <Button
                href="https://wa.me/254796280700?text=I'm interested in Account Management"
                variant="outline"
                className="w-full"
                external
              >
                Get Started
              </Button>
            </div>
            
            {/* Gold Signals Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-accent transform scale-105 relative z-10">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              
              <div className="text-center mb-6">
                <FaChartLine className="text-4xl text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Gold Signals</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-accent">$49</span>
                  <span className="text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-gray-500 mt-2">Cancel anytime</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">1-3 signals daily</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Entry & exit strategies</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Technical analysis</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">WhatsApp delivery</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Market commentary</span>
                </li>
              </ul>
              
              <Button
                href="https://wa.me/254796280700?text=I'm interested in Gold Signals"
                variant="accent"
                className="w-full"
                external
              >
                Subscribe Now
              </Button>
            </div>
            
            {/* Mentorship Pricing */}
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary">
              <div className="text-center mb-6">
                <FaGraduationCap className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Mentorship</h3>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">$100</span>
                  <span className="text-gray-600 ml-2">/program</span>
                </div>
                <p className="text-gray-500 mt-2">One-time payment</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">12-week curriculum</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Live trading sessions</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">One-on-one coaching</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Lifetime access to materials</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent mt-1 mr-2" />
                  <span className="text-gray-700">Trading community membership</span>
                </li>
              </ul>
              
              <Button
                href="https://wa.me/254796280700?text=I'm interested in the Mentorship Program"
                variant="outline"
                className="w-full"
                external
              >
                Enroll Now
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12 text-gray-600">
            <p>Have questions about our pricing or need a custom solution?</p>
            <Button
              href="/contact"
              variant="primary"
              className="mt-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      {/* Results & Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-primary">Results That Speak</h2>
            <p className="text-xl text-gray-600">
              Our clients experience consistent success with our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-primary">Gold Signals Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Win Rate</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-accent h-4 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-accent font-bold">75%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Avg. Risk/Reward</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-accent h-4 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-accent font-bold">1:2.5</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Monthly Signals</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-accent h-4 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                  <span className="text-accent font-bold">30-45</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Client Satisfaction</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-accent h-4 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <span className="text-accent font-bold">95%</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                *Performance data based on signals from January 2022 to December 2024. Past performance does not guarantee future results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-primary">Account Management Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Avg. Monthly Return</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-primary font-bold">6-12%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Max Drawdown</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="text-primary font-bold">15%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Profitable Months</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-primary font-bold">85%</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Client Retention</span>
                  <div className="w-2/3 bg-gray-200 rounded-full h-4">
                    <div className="bg-primary h-4 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <span className="text-primary font-bold">90%</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-500 mt-6">
                *Performance data based on managed accounts from January 2022 to December 2024. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              href="/contact"
              variant="primary"
              className="text-lg px-8 py-4"
            >
              Start Your Trading Journey <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}