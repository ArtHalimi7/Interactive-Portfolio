import React, { useState } from 'react';
import logo from '../assets/a.png';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="absolute top-0 w-full bg-transparent z-20">
      <div className="bg-black shadow" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center py-4 px-2">
            <div className="flex-shrink-0">
              <a href="/">
                <input type="file" accept="image/*" className="hidden" id="logoInput" />
                <label htmlFor="logoInput">
                  <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
                </label>
              </a>
            </div>
            {/* Menu Button */}
            <button
              className="text-white hover:text-white md:hidden"
              onClick={toggleSidebar}
              id="open-sidebar"
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
            {/* Navbar Links */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-xl font-bold hover:text-blue-950" style={{color: '#9ed0e6'}}>
                Home
              </a>
              <a href="/services" className="text-xl font-bold hover:text-blue-950" style={{color: '#9ed0e6'}}>
                Gallery
              </a>
              <a href="/contact" className="text-xl font-bold hover:text-blue-950" style={{color: '#9ed0e6'}}>
                Contact
              </a>
              <a href="/about" className="text-xl font-bold hover:text-blue-950" style={{color: '#9ed0e6'}}>
                About Us
              </a>
            </div>
          </div>
          
          {/* Sidebar */}
          <div
            className={`absolute text-white text-center w-screen h-screen overflow-y-auto transition-transform ${
              isSidebarOpen ? '' : 'transform -translate-x-full'
            } ease-in-out duration-300 z-20 max-h-screen md:hidden`}
            id="sidebar"
            style={{ backgroundColor: '#00B4D8' }}
          >
            <div className="p-4">
              <ul className="mt-2 divide-y divide-white">
                <li className="py-2">
                  <a href="/" className="block text-xl hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <span className="relative">
                      Home
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a href="/about" className="block text-xl hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <span className="relative">
                      About
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a href="/services" className="block text-xl hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <span className="relative">
                      Services
                    </span>
                  </a>
                </li>
                <li className="py-2">
                  <a href="/contact" className="block text-xl hover:text-blue-950 transition-all duration-300 ease-in-out">
                    <span className="relative">
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
