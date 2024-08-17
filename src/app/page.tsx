import { GridLineBG } from "@/components/LineBG";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { WorkSection } from "@/components/Work";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full overflow-x-hidden pb-96">
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
    </main>
  );
}
