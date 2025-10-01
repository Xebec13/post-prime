"use client";

import { FaYoutube, FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";

const platformItems = [
  { icon: FaYoutube, href: "https://youtube.com/@PostPrimePL", color: "text-red-500" },
  { icon: FaInstagram, href: "https://instagram.com/", color: "text-pink-400" },
  { icon: FaFacebook, href: "https://facebook.com/", color: "text-blue-500" },
  { icon: FaSpotify, href: "https://spotify.com/", color: "text-green-600" },
];

export default function PlatformsSection() {
  return (
    <section 
    className="bg-black/80">
      {/* Section content */}
      <div className="p-16 text-white text-shadow-orange-500/80 text-shadow-sm">
        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">Subscribe on:</h2>

        {/* Platform icons */}
        <div className="flex items-center justify-evenly gap-6">
          {platformItems.map(({ icon: Icon, href, color }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-4xl md:text-6xl ${color} transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1 hover:text-orange-500`}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}