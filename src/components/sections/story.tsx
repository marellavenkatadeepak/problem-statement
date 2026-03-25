"use client";
import React from "react";
import { motion } from "framer-motion";

const narrative = [
  {
    emoji: "🔴",
    heading: "The Problem Today",
    lines: [
      "Systems are fragmented. Data sits in silos.",
      "Decisions are made without context or explanation.",
      "AI is bolted on top of broken processes.",
    ],
  },
  {
    emoji: "🟡",
    heading: "What's Being Built",
    lines: [
      "Generic chatbots with no memory or grounding.",
      "Classifiers that can't be interrogated.",
      "Models that perform in notebooks, fail in production.",
    ],
  },
  {
    emoji: "🟢",
    heading: "What We Want",
    lines: [
      "Context-aware AI that understands workflow and environment.",
      "Explainable systems that show their reasoning.",
      "Real-world deployment: APIs, integration, observability.",
    ],
  },
];

export const StorySection = () => {
  return (
    <section id="story" className="py-28 px-6 bg-[#3D2412] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#895129]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#E08543]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            The Story
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            Why This Hackathon Exists
          </h2>
          <p className="text-[#FAF9F6]/55 max-w-2xl mx-auto">
            The gap between AI research and real-world deployment is still enormous. We're here to close it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {narrative.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < narrative.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px border-t border-dashed border-[#663C1F] z-0" />
              )}
              <div className="relative z-10 p-7 rounded-2xl border border-[#663C1F] bg-[#663C1F]/15 hover:bg-[#663C1F]/25 hover:border-[#895129] transition-all duration-300">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-black text-[#FAF9F6] mb-4">{item.heading}</h3>
                <ul className="space-y-2">
                  {item.lines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2 text-sm text-[#FAF9F6]/60"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#E08543] shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-[#FAF9F6] max-w-3xl mx-auto">
            "An AI that can't be deployed is just a very expensive research paper."
          </blockquote>
          <p className="mt-3 text-[#E08543] font-semibold">— THE GEN-AI MANIFESTO</p>
        </motion.div>
      </div>
    </section>
  );
};
