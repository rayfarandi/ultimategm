import React from "react";

export const AboutView = ({ data }) => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">{data.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
          <p className="text-gray-600 mb-6">{data.philosophy}</p>

          <h3 className="text-2xl font-bold mb-4">Our Background</h3>
          <p className="text-gray-600 mb-6">{data.background}</p>

          <h4 className="font-bold mb-2">Key Services</h4>
          <ul className="space-y-2">
            {data.keyServices.map((service, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-orange-500 mt-0.5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h4 className="text-center font-bold mb-2">Strategic</h4>
            <p className="text-center text-gray-600 text-sm">
              Strategic approach to project management and delivery
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-center font-bold mb-2">Reliable</h4>
            <p className="text-center text-gray-600 text-sm">
              25+ years of proven track record in construction management
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707-.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h4 className="text-center font-bold mb-2">Innovative</h4>
            <p className="text-center text-gray-600 text-sm">
              Modern solutions for complex construction challenges
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-center font-bold mb-2">Quality</h4>
            <p className="text-center text-gray-600 text-sm">
              High-quality results from pre-construction to operation
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
