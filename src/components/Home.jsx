import React from 'react';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-transparent relative">
      {/* Video background */}
      <div className="fixed inset-0 z-0">
        <video autoPlay loop muted className="object-cover w-full h-full">
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Hero content */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-[1400px] lg:text-7xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center hero" 
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
          fontWeight: 'bold', alignItems: 'center', transition: '0.7s', color: '#9ed0e6' }} 
          onMouseOver={(e) => 
          { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '2px white'; }} 
          onMouseOut={(e) => 
          { e.target.style.color = 'white'; e.target.style.WebkitTextStroke = 'none'; }}>

          Welcome to My Portfolio
          
        </h1>
      </div>
    </section>
  );
}

export default Home;