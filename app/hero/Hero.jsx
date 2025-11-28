"use client";
import React, { useEffect } from "react";
import profileImage from "../images/raju.jpg";
import right_arrow from "../images/right-arrow.png";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";

export default function Hero() {
  useEffect(() => {
    // Animating the Profile Image
    gsap.fromTo(
      ".profile-img",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Animating the Text Content
    gsap.fromTo(
      ".text-content",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );

    // Animating the Button on hover
    gsap.fromTo(
      ".more-about-btn",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  return (
    <section
      id="hero"
      className="w-full max-w-[1200px] flex flex-col justify-center items-center bg-gray-950"
    >
      <div className="w-[90%] flex flex-col max-lg:flex-col max-lg:items-center lg:flex-row justify-around">
        {/* Profile Image */}
        <Image
          loading="lazy"
          src={profileImage}
          className="profile-img w-[25rem] max-lg:w-[15rem] max-md:w-[12rem] rounded-3xl mt-10 mb-8 max-lg:mb-8 lg:mb-0"
          alt="Profile"
        />

        {/* Text Content */}
        <div className="text-content flex flex-col justify-center items-start max-lg:items-center w-full lg:w-[50%] text-white gap-6 max-md:gap-4 text-center lg:text-left">
          <h1 className="text-5xl max-lg:text-3xl max-md:text-2xl font-bold">
            <p className="text-yellow-500">I'M D. RAJU RAO,</p> WEB DEVELOPER
          </h1>
          <p className="max-lg:text-base max-md:text-sm pr-5">
            I am a passionate and results-driven Web Developer with 1 years of
            experience specializing in creating dynamic, responsive, and
            user-friendly websites. My expertise lies in crafting seamless
            digital experiences using modern tools and technologies such as
            React.js, Vite, Node.js, Express, MongoDB, and I also specialize in
            JavaScript, Next.js, Tailwind CSS, Redux, and AI
            integration like Google's Gemini API and ElevenLabs for voice
            output.
          </p>
          <Link
            href={"/about"}
            className="more-about-btn rounded-full gap-10 justify-center items-center flex p-3 font-semibold overflow-hidden border-yellow-500 border group relative"
          >
            <p className="mr-10 z-10">More About Me</p>
            <div className="absolute right-0 w-10 h-10 group-hover:w-60 group-hover:h-40 rounded-full bg-yellow-500 transition-all duration-300"></div>
            <div className="w-12 h-12 bg-yellow-500 absolute right-0 rounded-full flex items-center justify-center">
              <Image loading="lazy" src={right_arrow} alt="" className="w-5" />
            </div>
          </Link>
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
    </section>
  );
}
