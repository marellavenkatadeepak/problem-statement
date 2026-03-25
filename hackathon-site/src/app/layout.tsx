import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEN-AI Hackathon | Build AI That Solves Real Problems",
  description: "GEN-AI — A serious hackathon focused on AI systems that solve real-world problems. System design, reasoning, and impact. No toy demos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
