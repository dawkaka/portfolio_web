"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { Icons } from "./Icons";
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const parentContainer = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.to("#bar", {
      scrollTrigger: {
        trigger: parentContainer.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      width: "1200px",
    });
  }, []);

  return (
    <div
      ref={parentContainer}
      className="c-container py-44 relative overflow-visible  text-slate-800"
    >
      <div className="grid grid-cols-12 justify-between">
        <div className="text-[7rem] col-span-10 tracking-widest leading-[.75] font-black w-3/4 overflow-visible">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">The name...</span>
            <h1 className="text-3xl flex items-center tracking-normal font-medium italic font-sans text-orange-500">
              Yussif Mohammed
            </h1>
          </div>
          <h2 className="mt-8">SENIOR</h2>
          <div className="flex items-center text-center">
            <h3 className="">FULL</h3>
            <div id="bar" className="h-5 w-0 shrink-0 bg-slate-800 mx-2">
              {" "}
            </div>
            <h3 className="">STACK</h3>
          </div>
          <h4 className="">DEVELOPER</h4>
        </div>
        <div className="flex flex-col  gap-4 justify-between col-span-2 items-center">
          <button className="rounded-full w-max border-2 border-slate-900 px-4 py-2 flex items-center gap-2">
            <Icons.mail className="h-4 w-4 stroke-slate-900" />
            Contact me
          </button>
          <button className="rounded-full w-max  border-2 border-slate-900 px-4 py-2 flex items-center gap-2">
            <Icons.in className="h-4 w-4 stroke-slate-900" />
            Linkedin
          </button>

          <button className="rounded-full w-max  border-2 border-slate-900 px-4 py-2 flex items-center gap-2">
            <Icons.github className="h-4 w-4 stroke-slate-900" />
            Github
          </button>
          <button className="rounded-full w-max  border-2 border-slate-900 px-4 py-2 flex items-center gap-2">
            <Icons.twitter className="h-4 w-4 fill-slate-900" />X
          </button>
        </div>
      </div>
    </div>
  );
}