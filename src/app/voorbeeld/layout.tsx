import type { Metadata } from "next";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Voorbeeld",
  description: "Voorbeeldweergave van een alternatieve portfolio-opzet.",
  robots: { index: false, follow: false },
};

/**
 * The preview runs its own surface colours so the warm paper palette of the
 * live site does not bleed into it. Scoped to this route only.
 */
export default function VoorbeeldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionProvider>
      {/* Applies the stored theme before first paint so the page does not flash
          light before switching to dark. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem("preview-theme");var d=s==="dark"||(s===null&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)}catch(e){}})()`,
        }}
      />
      <div className="min-h-screen flex-1 bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        {children}
      </div>
    </MotionProvider>
  );
}
