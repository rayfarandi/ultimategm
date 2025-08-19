// File: src/views/ProjectsView.jsx
import React from 'react';

export const ProjectsView = ({ data }) => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Showcasing our expertise across residential, hospitality, and commercial projects
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="relative mb-4 overflow-hidden">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                {project.category}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-3">{project.location}</p>
            <p className="text-gray-600 text-sm mb-4">{project.description}</p>
            
            <div>
              <h4 className="font-bold text-sm mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-1">
                {project.features.map((feature, index) => (
                  <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);