"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { ArrowRight, Code2, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background: "linear-gradient(135deg, #3D2412 0%, #4a2c17 30%, #663C1F 60%, #895129 100%)",
      }}
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#E08543" />
      <BackgroundBeams />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-[#895129] bg-[#663C1F]/40 backdrop-blur-sm"
      >
        <Code2 className="w-4 h-4 text-[#E08543]" />
        <span className="text-sm font-medium text-[#FAF9F6]/80">
          AI Hackathon — Real Systems, Real Impact
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative z-10 text-center text-6xl md:text-8xl font-black tracking-tight text-[#FAF9F6] max-w-5xl leading-tight"
      >
        Build AI Systems{" "}
        <span className="relative">
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #E08543, #895129, #E08543)" }}
          >
            That Actually Work
          </span>
        </span>{" "}
        in the Real World
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="relative z-10 mt-6 text-center text-xl md:text-2xl text-[#FAF9F6]/70 max-w-2xl font-medium"
      >
        A serious hackathon for builders who care about system design, reasoning, and measurable impact.
        No toy demos. No basic chatbots. Just real AI.
      </motion.p>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-8 text-center"
      >
        {[
          { label: "Problem Tracks", value: "10+" },
          { label: "Duration", value: "10 Days" },
          { label: "Focus Area", value: "Real World AI" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-4xl font-black text-[#E08543]">{s.value}</span>
            <span className="text-sm uppercase tracking-widest text-[#FAF9F6]/50 mt-1 font-semibold">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 mt-10 flex flex-wrap gap-4 justify-center"
      >
        <Link
          href="#register"
          id="cta-register"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#895129] text-[#FAF9F6] font-bold text-sm hover:bg-[#E08543] transition-all shadow-xl shadow-[#895129]/30 hover:scale-105 duration-200"
        >
          Register Now <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="#tracks"
          id="cta-tracks"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#895129] text-[#FAF9F6] font-bold text-sm hover:bg-[#895129]/20 transition-all duration-200"
        >
          View Tracks
        </Link>
        <Link
          href="#resources"
          id="cta-resources"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#663C1F] text-[#FAF9F6]/70 font-medium text-sm hover:bg-[#663C1F]/30 transition-all duration-200"
        >
          Explore Resources
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#FAF9F6]/40"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
