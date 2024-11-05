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
    shopify,
    carrent,
    jobit,
    passwordmanager,
    tripguide,
    threejs,
    tesla,
    hcl,
    Edgenre,
    expressjs,
    AWS,
    sql,
    flipkart,
    portfolio,

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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "GenAI Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
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
      name: "Express JS",
      icon: expressjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: AWS,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "HCLTech",
      icon: hcl,
      iconBg: "#383E56",
      date: "Dec 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front-End Developer Intern ",
      company_name: "Edgenre Infotech",
      icon: Edgenre,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - June 2023",
      points: [
        "Designed and implemented responsive user interfaces utilizing modern JavaScript frameworks/libraries, HTML5, and W3CSS, ReactJs.",
        "Collaborated on APIs to efficiently retrieve and process data from databases, aligned with business logic.",
        "Diagnosed and resolved complex technical issues, optimizing system performance and user satisfaction.",
      ],
    },
   
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Password-Manager",
      description:
        "A password manager web application using React, Express, and MongoDB, enabling users to securely add, edit, and delete passwords for various websites. This project combines a user-friendly interface with secure data handling for managing sensitive information.",
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
        {
          name: "express",
          color: "orange-text-gradient",
        },
      ],
      image: passwordmanager,
      source_code_link: "https://github.com/kakashibhaiya/Password-Manager",
      visit: "https://password-manager-007.netlify.app/",
    },
    {
      name: "flipkartClone",
      description:
        "A basic Flipkart clone using the MERN stack, which replicates key e-commerce functionalities such as product listing, user authentication, and CRUD operations for product management. This project simulates an online shopping experience and showcases full-stack development, from frontend UI to backend database handling.",
      tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: flipkart,
      source_code_link: "https://github.com/kakashibhaiya/flipkartClone",
    },
    {
      name: "Portfolio",
      description:
        "This is an interactive portfolio that I've build using React and Three.js, showcasing my background, experience, and achievements in a visually engaging way. This project highlights my skills and professional journey with 3D effects for an enhanced user experience.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/kakashibhaiya/My-Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };