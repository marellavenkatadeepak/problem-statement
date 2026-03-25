"use client";
import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Wrench, Upload, Monitor, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register",
    desc: "Sign up individually or as a team of up to 4. Get access to the starter kit and Discord channel.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "Build",
    desc: "10 Days to design, develop, and test your AI system. Use any open-source stack.",
  },
  {
    icon: Upload,
    step: "03",
    title: "Submit",
    desc: "Submit your GitHub repo + a working demo link before the deadline. No late submissions.",
  },
  {
    icon: Monitor,
    step: "04",
    title: "Demo",
    desc: "Live or async demo presentation to judges. Keep it focused, technical, and honest.",
  },
  {
    icon: Trophy,
    step: "05",
    title: "Judging",
    desc: "Scores across 6 dimensions are tallied. Winners announced within 24 hours.",
  },
];

export const SubmissionSection = () => {
  return (
    <section id="submit" className="py-28 px-6 bg-[#2e1c0e]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-[#E08543] mb-4 font-semibold">
            Submission Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#FAF9F6] mb-4">
            How It Works
          </h2>
          <p className="text-[#FAF9F6]/55 max-w-xl mx-auto">
            Five clear steps from sign-up to final results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px border-t border-dashed border-[#663C1F]" style={{ left: "10%", right: "10%" }} />

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#895129] bg-[#3D2412] flex items-center justify-center mb-4 hover:bg-[#895129]/30 hover:scale-110 transition-all duration-200">
                  <step.icon className="w-7 h-7 text-[#E08543]" />
                </div>
                <span className="text-xs font-black text-[#E08543] tracking-widest mb-1">{step.step}</span>
                <h3 className="text-base font-bold text-[#FAF9F6] mb-2">{step.title}</h3>
                <p className="text-xs text-[#FAF9F6]/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Register CTA */}
        <motion.div
          id="register"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-10 rounded-2xl border border-[#895129]/40 bg-[#663C1F]/15 text-center"
        >
          <h3 className="text-3xl font-black text-[#FAF9F6] mb-3">Ready to Build Something Real?</h3>
          <p className="text-[#FAF9F6]/55 mb-8">Registration is free. Bring your team, your tools, and your ambition.</p>
          <a
            href="https://classroom.github.com/a/1Fgu3-bk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#895129] text-[#FAF9F6] font-bold hover:bg-[#E08543] transition-all shadow-xl hover:scale-105 duration-200"
          >
            Register Your Team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
