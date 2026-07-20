import type { MetadataRoute } from "next";

// Installable-app manifest — same app-readiness layer as thedjcares.com,
// stepinthering.com, and idontcry.com.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Friendbookagram",
    short_name: "Friendbookagram",
    description:
      "Where your friends actually stay in touch. Private, calm, invite-only.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0b1220",
    theme_color: "#0b1220",
    icons: [
      { src: "/icons/friend-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/friend-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/friend-192-maskable.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/friend-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
