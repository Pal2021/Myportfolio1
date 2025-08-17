// src/components/Services.jsx
import React from "react";
import { services, techLogos } from "../data/portfolioData";

const Services = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
        <p className="text-lg text-gray-600">What I can help you build</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    <span className="mr-2">{techLogos[tech] || "🔧"}</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
