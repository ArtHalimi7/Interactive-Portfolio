import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2
          className="text-5xl mt-48 md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4"
          style={{
            color: '#9ed0e6',
            position: 'relative',
            zIndex: 10,
            WebkitTextStroke: '2px white',
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
          About Me
        </h2>
      </motion.div>

      <motion.div
        className="about-container max-w-7xl mx-auto mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div
          className="relative backdrop-blur-md bg-[rgba(158,208,230,0.3)] rounded-lg p-6 w-full"
          style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
        >
          <p 
            className="text-lg md:text-xl lg:text-3xl text-white font-bold text-center"
            style={{ zIndex: 20 }}
          >
            <br /><br />
            I'm Art, <br />
            a passionate React developer currently open to new exciting opportunities. <br />
            I've just completed my internship at StarLabs as a React Developer. <br />
            I'm also pursuing my degree in Computer Science and Engineering at UBT. <br />
            I enjoy creating interactive web applications and constantly strive to enhance my skills and knowledge in the field.
            <br /><br /><br />
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;