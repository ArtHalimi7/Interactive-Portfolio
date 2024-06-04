import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='home' className="min-h-screen flex flex-col items-center justify-center bg-transparent relative">
      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Hero content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center hero" 
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          fontWeight: 'bold', alignItems: 'center', transition: '0.7s', color: '#9ed0e6' }} 
          onMouseOver={(e) => 
          { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '2px white'; }} 
          onMouseOut={(e) => 
          { e.target.style.color = '#9ed0e6'; e.target.style.WebkitTextStroke = 'none'; }}
        >
          Welcome to My Portfolio
        </h1>
      </div>
      {/* Floating button */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a onClick={scrollToNextSection} style={{ cursor: 'pointer' }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-blue-200 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Home;