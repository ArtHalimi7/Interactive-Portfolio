import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Gamer",
      icon: backend,
    },
    {
      title: "Photo and Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Hardware and Software Servicer",
      company_name: "BlackSn0w",
      icon: starbucks,
      iconBg: "#FFF",
      date: "March 2020 - Aug 2020",
      points: [
        "Fixing and restoring computer components individually",
        "Collaborating with cross-functional teams including engineers, product managers, and other teams to fix high-quality products.",
        "Implementing high quality products and ensuring strong compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#FFF",
      date: "Jun 2021 - Aug 2022",
      points: [
        "Developing and maintaining a web application using Shopify related technologies.",
        "Collaborating with highly skilled designers, to make sure that their product is being presented as highly by code.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Freelance work",
      company_name: "Freelancer",
      icon: meta,
      iconBg: "#FFF",
      date: "Jan 2023 - March 2024",
      points: [
        "Creating and maintaining different websites for customers abroad.",
        "Used technologies such as ReactJS, TailwindCSS, ThreeJS, ExpressJS, NodeJS, etc.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "Starlabs",
      icon: tesla,
      iconBg: "#FFF",
      date: "May 2024 - Present",
      points: [
        "Developing and maintaining applications using ReactJS",
        "Participatedd in an internship, worked in a group to make a modern Learning Management System.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Art proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Art does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Art optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Jobify",
      description:
        "Web-based jobs-seeking platform that allows users to search, post, and manage job positions from various employers.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "NFT Marketplace",
      description:
        "Web based app, that allows users to buy sell & trade different NFT art pieces easily and securely.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };