"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/loading-screen";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { TracksSection } from "@/components/sections/tracks";
import { StorySection } from "@/components/sections/story";
import { ResourcesSection } from "@/components/sections/resources";
import { GithubSection } from "@/components/sections/github";
import { JudgingSection } from "@/components/sections/judging";
import { SubmissionSection } from "@/components/sections/submission";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <main>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <TracksSection />
          <StorySection />
          <ResourcesSection />
          <GithubSection />
          <JudgingSection />
          <SubmissionSection />
          <FAQSection />
          <Footer />
        </main>
      )}
    </>
  );
}
