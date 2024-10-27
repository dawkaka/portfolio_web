"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { GridLineBG } from "./LineBG";
import { Roboto } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icons } from "./Icons";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export function Projects() {
  const parentContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to("#slide", {
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      x: "50%",
    });
  }, []);

  useGSAP(() => {
    const cards = gsap.utils.toArray<any>(".project-card");
    const spacer = 20;

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top bottom-=${index * spacer}`,
          end: `bottom top+=${200 + cards.length * spacer}`,
          scrub: true,
        },
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top top+=10%`,
        endTrigger: ".pin-panel",
        end: `bottom top+=${600 + cards.length * spacer}`,
        pin: true,
        pinSpacing: false,
        id: "card-pin",
        invalidateOnRefresh: true,
      });
    });
  }, []);

  return (
    <GridLineBG bgColor="" lineColor="[&>div]:border-gray-200">
      <section className="py-14 md:py-14 z-20" ref={parentContainer}>
        <div className={roboto.className}>
          <div
            id="slide"
            className="flex items-center gap-10 text-5xl font-bold text-[var(--accents-7)] select-none"
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <h1 key={index}>PROJECTS</h1>
              ))}
          </div>
        </div>
        <div className="relative c-container flex flex-col items-center gap-[150px] w-full py-16">
          <Project
            className="bg-yellow-100"
            isOdd
            title="Sporty Tipsters"
            description={`Sporty tipsters allows tipsters to make money sharing premium and free
          sports betting predictions. With our automatic prediction tracking and
          verification it also allows users to make informed decisions on which
          tipster to subscribe to.`}
            image="/sporty.png"
            link="https://sportytipsters.com/"
            tags={["React", "Next.js", "Prisma", "Tailwind CSS", "TypeScript"]}
          />
          <Project
            className="bg-yellow-100"
            title="Jay Data GH"
            description={`A platform that allows users to buy affordable data MTN, Tigo and Telecel bundles and also register for MTN AFA.
              I use paystack to handle payments and processed over 30,000 GHS in the first three months of launching the platform.`}
            image="/jaydata.png"
            link="https://jaydatagh.com/"
            tags={[
              "React",
              "Next.js",
              "Supabase",
              "Tailwind CSS",
              "TypeScript",
            ]}
          />
          <Project
            className="bg-yellow-100"
            isOdd
            title="Pokemon App"
            description={`
              This was a take home assignment for a job I applied for, I was task to build a frontend that consumes the pokemon api,
              given a design to be implemented`}
            image="/pokemon.png"
            link="https://yussif-enyata.vercel.app/list-view"
            github="https://github.com/dawkaka/enyata-assignment"
            tags={["React", "Tailwind CSS", "TypeScript"]}
          />
          <Project
            className="bg-yellow-100"
            title="Drawing Web App"
            description={`A web based drawing app much like excalidraw and tldraw,
              which allows users to draw different kinds of shapes and
              illulstrations save them and also share with others.`}
            image="/draw.png"
            link="https://draaaw.vercel.app/"
            github="https://github.com/dawkaka/drawapp"
            tags={["React", "Go", "Prisma", "Tailwind CSS", "TypeScript"]}
          />

          <div className="pin-panel h-[150px]"></div>
        </div>
      </section>
    </GridLineBG>
  );
}

type ProjectProps = {
  className: string;
  isOdd?: boolean;
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
};

function Project({
  className,
  isOdd,
  title,
  description,
  image,
  link,
  github,
  tags,
}: ProjectProps) {
  return (
    <div
      className={`project-card w-full border-[6px] border-[var(--geist-background)] grid md:grid-cols-2 overflow-hidden rounded-[20px] h-[500px] md:h-[600px]`}
    >
      <div className="h-full bg-[var(--geist-background)] flex flex-col gap-5 justify-center p-6 md:py-0 md:px-10">
        <h3 className="font-bold text-2xl md:text-4xl lg:text-6xl text-[var(--accents-7)]">
          {title}
        </h3>
        <p className="text-[var(--accents-6)] text-lg">{description}</p>
        <div className="border-b-2 flex gap-8 pt-5 border-b-[var(--accents-2)] pb-5">
          <a
            href={link}
            target="_blank"
            className="bg-[var(--accents-7)] group flex items-center gap-1 px-4 py-2 rounded-full"
          >
            View live
            <Icons.arrowRight className="group-hover:-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all" />
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              className="border-2 border-[var(--accents-7)] group flex text-[var(--accents-7)] items-center gap-1 px-4 py-2 rounded-full"
            >
              View code
              <Icons.arrowRight className="group-hover:-rotate-45 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all" />
            </a>
          )}
        </div>
        <TechStack stack={tags} />
      </div>
      <div
        className={`h-full hidden md:flex flex-col justify-center bg-gradient-to-br overflow-hidden from-[var(--accents-8)] to-yellow-50 ${
          isOdd
            ? "order-last rounded-r-[calc(20px-8px)]"
            : "order-first rounded-l-[calc(20px-8px)]"
        }`}
      >
        <img src={image} alt={image} className="object-cover h-full" />
      </div>
    </div>
  );
}

function TechStack({ stack }: { stack: string[] }) {
  return (
    <div className="flex items-center gap-[7px]">
      {stack.map((tech, index) => (
        <div key={index} className="relative">
          {index !== stack.length - 1 && (
            <svg
              viewBox="0 0 10.21 24"
              className="absolute top-1/2 -right-2 w-2 -translate-y-1/2 text-white z-0"
              preserveAspectRatio="none"
              fill="var(--accents-2)"
            >
              <path d="M10.21 4V0a4.09 4.09 0 0 1-4 4H4a4.09 4.09 0 0 1-4-4v24a4.09 4.09 0 0 1 4-4h2.21a4.09 4.09 0 0 1 4 4V4Z"></path>
            </svg>
          )}

          <p
            className={`${
              index == 0 ? "translate-x-[1px]" : ""
            } text-xs bg-[var(--accents-2)] text-[var(--accents-8)] rounded px-4 py-2 flex items-center`}
          >
            {tech}
          </p>
        </div>
      ))}
    </div>
  );
}
