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
      <section className="py-14 md:py-14 z-20" ref={parentContainer}>
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
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-gray-300 text-center capitalize text-2xl font-black duration-300"
              >
                <div
                  className="w-max group relative "
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <span
                    className={`w-max transition-all ${
                      hoveredSkill && hoveredSkill !== skill ? "blur-sm" : ""
                    } ${hoveredSkill === skill ? "scale-110" : ""}`}
                  >
                    {skill}
                  </span>
                  <div
                    className={`absolute transition-all duration-300 left-1/2 opacity-0 -translate-x-1/2 z-[-1] py-4 w-96 rounded-2xl shadow-sm shadow-[var(--accents-2)]
                    border border-[var(--accents-2)] bg-[var(--accents-1)] group-hover:z-10 group-hover:opacity-100
                   translate-y-10 group-hover:translate-y-0`}
                  ></div>
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
  "Typescript",
  "Postgresql",
  "Node JS",
  "React",
  "GO",
  "GIT",
  "AWS",
  "Open Telemetry",
  "Redis",
  "Docker",
  "Next JS",
  "Haskell",
  "MongoDB",
];
