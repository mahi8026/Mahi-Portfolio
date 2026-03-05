import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO OPTIMIZATION: Enhanced metadata with proper Open Graph and Twitter cards
export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mahi.dev"),
  title: {
    default: "Mahi.Dev - Full Stack Developer Portfolio",
    template: "%s | Mahi.Dev",
  },
  description:
    "Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building accessible, pixel-perfect, and performant web applications with passion and precision.",
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
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Mahi Rahman", url: "https://github.com/mahi8026" }],
  creator: "Mahi Rahman",
  publisher: "Mahi Rahman",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mahi.dev",
    siteName: "Mahi.Dev",
    title: "Mahi.Dev - Full Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Node.js, and modern web technologies. Building accessible, pixel-perfect, and performant web applications.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahi.Dev - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahi.Dev - Full Stack Developer Portfolio",
    description:
      "Full-Stack Developer specializing in React, Node.js, and modern web technologies",
    creator: "@mahi_dev",
    images: ["/images/og-image.png"],
  },
  verification: {
    // Add your verification codes here
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

// BUG FIX: Removed duplicate title tag (already in metadata)
// ACCESSIBILITY: Added proper lang attribute and viewport meta
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300 antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
