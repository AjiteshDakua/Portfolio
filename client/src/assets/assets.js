import hero_profile from "./hero_profile.jpg";
import LMS_project from"./LMS_project.png";
import Ecomerse_project from "./Ecomerse_project.png";
import Doctor_Appointment from "./Doctor_Appointment.png";


// Project data moved from PortfolioSection.jsx
const projects = [
  {
    id: 1,
    name: "E-commerce Application",
    description:
      "A full-featured e-commerce platform with user authentication, product management, and secure payment integration.",
    image: Ecomerse_project,
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://forever-sage.vercel.app/",
    codeUrl: "#",
  },
  {
    id: 2,
    name: "Doctor Appointment",
    description:
      "A healthcare management platform that allows users to easily book doctor appointments, manage health records, and receive timely reminders. Built with real-time updates, secure authentication, and a user-friendly interface to streamline patient-doctor interactions.",
    image: Doctor_Appointment,
    technologies: [
      "React",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    demoUrl: "https://doctor-appointment-cyan.vercel.app/",
    codeUrl: "#",
  },
  //   {
  //     id: 3,
  //     name: "Doctor Appointment Web",
  //     description:
  //       "Healthcare management system for booking appointments, managing patient records, and doctor schedules.",
  //     image:
  //       "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
  //     technologies: ["React", "Express.js", "MongoDB", "Python"],
  //     demoUrl: "#",
  //     codeUrl: "#",
  //   },
  {
    id: 4,
    name: "LMS (Learning Management System)",
    description:
      "A comprehensive learning management system for creating, managing, and delivering online courses, with user roles for students and instructors.",
    image: LMS_project,
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Tailwind CSS",
    ], // Added more relevant technologies
    demoUrl: "https://lms-frontend-gray-five.vercel.app/",
    codeUrl: "https://github.com/AjiteshDakua/LMS",
  },
];

// Tech color mapping moved from PortfolioSection.jsx
const techColors = {
  React: "bg-[#61DBFB]/20 dark:bg-[#61DBFB]/10 text-[#61DBFB]",
  "Node.js": "bg-[#339933]/20 dark:bg-[#339933]/10 text-[#339933]",
  NodeJS: "bg-[#339933]/20 dark:bg-[#339933]/10 text-[#339933]",
  Node: "bg-[#339933]/20 dark:bg-[#339933]/10 text-[#339933]",
  "Express.js": "bg-[#6366F1]/20 dark:bg-[#6366F1]/10 text-[#6366F1]",
  MongoDB: "bg-[#47A248]/20 dark:bg-[#47A248]/10 text-[#47A248]",
  "Tailwind CSS": "bg-[#06B6D4]/20 dark:bg-[#06B6D4]/10 text-[#06B6D4]",
  Firebase: "bg-[#FFCA28]/20 dark:bg-[#FFCA28]/10 text-[#FFCA28]",
  Python: "bg-[#3776AB]/20 dark:bg-[#3776AB]/10 text-[#3776AB]",
  Clerk: "bg-[#3B49DF]/20 dark:bg-[#3B49DF]/10 text-[#3B49DF]",
};


export const assets = {
  hero_profile,
    LMS_project,Ecomerse_project,
  projects,
  techColors,
};
