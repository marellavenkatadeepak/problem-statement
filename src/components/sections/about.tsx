"use client";
import React from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Target, Zap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Real AI Reasoning",
    desc: "We require systems that adapt, infer, and explain — not just predict from a notebook.",
  },
  {
    icon: Layers,
    title: "System-Level Thinking",
    desc: "Architecture matters. How your components integrate is as important as your model.",
  },
  {
    icon: Target,
    title: "Measurable Impact",
    desc: "Your submission should demonstrate concrete value in a real-world scenario.",
  },
  {
    icon: Zap,
    title: "Deployment Readiness",
    desc: "Prototype-quality stops here. We evaluate systems that can actually ship.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden" style={{ background: "#3D2412" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a2c17] to-[#3D2412] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            What is GEN-AI?
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-6 leading-tight">
            AI That Solves Real Problems
          </h2>
          <p className="text-lg text-[#FAF9F6]/60 max-w-3xl mx-auto">
            This hackathon is for builders who believe AI should live in the real world — not just in Jupyter notebooks.
            We focus on <strong className="text-[#E08543]">context-aware systems</strong>,{" "}
            <strong className="text-[#E08543]">explainable decisions</strong>, and{" "}
            <strong className="text-[#E08543]">impact-driven design</strong>.
          </p>
        </motion.div>

        {/* Divider statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 p-6 rounded-2xl border border-[#895129]/40 bg-[#663C1F]/20 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-[#FAF9F6]">
            No basic chatbot demos. No generic classifiers.{" "}
            <span className="text-[#E08543]">Ship a real system</span>.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-6 rounded-2xl border border-[#663C1F] bg-[#663C1F]/20 hover:bg-[#663C1F]/40 hover:border-[#895129] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#895129]/20 flex items-center justify-center mb-4 group-hover:bg-[#895129]/40 transition-all">
                <p.icon className="w-5 h-5 text-[#E08543]" />
              </div>
              <h3 className="font-bold text-[#FAF9F6] mb-2">{p.title}</h3>
              <p className="text-sm text-[#FAF9F6]/55">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
