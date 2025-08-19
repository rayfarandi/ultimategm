// File: src/views/TeamView.jsx
import React from 'react';

export const TeamView = ({ data }) => (
  <section id="team" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Expert Team</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our experienced professionals who bring decades of construction management expertise
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <div className="text-xs font-semibold text-orange-500">{member.title}</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm">Experience</h4>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm">Summary</h4>
                <p className="text-gray-600 text-sm">{member.summary}</p>
              </div>
              
              <div>
                <h4 className="font-bold text-sm">Education</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {member.education.map((edu, index) => (
                    <li key={index} className="list-disc list-inside">{edu}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-sm">Specialization</h4>
                <div className="flex flex-wrap gap-1">
                  {member.specialization.map((spec, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);