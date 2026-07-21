import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name}, ${profile.title}`;
const description =
  "Interactieve motivatie-website van Jesse Bodde voor het AI Traineeship bij The Automation Group: een werkend voorbeeld van AI-automatisering, agentic workflows en denkkracht in plaats van een standaard motivatiebrief.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Jesse Bodde",
    "AI Trainee",
    "AI Engineer",
    "Agentic Engineering",
    "The Automation Group",
    "n8n automatisering",
    "AI automation portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
