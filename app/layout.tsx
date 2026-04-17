import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Talinghaga: Ang Pader ng mga Parinig.",
  description: "Talinghaga: Ang Pader ng mga Parinig. A public archive of unspoken truths and indirect thoughts. Read the whispers of the crowd, or leave your own metaphor behind. pwede rin rant lang."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${newsreader.variable} bg-surface text-on-surface`}>
        {children}
      </body>
    </html>
  );
}
