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
export function WorkSection() {
  const parentContainer = useRef<HTMLDivElement | null>(null);

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
            className="translate-x-1/2 flex items-center gap-10 text-9xl font-bold text-[var(--accents-1)]"
          >
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
            <h1>WORK </h1>
          </div>
          <div className="relative c-container grid gap-y-16 w-full py-16">
            {workItemsData.map((item, index) => (
              <div key={index} className="grid grid-cols-12">
                <WorkItem
                  className={item.className}
                  num={workItemsData.length - index}
                  dateRange={item.dateRange}
                  company={item.company}
                  place={item.place}
                  type={item.type}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </GridLineBG>
  );
}

function WorkItem({
  className,
  company,
  num,
  dateRange,
  place,
  type,
}: {
  className: string;
  company: string;
  num: number;
  dateRange: string;
  place: string;
  type: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden p-[1px]`}
    >
      <div
        className="absolute top-0 left-0 w-full h-[calc(100%+3px)] animate-spin"
        style={{
          backgroundImage:
            "conic-gradient(transparent, transparent, transparent,transparent, var(--accents-3))",
        }}
      ></div>
      <article
        className={`relative rounded-2xl border border-[var(--accents-2)] h-max bg-[var(--accents-1)] before:absolute before:-top-[1px] before:-left-[1px] before:h-[calc(100%+2px)] before:w-[calc(100%+2px)] before:rounded-2xl before:bg-gradient-to-b before:from-transparent before:to-[var(--geist-background)]`}
      >
        <div className="overflow-hidden p-6 w-full relative">
          <div className="grid grid-cols-2 justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span className="text-xl text-[var(--accents-5)] shrink-0 bg-[var(--accents-2)] h-10 w-10 flex justify-center items-center rounded-full">
                  {num}
                </span>
                <h5 className="font-black text-[var(--accents-6)] text-2xl tracking-wide text-nowrap">
                  {company}
                </h5>
              </div>
              <span className="text-sm text-[var(--accents-5)]">{type}</span>
            </div>
            <div className="flex flex-col text-sm justify-between text-right text-[var(--accents-5)]">
              <span>{dateRange}</span>
              <span>{place}</span>
            </div>
          </div>
          <div className="mt-4 text-[var(--accents-6)]">
            <button onClick={() => setOpen(!open)}>
              <Icons.chevronUp
                className={`h-6 w-6 stroke-[var(--accents-5)] transition-all ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <p>
                I built and maintained a web application for a client that
                allows users to create and manage their own custom API
                documentation. I worked with a team of developers to design and
                implement the application, using React, Node.js, and MongoDB. I
                also worked with the client to ensure that the application met
                their requirements and was easy to use.
              </p>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

const workItemsData = [
  {
    company: "APItoolkit",
    place: "Berlin, Germany. Remote",
    dateRange: "Sep. 2020 - present",
    className: "col-span-6",
    type: "Full-time | Software Developer",
  },
  {
    company: "Prime Couples",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - 2021",
    className: "row-span-1 col-start-4 col-span-6",
    type: "Full-time | Full Stack Developer",
  },
  {
    company: "Toonji Lyrics",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - 2021",
    className: "row-span-1 col-start-7 col-span-12",
    type: "Full-time | Full Stack Developer",
  },
  {
    company: "Freelance Developer",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - 2021",
    className: "row-span-1 col-start-4 col-span-6",
    type: "Full-time | Full Stack Developer",
  },
  {
    company: "Hotels.ng",
    place: "Lagos, Nigeria. Remote",
    dateRange: "2020 - 2021",
    className: "row-span-1 col-start-1 col-span-6",
    type: "Internship | Frontend Developer",
  },
];
