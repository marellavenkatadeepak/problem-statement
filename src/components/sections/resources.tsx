"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Resource = {
  title: string;
  description: string;
  link: string;
};

const coreResources: Resource[] = [
  { title: "LLM Basics", description: "Understand tokenization, attention, and how large language models work.", link: "https://huggingface.co/learn/llm-course" },
  { title: "REST APIs for AI", description: "Build and consume APIs that power your AI backend services.", link: "https://restfulapi.net" },
  { title: "RAG (Retrieval Aug. Gen.)", description: "Augment your LLM with real-world documents using retrieval pipelines.", link: "https://python.langchain.com/docs/use_cases/question_answering/" },
  { title: "Prompt Engineering", description: "Master the art and science of writing effective prompts for LLMs.", link: "https://www.promptingguide.ai" },
  { title: "Hugging Face Hub", description: "Explore thousands of open-source models, datasets, and spaces.", link: "https://huggingface.co" },
];

const GITHUB_CLASSROOM = "https://classroom.github.com/a/1Fgu3-bk";

const trackResources: { category: string; items: Resource[] }[] = [
  {
    category: "Traffic Optimization",
    items: [
      { title: "OpenCV Docs", description: "Computer vision library for real-time image processing.", link: "https://docs.opencv.org" },
      { title: "YOLOv8", description: "State-of-the-art real-time object detection for traffic analysis.", link: "https://docs.ultralytics.com" },
    ],
  },
  {
    category: "MCP Work Assistant",
    items: [
      { title: "GitHub REST API", description: "Access repositories, issues, and actions programmatically.", link: "https://docs.github.com/en/rest" },
      { title: "Slack Bolt SDK", description: "Build Slack apps and bots with event-driven architecture.", link: "https://slack.dev/bolt-python/" },
    ],
  },
  {
    category: "Dataset Quality",
    items: [
      { title: "spaCy NLP", description: "Industrial-strength NLP library for text processing pipelines.", link: "https://spacy.io" },
      { title: "Great Expectations", description: "Define and validate dataset quality expectations programmatically.", link: "https://greatexpectations.io" },
    ],
  },
  {
    category: "TOON Converter",
    items: [
      { title: "Hugging Face Tokenizers", description: "Fast tokenization library with BPE, WordPiece support.", link: "https://huggingface.co/docs/tokenizers" },
      { title: "NetworkX", description: "Python library for graph creation, manipulation, and visualization.", link: "https://networkx.org" },
    ],
  },
];

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <a
    href={resource.link}
    target="_blank" rel="noopener noreferrer"
    className="group flex items-start gap-3 p-5 rounded-xl border border-[#1e1b4b] bg-[#0a0a0f] hover:bg-[#1e1b4b]/30 hover:border-[#4f46e5] transition-all duration-200"
  >
    <div className="flex-1">
      <p className="text-base font-bold text-[#FAF9F6] group-hover:text-[#818cf8] transition-colors">{resource.title}</p>
      <p className="text-sm text-[#FAF9F6]/55 mt-1 leading-relaxed">{resource.description}</p>
    </div>
    <ExternalLink className="w-4 h-4 text-[#FAF9F6]/30 group-hover:text-[#818cf8] transition-colors shrink-0 mt-0.5" />
  </a>
);

export const ResourcesSection = () => {
  return (
    <section id="resources" className="py-28 px-6 bg-[#050508]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#818cf8] mb-4 font-semibold">
            Resources
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-[#FAF9F6] mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-lg text-[#FAF9F6]/55 max-w-xl mx-auto">
            Curated resources for all tracks so you spend less time searching and more time building.
          </p>
        </motion.div>

        {/* GitHub Classroom Join Banner */}
        <motion.a
          href={GITHUB_CLASSROOM}
          target="_blank" rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group mb-14 flex flex-col sm:flex-row items-center gap-5 p-7 rounded-2xl border-2 border-[#16a34a]/60 bg-[#16a34a]/10 hover:bg-[#16a34a]/15 hover:border-[#22c55e] transition-all duration-200"
        >
          <div className="text-4xl">🎓</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xl font-black text-[#FAF9F6] group-hover:text-[#22c55e] transition-colors">
              Join the GitHub Classroom
            </p>
            <p className="text-sm text-[#FAF9F6]/60 mt-1">
              All assignments, starter kits, and submission templates are in the Inmodel Labs Classroom. Accept your invite to get started.
            </p>
          </div>
          <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16a34a] text-[#FAF9F6] font-bold text-sm whitespace-nowrap group-hover:bg-[#22c55e] transition-all">
            Join Classroom →
          </div>
        </motion.a>

        {/* Core resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h3 className="text-xl font-black text-[#FAF9F6] mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#818cf8]" /> Core Resources
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coreResources.map((r) => (
              <ResourceCard key={r.title} resource={r} />
            ))}
          </div>
        </motion.div>

        {/* Track-specific */}
        <div className="grid md:grid-cols-2 gap-10">
          {trackResources.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-black text-[#FAF9F6] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4f46e5]" /> {cat.category}
              </h3>
              <div className="flex flex-col gap-3">
                {cat.items.map((r) => (
                  <ResourceCard key={r.title} resource={r} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
