"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import educity from "../images/educity.png";
import visit from "../images/external-link.png";
import food_delivery from "../images/food_delivery.png";
import spadvertising from "../images/spadvertising.png";
import varunwadhwa from "../images/varunwadhwa.png";
import define from "../images/define.png";
import quickscan from "../images/quickscan.png";
import buddy from "../images/buddy.png";
import pracharkarsolutions from "../images/pracharkarsolutions.png";
import aiguru from "../images/aiguru.png";
import drchitraendocare from "../images/drchitraendocare.png";
import drkunalsayani from "../images/drkunalsayani.png";
import muraadconstruction from "../images/muraadconstruction.png";
import svnsolar from "../images/svnsolar.png";
import diginote from "../images/diginote.png";
import iref from "../images/iref.png";
import proactivetherapy from "../images/proactive.png"
import sociowright from "../images/sociowright.png"

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);

 const websites = [
  
  {
    id: 1,
    image: spadvertising,
    link: "https://spadvertising.in",
    name: "SP Advertising",
  },
  {
    id: 2,
    image: drchitraendocare,
    link: "https://drchitraendocare.com",
    name: "Dr. Chitra Endocare",
  },
  {
    id: 3,
    image: varunwadhwa,
    link: "https://varunwadhwa.com",
    name: "Varun Wadhwa",
  },
 {
    id: 4,
    image: diginote,
    link: "https://diginote.in/",
    name: "SVN Solar",
  },
  {
    id: 5,
    image: muraadconstruction,
    link: "https://muraadconstruction.com",
    name: "Muraad Construction",
  },
  {
    id: 6,
    image: sociowright,
    link: "https://sociowright.vercel.app/",
    name: "Socoio Wright",
  },
  {
    id: 7,
    image: iref,
    link: "https://irefraipur.in/",
    name: "irefraipur",
  },
  {
    id: 8,
    image: proactivetherapy,
    link: "https://proactivetherapy.vercel.app/",
    name: "Proactive Therapy",
  },
];

const projects = [
  {
    id: 1,
    image: diginote,
    link: "https://diginote.in/",
    name: "SVN Solar",
  },
  {
    id: 2,
    image: food_delivery,
    link: "https://rajurao1106.github.io/food-website/",
    name: "Food Delivery Website",
  },
  {
    id: 3,
    image: aiguru,
    link: "https://aiguru.vercel.app/",
    name: "Ai Guru",
  },
  {
    id: 4,
    image: quickscan,
    link: "https://quickscan-nine.vercel.app/",
    name: "Quickscan Website",
  },
  {
    id: 5,
    image: educity,
    link: "https://rajurao1106.github.io/educity-website/",
    name: "Educity Website",
  },
  {
    id: 6,
    image: define,
    link: "https://define-jss6.onrender.com",
    name: "Define Website",
  },
  {
    id: 7,
    image: buddy,
    link: "https://buddy-5ext.onrender.com/",
    name: "Buddy Website",
  },
];


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 80%",
        },
        y: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col gap-16 justify-center items-center bg-gray-950 py-10 text-white"
    >
      {/* Websites Section */}
      <div className="w-[90%] flex flex-col justify-center items-center">
        <h1 className="section-header w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
          WORK <p className="ml-2 text-yellow-400">WEBSITES</p>
          <p className="absolute text-8xl max-md:text-6xl opacity-10">
            PORTFOLIO
          </p>
        </h1>

        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {websites.map((project, index) => (
            <div
              key={index}
              className="project-card w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.name}
                className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3"
              >
                <p className="hidden group-hover:block">
                  <span className="flex justify-center items-center gap-1">
                    Visit Website
                    <Image src={visit} className="w-8 h-8" alt="Visit" />
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-[90%] flex flex-col justify-center items-center">
        <h1 className="section-header w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
          MY <p className="ml-2 text-yellow-400">PROJECTS</p>
          <p className="absolute text-8xl max-md:text-6xl opacity-10">
            PORTFOLIO
          </p>
        </h1>

        <div className="w-full flex gap-10 flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card w-80 h-44 overflow-hidden flex justify-center items-center relative group rounded-xl"
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.name}
                className="w-80 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute transition-all duration-300 group-hover:bg-[#0000007c] w-full h-full flex justify-center items-end p-3"
              >
                <p className="hidden group-hover:block">
                  <span className="flex justify-center items-center gap-1">
                    Visit Website
                    <Image src={visit} className="w-8 h-8" alt="Visit" />
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
