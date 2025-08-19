
import React from 'react';
import logo from '../assets/ultlogo.png';

export const FooterView = () => (
  <footer className="bg-blue-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-3">
                    <img 
                        src={logo} 
                        alt="PT Ultimate Construction Management Logo" 
                        className="h-8 w-auto"
                      />
                    <div className="text-yellow-300 text-sm ml-1">CONSTRUCTION MANAGEMENT</div>
                  </div>
          <p className="text-blue-100 text-sm mb-4">
            Specialist construction management consultant with 25+ years of experience, covering all phases from pre-construction to operation.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Contact Information</h3>
          <div className="space-y-3 text-blue-100">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.707 12.707l-3.95 3.95a2 2 0 11-2.828-2.828l3.95-3.95-3.95-3.95a2 2 0 112.828-2.828l3.95 3.95 3.95-3.95a2 2 0 112.828 2.828l-3.95 3.95 3.95 3.95a2 2 0 11-2.828 2.828z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18a6 6 0 006-6v-2a6 6 0 00-6-6h-2a6 6 0 00-6 6v2a6 6 0 006 6h2z" />
              </svg>
              <span>Jl. Margasatwa Raya No. 17A<br />Pondok Labu, Jakarta Selatan</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-1.518.759a11.042 11.042 0 006.105 6.105l.759-1.518a1 1 0 011.06-.54l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(021) 7696330</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>(021) 7660204</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>ultimatecm@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <div className="grid grid-cols-2 gap-2 text-blue-100">
            <div>Pre-Construction</div>
            <div>Construction</div>
            <div>Maintenance</div>
            <div>Engineering</div>
            <div>Quality Control</div>
            <div>Project Management</div>
            <div>Procurement</div>
            <div>Safety Management</div>
            <div className="mt-4">Work Areas</div>
            <div>Building</div>
            <div>Harbor</div>
            <div>Highway</div>
            <div>Telecommunication</div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-blue-100 text-sm">
          © 2024 PT Ultimate Construction Management. All rights reserved.
        </p>
        <p className="text-blue-100 text-sm mt-4 md:mt-0">
          Professional Construction Management Services Since 1995
        </p>
      </div>
    </div>
  </footer>
);