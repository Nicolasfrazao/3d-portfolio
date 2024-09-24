import Review1 from "@/assets/review1.png";
import Review2 from "@/assets/review2.png";
import Review3 from "@/assets/review3.png";
import Review4 from "@/assets/review4.png";

import SpotLight1 from "@/assets/spotlight1.png";
import SpotLight2 from "@/assets/spotlight2.png";
import SpotLight3 from "@/assets/spotlight3.png";
import SpotLight4 from "@/assets/spotlight4.png";
import SpotLight5 from "@/assets/spotlight5.png";

import Tailwind from "@/assets/tailwindcss.png";
import React from "@/assets/react.svg";
import Typescript from "@/assets/typescript.png";
import Framer from "@/assets/framer.png";

//import Project1Texture from "@/textures/project/project1.mp4";
//import Project2Texture from "@/textures/project/project2.mp4";
//import Project3Texture from "@/textures/project/project3.mp4";
//import Project4Texture from "@/textures/project/project4.mp4";
//import Project5Texture from "@/textures/project/project5.mp4";

import Project1Logo from "@/assets/project-logo1.png";
import Project2Logo from "@/assets/project-logo2.png";
import Project3Logo from "@/assets/project-logo3.png";
import Project4Logo from "@/assets/project-logo4.png";
import Project5Logo from "@/assets/project-logo5.png";

import Figma from "@/assets/figma.svg"
import Notion from "@/assets/notion.svg"


export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: Review1,
    review:
      'Working with Nicolas was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: Review2,
    review:
      'Nicolas&apos;s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: Review3,
    review:
      'I can&apos;t say enough good things about Nicolas. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: Review4,
    review:
      'Nicolas was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'SaaS podcaster - AI Podcast Platform',
    desc: 'SaaS Podcaster is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: 'Project1Texture',
    logo: Project1Logo,
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: SpotLight1,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: React,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: Typescript,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: Framer,
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '../../public/textures/project/project2.mp4',
    logo: Project2Logo,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: SpotLight2,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: React,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: Typescript,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: Framer,
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '../../public/textures/project/project3.mp4',
    logo: Project3Logo,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: SpotLight3,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: React,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: Typescript,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: Framer,
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '../../public/textures/project/project4.mp4',
    logo: Project4Logo,
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: SpotLight4,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: React,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: Typescript,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: Framer,
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '../../public/textures/project/project5.mp4',
    logo: Project5Logo,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: SpotLight5,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: React,
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        path: Typescript,
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: Framer,
      },
    ],
  },
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Recently',
    pos: 'Full Stack Developer',
    duration: '2022 - Present',
    title: "Have been working on lots of projects involving diverse areas of programing, from web development with react, typescript, node and nextjS to LLM and machine learning with c, also java projects and c++/c#",
    icon: Framer,
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: Figma,
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Carrer',
    pos: 'Investor & Entrepeneur',
    duration: '2018 - 2022',
    title: "During this period i studied and aplyed lots of concepts of entrepenurship",
    icon: Notion,
    animation: 'salute',
  },
];
