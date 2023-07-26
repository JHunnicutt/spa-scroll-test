import Link from "next/link";
import Section from "~/components/Section";

export default function HomePage() {
  return (
    <main>
      <div className="absolute h-[100vw] w-[100vh] origin-top-left translate-y-[100vh] -rotate-90 overflow-x-hidden overflow-y-scroll">
        <div className="flex w-[500vw] origin-top-left translate-x-[100vh] rotate-90">
          <div className="slide h-screen w-screen">
            <Section heading="Home"></Section>
          </div>
          <div className="slide h-screen w-screen">
            <Section heading="About Us"></Section>
          </div>
          <div className="slide h-screen w-screen">
            <Section heading="Products"></Section>
          </div>
          <div className="slide h-screen w-screen">
            <Section heading="Blog"></Section>
          </div>
          <div className="slide h-screen w-screen">
            <Section heading="Contact"></Section>
          </div>
        </div>
      </div>
    </main>
  );
}

// absolute h-[100vw] w-[100vh] origin-top-left translate-x-[-100vh] -rotate-90 overflow-x-hidden overflow-y-scroll
// flex w-[200vw] origin-top-left translate-y-[-100vh] rotate-90
