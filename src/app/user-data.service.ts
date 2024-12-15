import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() { }

  userDetails = {
    name: 'Jahnvi',
    email: 'jahnvigoyal615@gmail.com',
    phoneNumber: '9079878526',
    githubURL: 'https://github.com/Jahnvi615',
  }

  css ={
    brightPurple: '#C3073F',
    midPurple: '#950740',
    darkPurple: '#6F2232',
    midGray: '#4E4E50',
    darkGray: '#1A1A1D'
  }

  myDetails = {
    name: "Jahnvi",
    Branch: "Information Technology.",
    image: './assets/jahnvi.jpg',
    college: "Gweca",
    details:'Web Designer | Python Developer | TECH ENTHUSIAST',
    userDetailsList: ['WEB DESIGNER', 'PYTHON DEVELOPER', 'TECH ENTHUSIAST'],
    resume:'https://drive.google.com/file/d/1Bb7fqT69LWiWPKb3wyFqyfyrrGkbcBJk/view?usp=sharing'
  }

  socialMedia = [
    {
      imageLink: "./assets/icons/github.png",
      profileLink: "https://github.com/Jahnvi615"
    },
    {
      imageLink: "./assets/icons/linkedin.png",
      profileLink: "https://www.linkedin.com/in/jahnvi-goyal-70936624a"
    },
    {
      imageLink: "./assets/icons/leetcode.png",
      profileLink: "https://leetcode.com/Jahnvi08/"
    },
    // {
    //   imageLink: "./assets/icons/hackerrank.png",
    //   profileLink: "https://www.hackerrank.com/profile/JahnviGoyal"
    // },
    {
      imageLink: "./assets/icons/insta.png",
      profileLink: "https://www.instagram.com/jahnvi.goyal.96/profilecard/?igsh=MWhuZDQ1dDZ3MHc3eg=="
    },
    {
      imageLink: "./assets/icons/mail.png",
      profileLink: "mailto:jahnvigoyal615@gmail.com"
    }
  ]
  experience =[
    {
      heading:"Intern(IBM SkillsBuild) ",
      content:"Gained invaluable hands-on experience in Web Technologies. Collaborated on challenging projects and learnt the ins and out of software development in a real-world setting.",
      color:"darkgreen",
      myJob:"Web Development - Team Lead",
      image:"assets/ex1.png",
      position:"Jul 2024 – Aug 2024",
      siteLink:"https://skillsbuild.org/",
    },
    {
      heading:"Celebal Technologies Intern",
      content:"During my SQL internship, I worked extensively on database management tasks, including designing and implementing database structures, writing complex SQL queries.",
      color:"black",
      image:"assets/ex2.png",
      myJob:"SQL Development",
      position:"Jun 2024 – Aug 2024 ",
      siteLink:"https://celebaltech.com/",
    },
    {
      heading:"Ananya Goldman Sachs IWE League Scholar",
      content:"I had privilege of diving deep into Data Structures and Algorithms(DSA), From mastering complex algorithms to optimizing data structures under the exceptional Mentors.",
      color:"darkblue",
      image:"assets/ex3.png",
      myJob:"Mentorship Program",
      position:"Jul 2023 – Dec 2023",
      siteLink:"https://www.goldmansachs.com/",
    },
    {
      heading:"GWECA - Coding Club Coordinator",
      content:"As a Coding Club Coordinator, I led and organized coding events, workshops, fostering a collaborative learning environment. I guided team members and promoted coding culture.",
      color:"darkred",
      image:"assets/ex4.png",
      myJob:"Coordinator",
      position:"Mar 2023 – Dec 2023",
      siteLink:"https://www.linkedin.com/company/cyber-fanatics-the-coding-club-gweca/posts/?feedView=all",
    }
  ]
  timeLine=[
    {
      year:'2007 - 2021',
      content:'1-12th',
      contentTwo:'S.I.S. Sangod, Kota | Grade: 88%'
    },
    {
      year:'2021 - 2025',
      content:'B.Tech. Information Technology',
      contentTwo:'Government Women Engineering College, Ajmer | cgpa: 9.05'
    },
  ]

  projectDetails = [
    {
      name:"Portfolio",
      image:"./assets/user.png",
      content:"Portfolio Web-App made in typescript using Angular as framework with Bootstrap. My portfolio showcases my skills in Development, creative design, and innovative projects.",
      githubLink:"https://github.com/Jahnvi615/Jahnvi_Portfolio.git",
      workingLink:"https://jahnvi615.github.io/Jahnvi_Portfolio/"
    },
    {
      name:"FARMINGO!",
      image:"./assets/pro1.jpg",
      content:"Smallholder Farmer Platform! Frontend made in javascript, bootstrap. Aims to empower smallholder farmers by providing real-time information, resources, and support to enhance their productivity and efficiency.",
      githubLink:"https://github.com/Jahnvi615/Farmingo.git",
      workingLink:"https://jahnvi615.github.io/Farmingo/"
    },
    {
      name:"Employee Hierarchy",
      image:"./assets/pro2.jpg",
      content:"This project generates an employee hierarchy based on data stored in the EMPLOYEE_MASTER table and stores the output in the Employee_Hierarchy table. Concepts - DBMS, SQL.",
      githubLink:"https://github.com/Jahnvi615/Employee_hierarchy_Generation.git",
    },
    {
      name:"TextToSpeech",
      image:"./assets/pro3.jpg",
      content:"This is a Text To Speech converter application where you can convert your text into speech in any language of your choice. Here javascript is used. It is 100% responsive.",
      githubLink:"https://github.com/Jahnvi615/TextToSpeech.git",
      workingLink:"https://jahnvi615.github.io/TextToSpeech/"
    },
    {
      name:"Add_Tickets",
      image:"./assets/pro4.jpg",
      content:"This is a ticket based supporting system in which you can create your own ticket and can start working on your project. A simple, modern, and generic standard for managing and collaborating software projects⚙️. Made using Angular.",
      githubLink:"https://github.com/Jahnvi615/Add_Tickets.git",
    },
    {
      name:"Video Conferencing Website",
      image:"./assets/pro5.jpg",
      content:"It is user friendly website which allow people to have face to face live video based meeting from different locations. In this HTML, CSS and JavaScript is used.",
      githubLink:"https://github.com/Jahnvi615/Video_Conferencing_Website.git",
    }
  ]
}
