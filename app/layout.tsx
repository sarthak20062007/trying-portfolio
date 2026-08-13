import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sarthak — Full Stack Developer, AI Developer & Freelancer",
  description:
    "Premium portfolio of Sarthak — Full Stack Web Developer, AI Developer, and Freelancer. Building modern, scalable web applications and AI-powered solutions.",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Freelancer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Sarthak" }],
  openGraph: {
    type: "website",
    title: "Sarthak — Full Stack Developer, AI Developer & Freelancer",
    description:
      "Building modern, scalable web applications and AI-powered solutions.",
    siteName: "Sarthak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak — Full Stack Developer, AI Developer & Freelancer",
    description:
      "Building modern, scalable web applications and AI-powered solutions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(inter.variable, spaceGrotesk.variable, "font-sans", geist.variable)}>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
