import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ViewMoreButton from './ViewMore'; 
import header from '../assets/header2.png';
import header3 from '../assets/header3.png';
import header4 from '../assets/header4.png';

const Slider2 = () => {
  const [expandedSlides, setExpandedSlides] = useState([false, false, false]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const toggleExpand = (index) => {
    setExpandedSlides(prevState =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="relative mx-8" style={{ maxWidth: '1200px', marginLeft: '300px' }}>
      <Slider {...settings}>
        <div className="relative">
          <img src={header} alt="Slide 1" className="w-full h-auto object-cover slider-image" />
          <ViewMoreButton 
            expanded={expandedSlides[0]} 
            onClick={() => toggleExpand(0)} 
            text="This is the text for Slide 1. Welcome to my website! Here, you will find a variety of resources and projects 
            that I have worked on. My website is a showcase of my skills in web development, design, and more. Feel free 
            to explore and learn more about what I do. Thank you for visiting!" 
          />
        </div>
        <div className="relative">
          <img src={header4} alt="Slide 2" className="w-full h-auto object-cover slider-image" />
          <ViewMoreButton 
            expanded={expandedSlides[1]} 
            onClick={() => toggleExpand(1)} 
            text="This is the text for Slide 2. Welcome to my website! Here, you will find a variety of resources and projects 
            that I have worked on. My website is a showcase of my skills in web development, design, and more. Feel free 
            to explore and learn more about what I do. Thank you for visiting!" 
          />
        </div>
        <div className="relative">
          <img src={header3} alt="Slide 3" className="w-full h-auto object-cover slider-image" />
          <ViewMoreButton 
            expanded={expandedSlides[2]} 
            onClick={() => toggleExpand(2)} 
            text="This is the text for Slide 3. Welcome to my website! Here, you will find a variety of resources and projects 
            that I have worked on. My website is a showcase of my skills in web development, design, and more. Feel free 
            to explore and learn more about what I do. Thank you for visiting!" 
          />
        </div>
      </Slider>

      <style jsx>{`
        .slider-image {
          max-height: 700px;
          width: 1200px;
          animation: fadeInOut 1s ease-in-out;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .slider-image:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 767px) {
          .slider-image {
            max-height: 200px;
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider2;