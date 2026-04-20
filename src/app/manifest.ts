import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Qima Qama",
    short_name: "Qima Qama",
    description: "Discover Fiji’s culture, traditions, and stories.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#2f855a",
    icons: [
      {
        src: "/icon.png",
        sizes: "369x369",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "369x369",
        type: "image/png",
      },
    ],
  };
}
