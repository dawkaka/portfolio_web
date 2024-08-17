"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { GridLineBG } from "./LineBG";
import { Roboto } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Icons } from "./Icons";
import { useGSAP } from "@gsap/react";
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
      const minScale = 0.9; // Minimum scale
      const maxScale = 1; // Maximum scale

      // Calculate scale between minScale and maxScale
      const scaleFactor =
        minScale + (maxScale - minScale) * (index / (cards.length - 1));

      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: `top bottom-=${index * spacer}`,
          end: `bottom top+=${200 + cards.length * spacer}`,
          scrub: true,
        },
        scale: scaleFactor,
      });

      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top+=10%`,
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
    <GridLineBG
      bgColor="bg-[var(--geist-foreground)]"
      lineColor="[&>div]:border-[var(--accents-7)]"
    >
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
        <div
          className="relative c-container flex flex-col items-center gap-[150px] w-full py-16"
          id="stack-container"
        >
          <div className="project-card w-full rounded-[100px] bg-yellow-100 h-[500px] scale-[1.25]"></div>
          <div className="project-card w-full rounded-[100px] bg-[var(--geist-background)] h-[500px] scale-[1.25]"></div>
          <div className="project-card w-full rounded-[100px] bg-blue-500 h-[500px] scale-[1.25]"></div>
          <div className="project-card w-full rounded-[100px] bg-green-500 h-[500px] scale-[1.25]"></div>
          <div className="project-card w-full rounded-[100px] bg-[var(--accents-6)] h-[500px] scale-[1.25]"></div>
          <div className="pin-panel h-[100px]"></div>
        </div>
      </section>
    </GridLineBG>
  );
}
