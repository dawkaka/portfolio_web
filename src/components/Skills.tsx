"use client";
import { Roboto } from "next/font/google";
import { GridLineBG } from "./LineBG";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icons } from "./Icons";
gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
export function SkillsSection() {
  const parentContainer = useRef<HTMLDivElement | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useLayoutEffect(() => {
    gsap.to("#work-slide", {
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      x: "-50%",
    });
  }, []);

  return (
    <GridLineBG
      bgColor="bg-[var(--geist-background)]"
      lineColor="[&>div]:border-[var(--accents-1)]"
    >
      <section
        className="py-14 md:py-14 z-20"
        ref={parentContainer}
        id="skills"
      >
        <div className={roboto.className}>
          <div
            id="work-slide"
            className=" flex items-center gap-10 text-5xl font-bold text-[var(--accents-2)] select-none"
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <h1 key={index}>SKILLS </h1>
              ))}
          </div>
        </div>
        <div className="relative c-container grid gap-y-16 w-full py-16 md:py-28 lg:py-40">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
            {skills.map(({ skill, summary }) => (
              <li
                key={skill}
                className="text-gray-300 flex justify-center font-bold duration-300"
              >
                <div
                  className="w-max group relative "
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span
                    className={`w-max  text-center transition-all ${
                      hoveredSkill && hoveredSkill !== skill ? "blur-sm" : ""
                    } ${hoveredSkill === skill ? "scale-110" : ""}`}
                  >
                    {skill}
                  </span>
                  <div
                    className={`absolute p-4 transition-all duration-300 left-1/2 opacity-0 -translate-x-1/2 z-[-1] text-sm font-normal w-96 rounded-2xl shadow-sm shadow-[var(--accents-2)]
                    border border-[var(--accents-2)] bg-[var(--accents-1)] group-hover:z-10 group-hover:opacity-100
                   translate-y-10 group-hover:translate-y-0`}
                  >
                    {summary}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </GridLineBG>
  );
}

const skills = [
  {
    skill: "TypeScript",
    summary:
      "Used extensively in frontend and backend development to build scalable and type-safe applications, including the development of DrawApp, a drawing application built with React and TypeScript.",
  },
  {
    skill: "PostgreSQL",
    summary:
      "Used PostgreSQL for handling complex data queries at APIToolkit, we also use the timescale extension for time-series data storage.",
  },
  {
    skill: "Node.js",
    summary:
      "At Toonji lyrics, we used node.js with express.js for building the backend services",
  },
  {
    skill: "React",
    summary:
      "React is my go-to framework for building user interfaces, with a focus on creating interactive and responsive web applications. I've used it to build the Prime Couples frontend, a drawing application, and Sporty Tipsters, Jay data and many more",
  },
  {
    skill: "Go",
    summary:
      "After Toonji lyrics, where we used node.js, I switched to Go for building the backend services, I led the development of Prime couples backend services which was written in Go. and many other use cases, like serverless backend for  DrawApp.",
  },
  {
    skill: "Git",
    summary:
      "Used Git for version control across all projects, including collaborations and source control management.",
  },
  {
    skill: "AWS",
    summary:
      "AWS is my cloud platform of choice for deploying and scaling applications. I've used it to deploy and manage infrastructure for Prime Couples, Toonji lyrics, and Sporty Tipsters. I used SES for email notifications and S3 for file storage. The videos and images on Prime Couples and Toonji lyrics were delivered vai cloudfront.",
  },
  {
    skill: "OpenTelemetry",
    summary: `APIToolkit is an observability platform that uses OpenTelemetry to collect, process, and analyze telemetry data from our users backend services.
       I was incharge of taking the exported logs, traces and metrics and visualizing them on our platform allowing our customers to seamlessly monitor their applications in real-time.`,
  },
  {
    skill: "Redis",
    summary:
      "Used Redis as a caching layer for improving performance and reducing latency in applications, primarily for session management at Prime Couples.",
  },
  {
    skill: "Docker",
    summary:
      "Deployed services in Docker containers, including setting up Docker Compose configurations for OpenTelemetry and other demo applications.",
  },
  {
    skill: "Next.js",
    summary:
      "Used Next.js for building the frontend of Prime Couples, Sporty Tipsters, Jay data. and many other projects.",
  },
  {
    skill: "Haskell",
    summary:
      "At APIToolkit, our backend is written primary in haskell, except for our api test execution engine which is written in Rust and called from Haskell using FFI",
  },
  {
    skill: "MongoDB",
    summary:
      "MongoDB was the database I chose when working on Toonji lyrics, and Prime Couples, I'm profiecient in it but it's no longer my database of choice.",
  },
];
