import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeInitializer } from "@/components/ThemeInitializer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FlowPilot — The Modern Workspace for High-Velocity Teams",
  description:
    "Manage projects, automate repetitive work with AI, collaborate with your team, and track performance from one beautiful workspace. Loved by 50,000+ teams.",
  keywords:
    "project management, AI, collaboration, task tracking, kanban, productivity",
  openGraph: {
    title: "FlowPilot — Plan, Build, Ship Faster",
    description:
      "Replace scattered tools with one modern platform. FlowPilot brings AI, kanban, analytics and real-time collaboration together.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col antialiased bg-background text-text font-sans">
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
