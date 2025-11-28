"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About({websites}) {
  const aboutRef = useRef(null); // Section reference

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1p1J1_wZyrDbMH7bv79lTpfQIa1_QAJqq/view?usp=drivesdk";
    link.download = "D_Raju_Rao_CV.pdf";
    link.click();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate section header
          gsap.fromTo(
            ".section-header",
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );

          // Animate personal info
          gsap.fromTo(
            ".personal-info",
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.3 }
          );

          // Animate stats
          gsap.fromTo(
            ".stat-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "bounce.out",
              stagger: 0.3,
              delay: 0.5,
            }
          );

          observer.disconnect(); // Stop observing after animation
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="w-full flex flex-col justify-center items-center py-10 bg-gray-950 text-white h-screen max-md:h-full"
    >
      <h1 className="section-header w-full text-5xl font-extrabold mb-20 max-lg:text-4xl max-md:text-3xl relative flex justify-center items-center">
        ABOUT <p className="ml-2 text-yellow-400"> ME</p>
        <p className="absolute text-8xl max-md:text-6xl opacity-10">ABOUT</p>
      </h1>

      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Personal Info */}
        <div className="personal-info w-full max-lg:text-center flex flex-col gap-6">
          <div className="flex max-md:flex-wrap text-left max-md:gap-5">
            <div className="gap-4 flex flex-col">
              <h2 className="text-2xl font-bold">PERSONAL INFO</h2>
              <p>First Name : D Raju</p>
              <p>Last Name : Rao</p>
              <p>Age : 21</p>
              <p>Nationality : Indian</p>
              <p>Freelance : Yes</p>
            </div>
            <div className="justify-end gap-4 flex flex-col">
              <p>Address : Raipur, Chhattisgarh</p>
              <p>Phone : +91-7470578448</p>
              <p>Email : rajurao1106@gmail.com</p>
              <p>
                LinkedIn :{" "}
                <a
                  href="https://www.linkedin.com/in/raju-rao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/raju-rao/
                </a>
              </p>
              <p>Languages : Hindi, Telugu, English</p>
            </div>
          </div>
          <button
            onClick={downloadCV}
            className="bg-red-500 mt-4 w-52 p-3 rounded-full self-center lg:self-start"
          >
            Download CV
          </button>
        </div>

        {/* Experience Stats */}
        <div className="w-full max-md:w-full flex flex-wrap gap-5 max-lg:justify-center">
          <div className="stat-card p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">2+</p>
            <p>years of experience</p>
          </div>
          <div className="stat-card p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">15+</p>
            <p>projects completed</p>
          </div>
          <div className="stat-card p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">1+</p>
            <p>years in industry</p>
          </div>
          <div className="stat-card p-5 w-[15rem] h-[8rem] border rounded-lg border-red-100 flex flex-col items-center">
            <p className="text-5xl font-bold text-yellow-400">7+</p>
            <p>happy clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
