"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const navItems = [
  { type: "logo", href: "#home", alt: "Go to Home" },
  { type: "link", href: "#videos", label: "Videos", alt: "Watch our latest videos" },
  { type: "link", href: "#posts", label: "Posts", alt: "Read our latest posts" },
  { type: "link", href: "#news", label: "News", alt: "See recent news" },
  { type: "link", href: "#about", label: "About", alt: "Learn more about us" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-end p-3 md:p-6 text-gray-100 transition-colors duration-300 ${
        isScrolled ? "md:backdrop-blur-sm md:bg-black/50" : "md:bg-transparent"
      }`}
    >
      {/* Desktop navigation */}
      <ul className="hidden w-full items-center gap-6 text-sm font-bold uppercase md:flex">
        {navItems.map((item, i) =>
          item.type === "logo" ? (
            <li key={i} className="mr-auto cursor-pointer bg-white/90 rounded-full">
              <Link href={item.href} aria-label={item.alt}>
                <Image
                  src="/postprime-logo-1.png"
                  alt="Post Prime logo"
                  width={40}
                  height={40}
                  priority
                  className="object-contain p-0.5"
                />
              </Link>
            </li>
          ) : (
            <li
              key={i}
              className="transition-transform duration-500 hover:scale-105 hover:text-orange-500"
            >
              <Link href={item.href} aria-label={item.alt}>
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile menu toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="z-50 cursor-pointer text-2xl md:hidden backdrop-blur-2xl p-2 rounded-full"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen mobile overlay */}
      <ul
        className={`fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-black/90 text-2xl font-semibold uppercase text-white transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "-translate-x-full opacity-0 invisible"
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
                  src="/postprime-logo-1.png"
                  alt="Post Prime logo"
                  width={60}
                  height={60}
                  priority
                  className="rounded-full bg-white/90 p-1 object-contain transition-colors duration-300 hover:bg-orange-500/90"
                />
              </Link>
            </li>
          ) : (
            <li key={i}>
              <Link
                href={item.href}
                aria-label={item.alt}
                onClick={() => setIsOpen(false)}
                className="transition-colors duration-300 hover:text-orange-400"
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