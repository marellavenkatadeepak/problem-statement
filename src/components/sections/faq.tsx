"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do we need a working demo?",
    a: "Yes. A working demo is required for submission. It doesn't need to be polished, but it must run and demonstrate the core functionality of your AI system. Screenshots alone are not accepted.",
  },
  {
    q: "Can we use Hugging Face models?",
    a: "Absolutely. Hugging Face models, Transformers, Inference API, and Datasets are all encouraged. Open-source is the foundation of this hackathon.",
  },
  {
    q: "Can we use external APIs (OpenAI, Anthropic, etc.)?",
    a: "Yes, you may use commercial APIs. However, your system design, integration, and application logic are what will be evaluated — not just API calls.",
  },
  {
    q: "Can we simulate data if real data isn't available?",
    a: "Yes. Simulated or synthetic datasets are acceptable for tracks where real data is hard to obtain (e.g., Traffic Optimization). Document your simulation methodology clearly.",
  },
  {
    q: "Is MCP (Model Context Protocol) required for all tracks?",
    a: "MCP is only required for the Flagship MCP Work Assistant track. Other tracks have no MCP requirement. If you choose to use MCP in another track, that can count as an innovation bonus.",
  },
  {
    q: "Can I work solo?",
    a: "Yes. Solo participants are welcome. Teams can have up to 4 members.",
  },
  {
    q: "Is there a tech stack requirement?",
    a: "No mandatory stack. Use Python, JavaScript, Rust, or whatever serves your system best. We evaluate the outcome, not the tools.",
  },
];

const FAQItem = ({ item, index }: { item: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border-b border-[#663C1F] last:border-0"
    >
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-[#FAF9F6] group-hover:text-[#E08543] transition-colors">
          {item.q}
        </span>
        <span className="shrink-0 text-[#E08543]">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#FAF9F6]/60 leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section id="faq" className="py-28 px-6 bg-[#3D2412]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#FAF9F6]/55">
            Anything not covered here? Email us at{" "}
            <a href="mailto:hello@gen-ai.com" className="text-[#E08543] underline">
              hello@gen-ai.com
            </a>
          </p>
        </motion.div>

        <div className="rounded-2xl border border-[#663C1F] bg-[#663C1F]/10 px-6 divide-y divide-[#663C1F]">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
