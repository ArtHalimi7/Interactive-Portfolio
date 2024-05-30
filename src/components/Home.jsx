import React from 'react';
import video from '../assets/videobg.mp4';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      <video autoPlay loop muted className="absolute inset-0 z-0 object-cover w-full h-full">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h1 className="text-[200px] font-bold mb-4 text-[#9ed0e6] text-center hero" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '180px', fontWeight: 'bold', alignItems: 'center', transition: '0.7s', color: '#9ed0e6' }} onMouseOver={(e) => { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '2px white'; }} onMouseOut={(e) => { e.target.style.color = 'white'; e.target.style.WebkitTextStroke = 'none'; }}>
          Welcome to My Portfolio
        </h1>
      </div>
    </section>
  );
}

export default Home;