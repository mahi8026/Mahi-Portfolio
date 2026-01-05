import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahi.Dev - Full Stack Developer Portfolio",
  description:
    "Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building accessible, pixel-perfect, and performant web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "MERN Stack",
    "Next.js Developer",
    "Mahi Rahman",
    "Portfolio",
  ],
  authors: [{ name: "Mahi Rahman" }],
  creator: "Mahi Rahman",
  openGraph: {
    title: "Mahi.Dev - Full Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Node.js, and modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahi.Dev - Full Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Node.js, and modern web technologies",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
