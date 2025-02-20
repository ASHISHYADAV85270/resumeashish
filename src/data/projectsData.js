import blogify from "../assets/svg/projects/blogify.png";
import chatApp from "../assets/svg/projects/chatapp.png";
import movix from "../assets/svg/projects/movix.png";
import redux from "../assets/svg/skills/redux.svg";
import react from "../assets/svg/skills/react.svg";
import express from "../assets/svg/skills/express.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import nodeJs from "../assets/svg/skills/nodeJs.svg";
import javascript from "../assets/svg/skills/javascript.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Blogify",
    projectDesc:
      "A full-stack blog application built using the MERN stack, allowing users to create, manage, and interact with blog posts.",
    projectResp: "Areas Of Responsibilities",
    responsibility: [
      "Implemented image upload functionality using Multer",
      "Developed RESTful API endpoints for user management, blog post creation, and comments",
      "Implemented secure user authentication using cookies for persistent login sessions",
    ],
    tags: [react, express, bootstrap, vitejs, nodeJs, javascript],
    code: "https://github.com/ASHISHYADAV85270/bloggingApp",
    demo: "https://blogify-hovt.onrender.com/",
    image: blogify,
  },
  {
    id: 2,
    projectName: "Chat App",
    projectDesc:
      "A real-time chat application with Socket.IO and RESTful API, ensuring secure and seamless messaging.",
    projectResp: "Areas Of Responsibilities",
    responsibility: [
      "Developed a Socket.IO-based real-time chat system",
      "Designed and managed MongoDB database",
      "Created a RESTful API backend for data transfer",
      "Implemented authentication and security features",
    ],
    tags: [react, express, bootstrap, vitejs, nodeJs, javascript],
    code: "https://github.com/ASHISHYADAV85270/chatappashishbackend",
    demo: "https://github.com/ASHISHYADAV85270/chatappashishbackend", // No demo link provided in the CV
    image: chatApp,
  },
  {
    id: 3,
    projectName: "Movix App",
    projectDesc:
      "A dynamic movie streaming app providing access to the latest, best-reviewed, and most-watched movies.",
    projectResp: "Areas Of Responsibilities",
    responsibility: [
      "Developed a movie web app using React and TMDB API",
      "Implemented a dynamic movie genre filter for enhanced user navigation",
      "Integrated Redux Toolkit for state management",
      "Enhanced UI with Sass and responsive design",
    ],
    tags: [react, redux, bootstrap, vitejs, nodeJs, javascript],
    code: "https://github.com/ASHISHYADAV85270/MOVIEAPP",
    demo: "https://ashishmovieapp.netlify.app/", // No demo link provided in the CV
    image: movix,
  },
];
