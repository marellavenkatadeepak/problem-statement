"use client";
import React from "react";
import Link from "next/link";
import { GitBranch, Mail, Share2, Link2 } from "lucide-react";

const footerLinks = [
  {
    heading: "Hackathon",
    items: [
      { label: "About", href: "#about" },
      { label: "Problem Tracks", href: "#tracks" },
      { label: "Resources", href: "#resources" },
      { label: "Judging Criteria", href: "#judging" },
    ],
  },
  {
    heading: "Participate",
    items: [
      { label: "Register", href: "#register" },
      { label: "Submission Flow", href: "#submit" },
      { label: "FAQ", href: "#faq" },
      { label: "GitHub Starter Kit", href: "https://github.com" },
    ],
  },
  {
    heading: "Community",
    items: [
      { label: "Discord", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Contact Us", href: "mailto:hello@gen-ai.com" },
      { label: "Ranjith N: 79752 86267", href: "tel:7975286267" },
      { label: "K H Pradyumna: 9606171082", href: "tel:9606171082" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[#1e1b4b] bg-[#050508] px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-[#1e1b4b] bg-[#0a0a0f]/50 group-hover:border-[#4f46e5] transition-colors duration-200">
                <img
                  src="/logo.png"
                  alt="GenAI BMSIT Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black text-[#FAF9F6]">
                GEN<span className="text-[#818cf8]">-AI</span>
              </span>
            </Link>
            <p className="text-sm text-[#FAF9F6]/50 leading-relaxed mb-6">
              A hackathon for builders who believe AI should work in the real world — not just in notebooks.
            </p>
            <div className="flex gap-3">
              {[
                { icon: GitBranch, href: "https://github.com", label: "GitHub" },
                { icon: Share2, href: "#", label: "Twitter" },
                { icon: Link2, href: "https://in.linkedin.com/company/gen-ai-bmsit", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hello@gen-ai.com", label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#1e1b4b] flex items-center justify-center text-[#FAF9F6]/50 hover:text-[#818cf8] hover:border-[#4f46e5] transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs uppercase tracking-widest text-[#818cf8] font-bold mb-4">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#FAF9F6]/55 hover:text-[#FAF9F6] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e1b4b]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/35">
          <p>© 2025 GEN-AI Hackathon. All rights reserved.</p>
          <p>
            Built on real problems.{" "}
            <span className="text-[#818cf8]">Ship real solutions.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
