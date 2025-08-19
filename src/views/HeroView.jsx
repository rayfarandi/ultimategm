import React from "react";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";

export const HeroView = ({ stats }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden py-8 sm:py-2">
      {/* Background image and overlay */}
      <div className="absolute inset-0">
        <img src={hero} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-orange-500/50"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }} //initial: Kondisi awal elemen (opacity 0 dan posisi y +80px)
        animate={{ opacity: 1, y: 0 }} //animate: Kondisi akhir elemen (opacity 1 dan posisi y 0)
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }} //initial: Kondisi awal elemen (opacity 0 dan posisi y +80px)
            animate={{ opacity: 1, y: 0 }} //animate: Kondisi akhir elemen (opacity 1 dan posisi y 0)
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="block text-white">ULTIMATE</span>
            <span className="block text-orange-500">CONSTRUCTION</span>
            <span className="block text-white">MANAGEMENT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }} //initial: Kondisi awal elemen (opacity 0 dan posisi y +80px)
            animate={{ opacity: 1, y: 0 }} //animate: Kondisi akhir elemen (opacity 1 dan posisi y 0)
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            Specialist construction management consultant with 25+ years of
            experience. From pre-construction to operation phase, we ensure
            project success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 80 }} //initial: Kondisi awal elemen (opacity 0 dan posisi y +80px)
            animate={{ opacity: 1, y: 0 }} //animate: Kondisi akhir elemen (opacity 1 dan posisi y 0)
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Our Services →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white hover:border-orange-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Get Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }} //initial: Kondisi awal elemen (opacity 0 dan posisi y +80px)
            animate={{ opacity: 1, y: 0 }} //animate: Kondisi akhir elemen (opacity 1 dan posisi y 0)
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center min-w-[180px]"
              >
                <div className="text-3xl font-bold mb-2 text-white">
                  {stat.value}
                  {stat.value.includes("+") ? "" : "+"}
                </div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

//transition: Konfigurasi durasi dan delay animasi
// Setiap elemen memiliki delay yang berbeda untuk menciptakan efek stagger:

// Heading: delay 0.2s
// Paragraph: delay 0.4s
// Buttons: delay 0.6s
// Stats: delay 0.8s
