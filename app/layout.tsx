import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Kumar Das - Co-founder & Engineering Leader | AI Innovation Expert",
  description: "Co-founder of ratl.ai, expert in AI-driven software testing, automation, and engineering leadership. Former Microsoft, Jio, SAS engineer specializing in scalable systems, DevOps, and full-stack development.",
  keywords: [
    "Amit Kumar Das",
    "AI engineer",
    "ratl.ai",
    "software testing automation",
    "engineering leader",
    "DevOps expert",
    "cloud architecture",
    "React developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Go",
    "Kubernetes",
    "Docker",
    "AWS",
    "microservices",
    "CI/CD",
    "full-stack developer",
    "startup founder",
    "Microsoft engineer",
    "Jio platform",
    "SAS R&D"
  ],
  authors: [{ name: "Amit Kumar Das", url: "https://amit-kumar-das.dev" }],
  creator: "Amit Kumar Das",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amit Kumar Das - Co-founder & Engineering Leader | AI Innovation Expert",
    description: "Leading AI innovation in software testing and automation at ratl.ai. Expert in scalable systems, DevOps, and engineering leadership with experience at Microsoft, Jio, and SAS.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
    siteName: "Amit Kumar Das - Portfolio & Professional Profile",
    images: [
      {
        url: "/hero-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Amit Kumar Das - Co-founder and Engineering Leader",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Kumar Das - AI Engineering Leader & Startup Co-founder",
    description: "Co-founder of ratl.ai, expert in AI-driven testing automation and engineering leadership. Building the future of software quality.",
    images: ["/hero-img.jpeg"],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon/web-app-manifest-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon/web-app-manifest-512x512.png" type="image/png" sizes="512x512" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
