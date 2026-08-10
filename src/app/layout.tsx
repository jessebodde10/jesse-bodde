import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { profile } from "@/lib/data";
import "./globals.css";

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
      /* The theme script below sets the `dark` class before hydration, so the
         class list legitimately differs from the server render. */
      suppressHydrationWarning
      className={`${sansBody.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll reveals render as inline opacity:0 in the server HTML. If the
            script never runs, that would leave the page blank, so force every
            revealed element back to its resting state. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {/* Applies the stored theme before first paint so the page does not
            flash light before switching to dark. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s==="dark"||(s===null&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
