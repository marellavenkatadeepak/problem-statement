import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Real-World Solutions Hackathon",
  description: "Build AI systems that actually work in the real world. Focus on reasoning, system design, and impact.",
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
