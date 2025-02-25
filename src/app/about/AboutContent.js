"use client";

import React from 'react';
import { FaCheck, FaChartLine, FaUsers, FaGraduationCap } from 'react-icons/fa';

export default function AboutContent() {
  const milestones = [
    {
      year: '2018',
      title: 'Founded',
      description: 'Pips Vision was established with a mission to provide honest forex trading services.',
    },
    {
      year: '2019',
      title: 'First 100 Clients',
      description: 'Reached our first 100 clients milestone through reliable services and word-of-mouth.',
    },
    {
      year: '2020',
      title: 'Gold Signals Launch',
      description: 'Launched our specialized gold trading signals service with high success rate.',
    },
    {
      year: '2021',
      title: 'Mentorship Program',
      description: 'Started our comprehensive forex mentorship program to educate traders.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded our services to clients across multiple continents.',
    },
  ];

  const values = [
    {
      icon: <FaChartLine className="text-4xl text-accent mb-4" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from trading strategies to client communication.',
    },
    {
      icon: <FaUsers className="text-4xl text-accent mb-4" />,
      title: 'Transparency',
      description: 'We maintain complete transparency in our operations and results, building trust with our clients.',
    },
    {
      icon: <FaGraduationCap className="text-4xl text-accent mb-4" />,
      title: 'Education',
      description: 'We believe in empowering traders through knowledge and continuous learning.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About Pips Vision</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Your trusted partner in the forex trading journey
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Pips Vision was founded in 2018 by a team of passionate forex traders who believed in a different approach to trading services. We saw that many trading services lacked transparency, education, and genuine care for their clients' success.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders combined their decades of trading experience to create a service that prioritizes both results and education. We don't just aim to make profits for our clients; we aim to make them better traders.
              </p>
              <p className="text-lg text-gray-700">
                Today, Pips Vision serves clients worldwide, with a growing community of traders who trust our signals, management services, and educational resources.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To provide honest, professional, and effective forex trading services that help our clients achieve consistent profits while developing the skills needed for long-term success.
              </p>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To become the most trusted name in forex trading services by setting new standards for transparency, education, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-primary">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at Pips Vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex flex-col items-center">
                  {value.icon}
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4 text-primary">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones that have shaped Pips Vision
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center z-10">
                    {milestone.year}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}