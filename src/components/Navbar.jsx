import React, { useState, useEffect } from 'react';
import logo from '../assets/a.png';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false); // Close sidebar when a link is clicked
  };

  const handleClickOutside = (event) => {
    if (isSidebarOpen && !event.target.closest('#sidebar, #open-sidebar')) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`fixed top-0 w-full z-30 ${isScrolled ? 'bg-black' : 'bg-transparent'} transition-colors duration-300`}>
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        <a href="/">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </a>
        <button
          id="open-sidebar"
          className="text-white md:hidden"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white font-semibold hover:text-teal-300 transition-colors duration-300" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="text-white font-semibold hover:text-teal-300 transition-colors duration-300" onClick={handleLinkClick}>
            About
          </a>
          <a href="#projects" className="text-white font-semibold hover:text-teal-300 transition-colors duration-300" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#experience" className="text-white font-semibold hover:text-teal-300 transition-colors duration-300" onClick={handleLinkClick}>
            Experience
          </a>
          <a href="#contact" className="text-white font-semibold hover:text-teal-300 transition-colors duration-300" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`fixed top-0 right-0 w-64 bg-[#a0d4e4] text-gray-800 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out h-[35vh] rounded-l-lg`}
      >
        <div className="flex flex-col p-4 h-full">
          <button
            className="self-end text-white mb-4"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex flex-col space-y-2">
            <a href="#home" className="text-xl font-bold text-white border-b border-white pb-2" onClick={handleLinkClick}>
              Home
            </a>
            <a href="#about" className="text-xl font-bold text-white border-b border-white pb-2" onClick={handleLinkClick}>
              About
            </a>
            <a href="#projects" className="text-xl font-bold text-white border-b border-white pb-2" onClick={handleLinkClick}>
              Projects
            </a>
            <a href="#experience" className="text-xl font-bold text-white border-b border-white pb-2" onClick={handleLinkClick}>
              Experience
            </a>
            <a href="#contact" className="text-xl font-bold text-white border-b border-white" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;