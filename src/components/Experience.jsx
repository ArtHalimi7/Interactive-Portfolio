import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{
    background: 'rgba(158, 208, 230, 0.3)',
    color: '#fff',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  }}    contentArrowStyle={{ borderRight: '10px solid #fff' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, color: '#fff' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="text-white text-[24px] font-bold">
      <h3>{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.div>
        <p className="text-2xl mt-[200px] mx-auto" style={{ width: '300px', color: '#ffffff', fontWeight: 'bold' }}>
          My achievements so far
        </p>
        <h2
          className="text-5xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-4 text-[#9ed0e6] text-center"
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            alignItems: 'center',
            transition: '0.7s',
            color: '#9ed0e6'
          }}
          onMouseOver={(e) => {
            e.target.style.color = 'transparent';
            e.target.style.WebkitTextStroke = '2px white';
          }}
          onMouseOut={(e) => {
            e.target.style.color = '#9ed0e6';
            e.target.style.WebkitTextStroke = 'none';
          }}
        >
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-[50px] flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");