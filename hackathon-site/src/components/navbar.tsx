"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X, GitBranch } from "lucide-react";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Tracks", link: "#tracks" },
  { name: "Resources", link: "#resources" },
  { name: "Judging", link: "#judging" },
  { name: "FAQ", link: "#faq" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-[#3D2412]/80 backdrop-blur-md border-b border-[#663C1F]/50 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#895129] to-[#E08543] flex items-center justify-center font-bold text-xs text-[#FAF9F6]">
            G
          </div>
          <span className="text-xl font-bold tracking-tight text-[#FAF9F6]">
            GEN<span className="text-[#E08543]">-AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-[#FAF9F6]/70 hover:text-[#E08543] transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://github.com"
            target="_blank"
            className="p-2 rounded-full border border-[#663C1F] hover:bg-[#663C1F]/30 transition-all"
            aria-label="GitHub"
          >
            <GitBranch className="w-4 h-4 text-[#FAF9F6]" />
          </Link>
          <Link
            href="#register"
            className="px-5 py-2 rounded-full bg-[#895129] text-[#FAF9F6] text-sm font-semibold hover:bg-[#E08543] transition-all shadow-lg shadow-[#895129]/20"
          >
            Register Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#FAF9F6]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#3D2412] border-b border-[#663C1F] p-6 md:hidden flex flex-col space-y-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-base font-medium text-[#FAF9F6]/90 hover:text-[#E08543]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#register"
              className="mt-2 py-3 rounded-lg bg-[#895129] text-center text-[#FAF9F6] font-bold hover:bg-[#E08543] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
