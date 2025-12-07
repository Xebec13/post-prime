import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Twoja konfiguracja obrazków (bez zmian)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  // NOWOŚĆ: Wymuszenie sprawdzania zmian w plikach
  webpack: (config) => {
    config.watchOptions = {
      poll: 800,             // Sprawdzaj zmiany co 800ms
      aggregateTimeout: 300, // Czekaj 300ms przed przebudowaniem (zbieranie zmian)
      ignored: /node_modules/,
    };
    return config;
  },
};

export default nextConfig;