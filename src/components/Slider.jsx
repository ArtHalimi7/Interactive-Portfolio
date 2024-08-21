import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ViewMoreButton from './ViewMore'; 
import header from '../assets/header2.png';
import header3 from '../assets/header3.png';
import header4 from '../assets/header4.png';
import header5 from '../assets/header5.png';

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
    <div className="relative mx-auto max-w-full px-4 sm:px-8 lg:px-12">
      <Slider {...settings}>
        <div className="relative">
          <a href={header} target="_blank" rel="noopener noreferrer">
            <img src={header} alt="Slide 1" className="w-full h-auto object-cover slider-image" />
          </a>
          <ViewMoreButton 
            expanded={expandedSlides[0]} 
            onClick={() => toggleExpand(0)} 
            text="This is a hairsalon website I made for a client based in Switzerland.
            It has a luxurious, minimalistic and sleek design upon request.
            The tech stack used for this website is: ReactJS and TailwindCSS" 
          />
        </div>
        <div className="relative">
          <a href={header4} target="_blank" rel="noopener noreferrer">
            <img src={header4} alt="Slide 2" className="w-full h-auto object-cover slider-image" />
          </a>
          <ViewMoreButton 
            expanded={expandedSlides[1]} 
            onClick={() => toggleExpand(1)} 
            text="This website was also made for a client based in Switzerland.
            It is a website about a firm in Switzerland that does house renovations.
            Upon request this site has more animations, including gifs aswell.
            The tech stack used for this website is: ReactJS and TailwindCSS" 
          />
        </div>
        <div className="relative">
          <a href={header3} target="_blank" rel="noopener noreferrer">
            <img src={header3} alt="Slide 3" className="w-full h-auto object-cover slider-image" />
          </a>
          <ViewMoreButton 
            expanded={expandedSlides[2]} 
            onClick={() => toggleExpand(2)} 
            text="This website is a personal project I made.
            It is a chatbot website, where users can interact.
            It has a very futuristic design with amazing animations
            It is still under development.
            The tech stack used for this website so far is: ReactJS and TailwindCSS" 
          />
        </div>
        <div className="relative">
          <a href={header3} target="_blank" rel="noopener noreferrer">
            <img src={header5} alt="Slide 4" className="w-full h-auto object-cover slider-image" />
          </a>
          <ViewMoreButton 
            expanded={expandedSlides[2]} 
            onClick={() => toggleExpand(2)} 
            text="This is an accounting web application for a client based in Germany.
            It has different functionalities and different user roles. 
            The user can Login or create an account with a provided access key, sell, create orders, track purchase history, manage products, manage users and much more!
            It is still under development.
            The tech stack used for this website so far is: ReactJS and TailwindCSS, NodeJS, ExpressJS and MySQL.
            " 
          />
        </div>
      </Slider>

      <style jsx>{`
        .slider-image {
          max-height: 800px; /* Increased size */
          width: 100%;
          animation: fadeInOut 1s ease-in-out;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease-in-out;
        }

        .slider-image:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
          transform: scale(1.05); /* Slight zoom on hover */
        }

        @media (max-width: 1024px) {
          .slider-image {
            max-height: 600px; /* Adjusted for smaller screens */
          }
        }

        @media (max-width: 767px) {
          .slider-image {
            max-height: 400px;
          }
        }

        @media (max-width: 640px) {
          .slider-image {
            max-height: 300px;
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