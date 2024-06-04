import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import header from '../assets/header2.png';
import header3 from '../assets/header2.png';
import header4 from '../assets/header2.png';

const Slider2 = () => {
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

  return (
    <div className="relative mx-8" style={{maxWidth: '1200px', marginLeft: '300px'}}> {/* Adjusted width */}
      <Slider {...settings}>
        <div className="relative">
          <img src={header} alt="Slide 1" className="w-full h-auto object-cover slider-image" />
        </div>
        <div className="relative">
          <img src={header4} alt="Slide 2" className="w-full h-auto object-cover slider-image" />
        </div>
        <div className="relative">
          <img src={header3} alt="Slide 3" className="w-full h-auto object-cover slider-image" />
        </div>
      </Slider>

      <style jsx>{`
        .slider-image {
          max-height: 700px; /* Adjusted height */
          width: 1200px;
          animation: fadeInOut 1s ease-in-out;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .slider-image:hover {
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 767px) {
          .slider-image {
            max-height: 200px; /* Adjusted height */
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