"use client";
import React from "react";
import { motion } from "framer-motion";

const criteria = [
  { name: "Real-World Impact", score: 25, desc: "Does it solve a real problem? Could someone actually use it?" },
  { name: "Technical Depth", score: 20, desc: "Architecture choices, system design, and implementation quality." },
  { name: "AI Usage", score: 20, desc: "How intelligently is AI integrated? Goes beyond simple API calls." },
  { name: "Integration", score: 15, desc: "How well does the system connect external data, APIs, and services?" },
  { name: "Demo Quality", score: 10, desc: "Is the demo polished, clear, and reproducible?" },
  { name: "Innovation", score: 10, desc: "Novel approach? Surprising application? Creative architecture?" },
];

export const JudgingSection = () => {
  return (
    <section id="judging" className="py-28 px-6 bg-[#3D2412]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            Evaluation
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            How We Judge
          </h2>
          <p className="text-[#FAF9F6]/55 max-w-xl mx-auto">
            100 points total. We weigh real-world usefulness and technical rigor above all else.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {criteria.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl border border-[#663C1F] bg-[#663C1F]/15 hover:bg-[#663C1F]/25 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-bold text-[#FAF9F6]">{c.name}</h3>
                  <p className="text-sm text-[#FAF9F6]/50 mt-0.5">{c.desc}</p>
                </div>
                <span className="ml-4 text-2xl font-black text-[#E08543] shrink-0">{c.score}pts</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-[#3D2412] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #895129, #E08543)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
