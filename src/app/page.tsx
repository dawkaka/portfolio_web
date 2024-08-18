"use client";
import { GridLineBG } from "@/components/LineBG";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/Work";
import { Projects } from "@/components/Projects";
import ReactLenis from "lenis/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden pb-96">
      <ReactLenis root ref={lenisRef}>
        <NavBar />
        <div className="fixed c-container inset-0 grid grid-cols-12 gap-4 [&>div]:border [&>div]:border-gray-200 [&>div]:border-dashed -z-[1]">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <Hero />
        <WorkSection />
        <Projects />
        <div className="h-[1000px]"></div>
      </ReactLenis>
    </main>
  );
}
