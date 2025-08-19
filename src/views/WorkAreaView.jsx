// File: src/views/WorkAreaView.jsx
import React from 'react';

export const WorkAreaView = ({ data }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Work Areas</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((area, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">{area.icon}</span>
            </div>
            <h3 className="font-bold">{area.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);