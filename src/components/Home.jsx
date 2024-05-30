import React from 'react';
import { Link } from 'react-scroll';
import video from '../assets/videobg.mp4';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <video autoPlay loop muted className="absolute inset-0 z-0 object-cover w-full h-full">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        <h1 className="text-[200px] justify-center align-items-center font-bold mb-4 text-[#9ed0e6]">Welcome to My Portfolio</h1>
      </div>
    </section>
  );
}

export default Home;