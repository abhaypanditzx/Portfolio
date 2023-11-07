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
    weebo,
    weather,
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
      title: "Front-End Developer",
      icon: backend,
    },
    {
      title: "UI/UX designer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
 
  ];
  
  const projects = [
    {
      name: "weebo",
      description:
        "weebo is your gateway to the world of anime streaming, without actually hosting any anime content. We provide a cutting-edge user interface that mimics the experience of browsing and watching your favorite anime series.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weebo,
      source_code_link: "https://www.github.com/abhaypanditzx/weebo",
    },
    {
      name: "weather today",
      description:
        "Weather today is your go-to destination for up-to-the-minute weather information. This sleek and user-friendly web application combines the power of React with a robust REST API to deliver accurate and timely weather data right at your fingertips.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/abhaypanditzx/weather-web-app",
    }
  ];
  
  export { services, technologies, projects };