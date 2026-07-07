import type { Metadata } from "next";
import "./globals.css";
import OpenMirrorFooter from "./OpenMirrorFooter";
import OpenMirrorNav from "./OpenMirrorNav";

export const metadata: Metadata = {
  title: "Friendbookagram.com — Where Your Friends Actually Stay in Touch",
  description:
    "The friend feed, minus the noise. Share photos and everyday moments with the people you actually know — private, calm, and invite-only. Join the waitlist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <OpenMirrorNav site="Friendbookagram.com" />
        {children}
        <OpenMirrorFooter siteName="Friendbookagram.com" tagline="Where Your Friends Actually Stay in Touch" accent="#818CF8" />
      </body>
    </html>
  );
}
