import type { Metadata } from "next";
import "./globals.css";
import OpenMirrorFooter from "./OpenMirrorFooter";
import OpenMirrorNav from "./OpenMirrorNav";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://friendbookagram.com"),
  title: "Friendbookagram",
  description:
    "The friend feed, minus the noise. Share photos and everyday moments with the people you actually know — private, calm, and invite-only. Join the waitlist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en" className="antialiased">
      <body>
        <OpenMirrorNav site="Friendbookagram.com" accent="#818CF8" />
        {children}
        <OpenMirrorFooter siteName="Friendbookagram.com" tagline="Where Your Friends Actually Stay in Touch" accent="#818CF8" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75GE4WX7VW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-75GE4WX7VW');`}
        </Script>
      </body>
    </html>
  );
}
