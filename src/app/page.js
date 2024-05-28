import dynamic from "next/dynamic";
import React, { Suspense } from "react";

// Dynamically import non-critical components
const HeroSection = dynamic(() => import("../components/HeroSection"), { ssr: true });
const AboutSection = dynamic(() => import("../components/AboutSection"));
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"));
const AchievementsSection = dynamic(() => import("../components/AchievementsSection"));
const ContactSection = dynamic(() => import("../components/ContactSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AchievementsSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <ContactSection />
        </Suspense>
      </div>
    </main>
  );
}
