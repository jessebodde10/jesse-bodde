import type { Metadata } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const serifDisplay = Instrument_Serif({
  variable: "--font-serif-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const sansBody = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = "Jesse Bodde | Portfolio, AI-automatisering & procesverbetering";
const description =
  "Portfolio van Jesse Bodde: ervaring in AI-automatisering, procesverbetering, ondernemerschap, customer success en logistiek.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s | Jesse Bodde",
  },
  description,
  keywords: [
    "Jesse Bodde",
    "portfolio",
    "AI-automatisering",
    "procesverbetering",
    "n8n",
    "workflow automatisering",
    "customer success",
    "logistiek en douane",
    "ondernemerschap",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description,
    type: "profile",
    locale: "nl_NL",
    siteName: `${profile.name} Portfolio`,
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
      /* The /voorbeeld theme script sets the `dark` class before hydration, so
         the class list legitimately differs from the server render. */
      suppressHydrationWarning
      className={`${serifDisplay.variable} ${sansBody.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
