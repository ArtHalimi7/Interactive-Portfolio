import React from 'react';
import { motion } from 'framer-motion';
import Slider2 from './Slider';

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-[-240px]"
      >
        <h2
          className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-[#9ed0e6]"
          style={{
            color: '#9ed0e6',
            transition: 'color 0.3s, WebkitTextStroke 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.color = 'transparent';
            e.target.style.WebkitTextStroke = '2px white';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#9ed0e6';
            e.target.style.WebkitTextStroke = 'none';
          }}
        >
          My Projects
        </h2>
      </motion.div>

      <motion.div
        className="projects-container mt-12 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative backdrop-blur-lg bg-[rgba(158,208,230,0.3)] rounded-lg p-6">
          <Slider2 />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;