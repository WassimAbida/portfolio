import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"), // CHANGE FOR PRODUCTION
  title: "Wassim Abida",
  description:
    "Wassim Abida's portfolio, featuring projects and experience in Machine learning & software development.",
  keywords: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "C",
    "C++",
    "Engineering",
    "Software Engineer",
    "Full-Stack",
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "Full-Stack Development",
    "Web Development",
    "Machine Learning",
    "Artificial Intelligence",
    "ML",
    "AI",
    "Student",
    "Technology",
    "Tech",
    "Portfolio",
    "Wassim Abida",
  ],
  authors: [{ name: "Wassim Abida" }],
  openGraph: {
    type: "website",
    title: "Wassim Abida - Machine Learning Engineer",
    description:
      "Explore Wassim Abida's Software Engineering Portfolio including unique projects and his timeline.",
    images: [{ url: "/image.png" }], // CHANGE TO SCREENSHOT OF HOMEPAGE
  },
};

const roboto_mono = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto_mono.variable}`}>
      <body className="bg-body-grey text-white">
        <div className="mx-auto mt-[10vh] max-w-2xl sm:mt-[20vh] sm:flex">
          <Navbar />
          {children}
          <Analytics />
        </div>
        <Footer />
      </body>
    </html>
  );
}
