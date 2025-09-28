"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navItems = [
  { type: "logo", href: "#home", alt: "Go to Home" },
  { type: "link", href: "#about", label: "About", alt: "Learn more about us" },
  { type: "link", href: "#videos", label: "Videos", alt: "Watch our latest videos" },
  { type: "link", href: "#posts", label: "Posts", alt: "Read our latest posts" },
  { type: "link", href: "#news", label: "News", alt: "See recent news" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-end p-6 text-orange-500 z-50">
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-sm font-bold uppercase w-full items-center">
        {navItems.map((item, i) =>
          item.type === "logo" ? (
            <li key={i} className="mr-auto cursor-pointer">
              <Link href={item.href} aria-label={item.alt}>
                <Image
                  src="/postprime-logo.png"
                  alt="Post Prime logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain rounded-full bg-white/90"
                />
              </Link>
            </li>
          ) : (
            <li
              key={i}
              className="transition duration-500 hover:scale-105 hover:text-white"
            >
              <Link href={item.href} aria-label={item.alt}>
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="md:hidden text-2xl cursor-pointer z-50"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen mobile overlay */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-black/80 flex flex-col justify-center items-center gap-8 text-2xl font-semibold uppercase text-white transform transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item, i) =>
          item.type === "logo" ? (
            <li key={i}>
              <Link
                href={item.href}
                aria-label={item.alt}
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/postprime-logo.png"
                  alt="Post Prime logo"
                  width={60}
                  height={60}
                  priority
                  className="object-contain rounded-full bg-white/90 p-1 hover:bg-orange-500/90 transition-colors duration-300"
                />
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={item.href}
                aria-label={item.alt}
                onClick={() => setIsOpen(false)}
                className="transition duration-300 hover:text-orange-400"
              >
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}