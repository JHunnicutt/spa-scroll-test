"use client";

import Section from "~/components/Section";
import { twMerge } from "tailwind-merge";
import { useRef, useEffect } from "react";

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    scrollRef.current.style.transform = `translate(${900}px, 50%)`;
  }, []);

  function handleScroll(e: any) {
    const scrollPosition = e.target.scrollTop;
    const scrollMax = e.target.scrollHeight / 1.25;
    const scrollPercentage = scrollPosition / scrollMax;

    const scaler = 1800;

    const bgPosition = (1 - scrollPercentage) * scaler - scaler / 2;

    scrollRef.current.style.transform = `translate(${bgPosition}px, 50%)`;
  }

  return (
    <main className="persp h-full w-full">
      <div
        className={`fixed -top-1/2 h-screen w-screen bg-[url('/aktiga-background-shapes.png')] bg-contain bg-no-repeat`}
        ref={scrollRef}
      ></div>
      <div
        onScroll={handleScroll}
        className="outerDiv absolute h-[100vw] w-[100vh] origin-top-left translate-y-[100vh] -rotate-90 overflow-x-hidden overflow-y-scroll"
      >
        <div className="innerDiv flex w-[500vw] origin-top-left translate-x-[100vh] rotate-90">
          <div className="slide h-screen w-screen" id="home">
            <Section heading="Home"></Section>
          </div>
          <div className="slide h-screen w-screen" id="about">
            <Section heading="About Us"></Section>
          </div>
          <div className="slide h-screen w-screen" id="products">
            <Section heading="Products"></Section>
          </div>
          <div className="slide h-screen w-screen" id="blog">
            <Section heading="Blog"></Section>
          </div>
          <div className="slide h-screen w-screen" id="contact">
            <Section heading="Contact"></Section>
          </div>
        </div>
      </div>
    </main>
  );
}

// absolute h-[100vw] w-[100vh] origin-top-left translate-x-[-100vh] -rotate-90 overflow-x-hidden overflow-y-scroll
// flex w-[200vw] origin-top-left translate-y-[-100vh] rotate-90
