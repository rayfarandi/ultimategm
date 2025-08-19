import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ServicesView = ({ data, activeTab, setActiveTab }) => {
  const currentServices = data.services[activeTab] || [];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction management services covering all phases
            of your project
          </p>
        </div>

        {/* Tabs */}
        <div className="flex mb-12">
          <div className="w-full grid grid-cols-3 bg-gray-100">
            {data.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center gap-2 py-6 px-4 transition-colors duration-200 ${
                  activeTab === tab
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:text-blue-900"
                }`}
              >
                {tab === "Pre-Construction" && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                )}
                {tab === "Construction" && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                )}
                {tab === "Maintenance" && (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.638 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
                <span>{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid and animated*/}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md border"
              >
                <div className="flex mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>

                {service.items && service.items.length > 0 && (
                  <ul className="space-y-2">
                    {service.items.map((item, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                )}

                {!service.items?.length && (
                  <p className="text-sm text-gray-600">{service.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Additional Services Section */}
        <AnimatePresence>
          {activeTab === "Construction" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 "
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-100 rounded-xl shadow-md p-6"
              >
                <h3 className="font-bold text-lg mb-4">Additional Services</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">Procurement</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Nominated sub-contractor</li>
                      <li>• Supplied by owner</li>
                      <li>• Domestic sub-contractor</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Management</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Document control</li>
                      <li>• Progress control</li>
                      <li>• Safety & security</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              <motion.div className="bg-gray-50 rounded-xl shadow-md p-6">
                <h3 className="font-bold text-lg mb-4">Project Completion</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">Handover</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Partial</li>
                      <li>• Practical</li>
                      <li>• Final</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Finishing</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Commissioning</li>
                      <li>• Fitting out</li>
                      <li>• Interior furnishings</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
