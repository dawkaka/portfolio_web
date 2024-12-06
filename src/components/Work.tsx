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
      <section className="py-14 md:py-14 z-20" ref={parentContainer} id="work">
        <div className={roboto.className}>
          <div
            id="work-slide"
            className=" flex items-center gap-10 text-5xl font-bold text-[var(--accents-2)] select-none"
          >
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <h1 key={index}>WORK </h1>
              ))}
          </div>
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
                summary={item.summary}
                resp={item.resp}
              />
            </div>
          ))}
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
  summary,
  resp,
}: {
  className: string;
  company: string;
  num: number;
  dateRange: string;
  summary: string;
  place: string;
  type: string;
  resp: string[];
}) {
  const itemRef = useRef(null);
  const [open, setOpen] = useState(false);
  useLayoutEffect(() => {
    gsap.to(itemRef.current, {
      scrollTrigger: {
        trigger: itemRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      y: "0",
      opacity: 1,
    });
  }, []);

  return (
    <div
      className={`${className} relative rounded-2xl overflow-hidden p-[1px] translate-y-36 opacity-0`}
      ref={itemRef}
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
            {/* <button onClick={() => setOpen(!open)}>
              <Icons.chevronUp
                className={`h-6 w-6 stroke-[var(--accents-5)] transition-all ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button> */}
            <p>{summary}</p>
            <ul className="mt-4 flex flex-col gap-1">
              {resp.map((item, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Icons.arrowLeft className="h-4 w-4 rotate-180 shrink-0 mt-1 font-bold text-[var(--accents-4)]" />
                  {item}
                </li>
              ))}
            </ul>
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
    className: "col-span-12 md:col-span-6",
    type: "Full-time | Software Developer",
    summary:
      "APIToolkit is an OpenTelemetry vendor that helps developers monitor their APIs and spot bugs faster",
    resp: [
      "Ingesting and visualizing open telemetry logs, metrics and traces (span list, flamegraph, waterfall etc.)",
      "Built a query builder that allows our customers to easily query their request logs without writing our query language",
      "Built an in-house swagger editor and generator, It generates swagger doc based on a project's traffic which is very reliable and up-to-date",
      "Rebuilt the entire site, landing page, pricing page, documentation, and blog page.",
      "Built several SDKs in various programming languages and frameworks which allows our customers to integrate APIToolkit into their backends seamlessly.",
      "Writing clear and concise documentation on how to use our SDK",
    ],
  },
  {
    company: "Prime Couples",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - 2021",
    className: "col-span-12 md:row-span-1 md:col-start-4 md:col-span-6",
    type: "Full-time | Full Stack Developer",
    summary:
      "Prime couples is a social media made for couples to share their love and relationship with their followers. Much like instagram but for couples instead of individual profiles.",
    resp: [
      "Built most of the backend in Go",
      "Built the frontend using NextJs and Typescript",
      "Built the posts recommendation algorithms to show posts users are interested in",
      "Implemented the chat feature using socket.io and NodeJs",
      "Responsible for deployment and maintenance of the site. Hosted on AWS (EC2, S3, CLoudFront, SES)",
    ],
  },
  {
    company: "Toonji Lyrics",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - 2021",
    className: "md:row-span-1 md:col-start-7 col-span-12",
    type: "Full-time | Full Stack Developer",
    summary:
      "Toonji provides a dynamic platform tailored for music enthusiasts, akin to Genius but enhanced with captivating features catered specifically to music lovers.",
    resp: [
      "Creation of the real-time battle feature, enabling users to initiate quiz competitions based on selected artists' song lyrics and shareable links.",
      "Complete development of the mobile application using React Native.",
      "Implementation of an award system to recognize high-quality breakdown contributions.",
      "End-to-end parsing and validation of new lyrics posted on the platform.",
      "Management of hosting and server operations on AWS (utilizing EC2, S3 for file storage, and CloudFront as CDN).",
      "Integration of Spotify for seamless audio playback of selected lyrics.",
    ],
  },
  {
    company: "Freelance Developer",
    place: "Accra, Ghana. Remote",
    dateRange: "2020 - present",
    className: "row-span-1 col-span-12 md:col-start-4 md:col-span-6",
    type: "Full-time | Full Stack Developer",
    summary: "Freelance work I did for clients",
    resp: [
      "Jay Data Gh, a website that allows people to seamlessly buy affordable data bundles",
      "A voting website for a local college",
      "Many other landing page websites for several clients",
    ],
  },
  {
    company: "Hotels.ng",
    place: "Lagos, Nigeria. Remote",
    dateRange: "2020 - 2021",
    className: "col-span-12 col-start-1 md:col-span-6",
    type: "Internship | Frontend Developer",
    summary:
      "As part of the frontend team, we collaborated with designers, backend engineers, and product managers to build a weather app targeting tropical areas",
    resp: [
      "Helped team members in debugging and fixing issues they faced.",
      "Built the landing page of the application",
      'Creating a dynamic animation displaying current time and weather information, known as "the line."',
      "Added custom theme selection on the platform",
      "Built the search locations functionality using geolocation API",
    ],
  },
];
