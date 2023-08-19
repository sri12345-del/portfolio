// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shrinivas H C",
  tagline: "I build things for web",
  img: profile,
  about: `To obtain a responsible position as a Frontend Developer in an innovative
  environment where I could invest my knowledge and upskill myself taking
  up new challenges and building best solutions.`
}

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/shrinivas-h-c-548b63243/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed_hashtag%3B7TVQuSwwQ6auRkGMNrrwEw%3D%3D",
  github: "https://github.com/sri12345-del",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Assistance Developer",
    Company: `Pixel Softech Private limited`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Dec 2018 - Mar 2020",
  },
  {
    Position: "Internship",
    Company: `Sharpener`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Jan 2023 - Present",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Mechanical engineer",
    Company: `JIT Davanagere`,
    Location: "Davanagere",
    Type: "Full Time",
    Duration: "July-2014 - Aug-2018",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Mail Box Client",
    image: projectImage1,
    description: `Mail box client is an application where user can send and receive
    mails. Each user have his own account. Sent items and inbox are
    maintained separately at the backend. Firebase used to store the mails.`,
    techstack: "HTML, CSS, JS, React, Redux(frontend),firebase(backend)",
    previewLink: "https://google.com",
    githubLink: "https://github.com/sri12345-del/Mail_box",
  },
  {
    title: "Expense Tracker",
    image: projectImage2,
    description: `Expense Tracker allows user to track their expenses and premium users can get extra benefits like provision to download their expense in an excel format and change theme feature.`,
    techstack: "HTML, CSS, JS, React, Redux(frontend),firebase(backend",
    previewLink: "https://google.com",
    githubLink: "https://github.com/sri12345-del/Expense_Tracker",
  },
  {
    title: "E-commerce Website",
    image: projectImage3,
    description: `E-commerce website is an application that provides
    authentication(login/signup, logout) and then access to users of their
    own cart. Context API is used to manage the app-wise state`,
    techstack: "HTML, CSS, JS, React(frontend) , crudcrud",
    previewLink: "https://google.com",
    githubLink: "https://github.com/sri12345-del/E-commerce_website",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "seena.0196@gmail.com",
  phone: "+91 7760701366",
};
