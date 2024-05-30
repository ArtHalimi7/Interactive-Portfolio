import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <nav className="flex space-x-4">
        <Link to="about" smooth className="text-blue-500">About</Link>
        <Link to="projects" smooth className="text-blue-500">Projects</Link>
        <Link to="contact" smooth className="text-blue-500">Contact</Link>
      </nav>
    </section>
  );
}

export default Home;