import React from 'react'
import Slider2 from './Slider'

const Projects = () => {
  return (
    <>
          <br /> <br />
          <br /> <br />

    <h2 
        className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center" 
        style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)', 
        fontWeight: 'bold', alignItems: 'center', transition: '0.7s', color: '#9ed0e6' }} 
        onMouseOver={(e) => 
        { e.target.style.color = 'transparent'; e.target.style.WebkitTextStroke = '2px white'; }} 
        onMouseOut={(e) => 
        { e.target.style.color = '#9ed0e6'; e.target.style.WebkitTextStroke = 'none'; }}
      >
        My projects
      </h2>
      <br /> <br />
      <br /> <br />
      <br /> <br />

      <Slider2 /></>
  )
}

export default Projects