"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

type Track = {
  title: string;
  description: string;
  difficulty: "Flagship" | "Advanced" | "Foundation";
  expectedOutput: string;
  whyItMatters: string;
};

const tracks: Track[] = [
  // Flagship
  {
    title: "Healthcare",
    description:
      "Build an agentic AI system that can monitor patient health data in real time, detect anomalies, recommend interventions, and autonomously coordinate with healthcare providers while continuously learning from outcomes to improve decision-making.",
    difficulty: "Flagship",
    expectedOutput: "A real-time patient monitoring dashboard with anomaly detection, intervention recommendations, and provider coordination workflows driven by an agentic AI.",
    whyItMatters: "Timely detection of health anomalies and coordinated care can save lives — agentic AI makes this scalable and continuously improving.",
  },
  {
    title: "MCP-Based AI Work Assistant",
    description:
      "Build a context-aware AI assistant using Model Context Protocol (MCP) that integrates GitHub, Jira, Slack, and calendars to proactively surface actionable work insights.",
    difficulty: "Flagship",
    expectedOutput: "MCP server with tool integrations + a working demo of contextual assistance.",
    whyItMatters: "Knowledge workers spend 40% of their time on coordination overhead — fix it.",
  },
  // Advanced
  {
    title: "Hallucination Detection",
    description:
      "Build a system that detects and flags hallucinated content in LLM outputs using context-grounding and semantic consistency checks.",
    difficulty: "Advanced",
    expectedOutput: "A pipeline that scores model outputs for factual drift with explanations.",
    whyItMatters: "Unreliable AI is dangerous in finance, healthcare, and legal domains.",
  },
  {
    title: "Dataset Quality Analyzer",
    description:
      "Implement a tool that evaluates datasets for bias, noise, duplication, and class imbalance, providing actionable reports with NLP support.",
    difficulty: "Advanced",
    expectedOutput: "CLI or dashboard with quality metrics and visual reports.",
    whyItMatters: "Garbage in, garbage out. Dataset quality is the hidden lever of AI performance.",
  },
  {
    title: "Event Recommender",
    description:
      "Create a personalized event recommendation engine using collaborative filtering and user context to surface relevant local and online events.",
    difficulty: "Advanced",
    expectedOutput: "API or UI that delivers personalized recommendations with reasoning.",
    whyItMatters: "Poorly targeted events waste time. Good ones drive real community value.",
  },
  {
    title: "Technology",
    description:
      "Build an agentic AI system that can analyze codebases, identify bugs or inefficiencies, autonomously suggest fixes, test solutions, and iteratively improve code quality while integrating with developer tools and environments.",
    difficulty: "Advanced",
    expectedOutput: "An agentic coding assistant that autonomously detects issues, proposes and validates fixes, and integrates with developer workflows such as GitHub, CI/CD, and IDEs.",
    whyItMatters: "Code quality bottlenecks cost engineering teams millions of hours — agentic AI that iteratively improves codebases can fundamentally change how software is built.",
  },
  // Foundation
  {
    title: "Churn Predictor",
    description:
      "Build a customer churn prediction model with explainable outputs, actionable retention recommendations, and a simple front-end.",
    difficulty: "Foundation",
    expectedOutput: "Cltion change withassification model + feature importance + retention suggestions UI.",
    whyItMatters: "Retaining one customer is 5x cheaper than acquiring a new one.",
  },
  {
    title: "Agriculture",
    description:
      "Build an agentic AI system that can analyze weather, soil, and crop data to predict risks, recommend actions, and autonomously assist farmers in optimizing yield and minimizing losses through continuous adaptation.",
    difficulty: "Foundation",
    expectedOutput: "A farmer-facing dashboard or app with real-time risk alerts, actionable recommendations, and adaptive planning powered by agentic AI.",
    whyItMatters: "Agriculture feeds the world — agentic AI that helps farmers adapt to unpredictable conditions can prevent crop losses and improve food security.",
  },
  {
    title: "Form Filler",
    description:
      "Build an intelligent form-filling assistant that extracts relevant information from documents and populates structured forms automatically.",
    difficulty: "Foundation",
    expectedOutput: "Drag & drop document → auto-filled form fields with confidence scores.",
    whyItMatters: "Manual data entry costs SMBs thousands of hours per year.",
  },
  {
    title: "TOON Converter",
    description:
      "Build a pipeline that converts text or structured data into tokenized graph structures (TOONs) for richer representation in AI systems.",
    difficulty: "Foundation",
    expectedOutput: "Input → TOON graph visualization with token relationship maps.",
    whyItMatters: "Graph-based representations improve AI reasoning over structured domains.",
  },
];

const difficultyConfig = {
  Flagship: { color: "text-[#818cf8]", bg: "bg-[#818cf8]/10 border-[#818cf8]/40", label: "🏆 Flagship Track" },
  Advanced: { color: "text-[#FAF9F6]", bg: "bg-[#4f46e5]/10 border-[#4f46e5]/40", label: "⚡ Advanced Track" },
  Foundation: { color: "text-[#FAF9F6]/70", bg: "bg-[#1e1b4b]/20 border-[#1e1b4b]/40", label: "🌱 Foundation Track" },
};

const TrackCard = ({ track, index }: { track: Track; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const cfg = difficultyConfig[track.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "rounded-2xl border p-6 cursor-pointer transition-all duration-300 group",
        "bg-[#0a0a0f] hover:bg-[#0f0f1a]",
        track.difficulty === "Flagship" ? "border-[#818cf8]/30 hover:border-[#818cf8]/60" : "border-[#1e1b4b] hover:border-[#4f46e5]"
      )}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span
            className={cn(
              "inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-3",
              cfg.bg,
              cfg.color
            )}
          >
            {cfg.label}
          </span>
          <h3 className="text-lg font-bold text-[#FAF9F6] group-hover:text-[#818cf8] transition-colors">
            {track.title}
          </h3>
          <p className="mt-2 text-sm text-[#FAF9F6]/55 leading-relaxed">{track.description}</p>
        </div>
        <button className="shrink-0 text-[#FAF9F6]/40 hover:text-[#818cf8] transition-colors mt-1">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Expanded */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-5 pt-5 border-t border-[#1e1b4b] grid md:grid-cols-2 gap-4"
        >
          <div className="rounded-xl bg-[#1e1b4b]/20 p-4">
            <p className="text-xs uppercase text-[#818cf8] font-bold tracking-widest mb-1">Expected Output</p>
            <p className="text-sm text-[#FAF9F6]/70">{track.expectedOutput}</p>
          </div>
          <div className="rounded-xl bg-[#1e1b4b]/20 p-4">
            <p className="text-xs uppercase text-[#818cf8] font-bold tracking-widest mb-1">Why It Matters</p>
            <p className="text-sm text-[#FAF9F6]/70">{track.whyItMatters}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const categories = ["All", "Flagship", "Advanced", "Foundation"] as const;

export const TracksSection = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? tracks : tracks.filter((t) => t.difficulty === filter);

  return (
    <section id="tracks" className="py-28 px-6" style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #050508 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#818cf8] mb-4 font-semibold">
            Problem Tracks
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            Choose Your Challenge
          </h2>
          <p className="text-[#FAF9F6]/55 max-w-2xl mx-auto">
            Ten carefully designed tracks spanning government AI, tooling, data quality, and more. Each card expands to reveal the full brief.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-10 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold border transition-all",
                filter === cat
                  ? "bg-[#4f46e5] border-[#4f46e5] text-[#FAF9F6]"
                  : "border-[#1e1b4b] text-[#FAF9F6]/50 hover:border-[#4f46e5] hover:text-[#FAF9F6]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((track, i) => (
            <TrackCard key={track.title} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
