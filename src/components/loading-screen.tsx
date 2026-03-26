"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Total ~2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#0a0a0f] flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative flex flex-col items-center">
        {/* Text Logo Animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center"
        >
          <div className="absolute inset-0 bg-[#818cf8]/10 rounded-full blur-3xl animate-pulse" />
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-[#FAF9F6] tracking-tighter flex items-center gap-2"
          >
            GEN<span className="text-[#818cf8]">-</span>AI
          </motion.h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-[#818cf8] to-transparent mt-2"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="text-[12px] uppercase tracking-[0.5em] text-[#818cf8] font-bold mt-4"
          >
            THE MANIFESTO
          </motion.p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="mt-12 w-48 h-[2px] bg-[#1e1b4b]/30 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-[#4f46e5] to-[#818cf8]"
          />
        </div>
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4f46e5]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </motion.div>
  );
};
