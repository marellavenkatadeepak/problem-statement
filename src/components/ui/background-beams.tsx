"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="beamGradient1" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="beamGradient2" cx="80%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0a0a0f" stopOpacity="0" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#beamGradient1)" />
        <rect width="100%" height="100%" fill="url(#beamGradient2)" />
        {/* Beam lines */}
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#4f46e5" strokeWidth="0.5" strokeOpacity="0.1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#818cf8" strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#4f46e5" strokeWidth="0.5" strokeOpacity="0.06" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#1e1b4b" strokeWidth="0.5" strokeOpacity="0.1" />
      </svg>
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-[80px]" />
    </div>
  );
};
