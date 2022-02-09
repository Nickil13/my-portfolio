import React from "react";
import {FaLinkedin,FaGithub,FaHtml5,FaCss3Alt,FaJs,FaReact, FaSass} from "react-icons/fa";
import {SiTailwindcss, SiRedux, SiExpress, SiNodedotjs, SiMongodb} from "react-icons/si";



export const skills=[
    {
        id:1,
        name: "HTML",
        icon: <FaHtml5/>,
        category: "front end"
    },
    {
        id:2,
        name: "CSS",
        icon: <FaCss3Alt/>,
        category: "front end styling"
    },
    {
        id:3,
        name: "JavaScript",
        icon: <FaJs/>,
        category: "front end"
    },
    {
        id:4,
        name: "React",
        icon: <FaReact/>,
        category: "front end"
    },
    {
        id:5,
        name: "Tailwind",
        icon: <SiTailwindcss/>,
        category: "front end styling"
    },
    {
        id:6,
        name: "Redux",
        icon: <SiRedux/>,
        category: "front end"
    },
    {
        id:7,
        name: "Sass",
        icon: <FaSass/>,
        category: "front end styling"
    },
    {
        id:8,
        name: "Express",
        icon: <SiExpress/>,
        category: "back end"
    },
    {
        id:9,
        name: "Node.js",
        icon: <SiNodedotjs/>,
        category: "back end"
    },
    {
        id:10,
        name: "MongoDB",
        icon: <SiMongodb/>,
        category: "back end"
    }
]
export const links=[
    {
        id: 1,
        url: "#about",
        text: "about"
    },
    {
        id: 2,
        url: "#skills",
        text: "skills"
    },
    {
        id: 3,
        url: "#projects",
        text: "projects"
    },
    {
        id: 4,
        url: "#contact",
        text: "contact"
    }

]
export const social=[
    {
        id: 1,
        url: "https://www.linkedin.com/in/nichelle-lindstrom-56631279/",
        icon: <FaLinkedin />
    },
    {
        id: 2,
        url: "https://github.com/Nickil13",
        icon: <FaGithub/>
    }
]
export const projectData=[
    {
        id: 1,
        image: "images/teaCommerce-preview-header.PNG",
        title: "Tea-commerce",
        tags: ["react","scss","redux","node.js", "mongoDB", "express"],
        description: "E-commerce site for tea deployed on Heroku. Browse products, order and pay with Stripe. Admins can manage users, orders, and products.",
        repoLink: "https://github.com/Nickil13/tea-commerce",
        liveDemoLink: "https://tea-commerce-app.herokuapp.com",
    
    },
    {
        id: 2,
        image: "images/blog-preview-light-header.PNG",
        title: "Learning Blog",
        tags:["react","tailwind css","node.js","mongoDB", "express"],
        description: "Personal blog deployed on Heroku. View posts by category or browse all posts using cursor pagination. Add new posts, edit posts and create drafts. Includes a darkmode.",
        repoLink: "https://github.com/Nickil13/learning-blog",
        liveDemoLink: "https://learningblogapp.herokuapp.com"
    },
    {
        id: 3,
        image: "images/cocktailapp-preview-header.PNG",
        title: "Cocktail Finder",
        tags: ["react","tailwind css"],
        description: "React app that takes data from the Cocktail Database API and allows the user to search for specific cocktails and see how to make them. Features a dark mode for looking up recipes in any environment.",
        repoLink: "https://github.com/Nickil13/cocktail-finder",
        liveDemoLink: "https://my-cocktail-finder.netlify.app",
    
    },
    {
        id:4,
        image: "images/cupcakes-preview-header.PNG",
        title: "Sherry's Cupcakes",
        tags: ["css","js"],
        description: "Responsive website for a fictional cupcake business. Includes a landing page, product section, about section and contact form.",
        repoLink: "https://github.com/Nickil13/sherrysCupcakes",
        liveDemoLink: "https://nickil13.github.io/sherrysCupcakes",
    
    },
    
];

