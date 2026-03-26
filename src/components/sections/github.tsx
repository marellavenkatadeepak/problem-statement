"use client";
import React from "react";
import { motion } from "framer-motion";
import { GitBranch, FolderOpen, Database, Code, Key } from "lucide-react";
import Link from "next/link";

const repos = [
  {
    icon: FolderOpen,
    title: "Starter Repository",
    description: "Boilerplate setup with project structure, example configs, and baseline utilities for all tracks.",
    link: "https://github.com",
    badge: "Template",
  },
  {
    icon: Database,
    title: "Datasets",
    description: "Curated datasets for traffic simulation, NLP evaluation, user behavior, queue modeling, and more.",
    link: "https://github.com",
    badge: "Data",
  },
  {
    icon: Code,
    title: "Sample Code",
    description: "Reference implementations in Python: RAG pipeline, hallucination checker, MCP tool skeleton.",
    link: "https://github.com",
    badge: "Examples",
  },
  {
    icon: Key,
    title: "API Playground",
    description: "Pre-configured examples for OpenAI, HuggingFace Inference, and webhook APIs with auth templates.",
    link: "https://github.com",
    badge: "APIs",
  },
];

export const GithubSection = () => {
  return (
    <section id="github" className="py-28 px-6" style={{ background: "linear-gradient(180deg, #2e1c0e 0%, #3D2412 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            GitHub
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            Start Building Today
          </h2>
          <p className="text-[#FAF9F6]/55 max-w-xl mx-auto">
            All starter materials, sample code, and datasets are open and ready to fork.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.title}
              href={repo.link}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex gap-4 p-6 rounded-2xl border border-[#663C1F] bg-[#3D2412] hover:bg-[#663C1F]/30 hover:border-[#895129] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#895129]/15 flex items-center justify-center shrink-0 group-hover:bg-[#895129]/30 transition-all">
                <repo.icon className="w-5 h-5 text-[#E08543]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-[#FAF9F6] group-hover:text-[#E08543] transition-colors">{repo.title}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#895129]/20 text-[#E08543] border border-[#895129]/30">{repo.badge}</span>
                </div>
                <p className="text-sm text-[#FAF9F6]/55 leading-relaxed">{repo.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            id="github-cta"
            href="https://github.com"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#895129] text-[#FAF9F6] font-bold hover:bg-[#E08543] transition-all shadow-xl shadow-[#895129]/20 hover:scale-105 duration-200"
          >
            <GitBranch className="w-5 h-5" />
            Start Building on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
