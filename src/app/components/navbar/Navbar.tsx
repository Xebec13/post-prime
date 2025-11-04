"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { type: "logo", href: "#home", alt: "Go to Home" },
  { type: "link", href: "#videos", label: "Videos", alt: "Watch our latest videos" },
  { type: "link", href: "#posts", label: "Posts", alt: "Read our latest posts" },
  { type: "link", href: "#news", label: "News", alt: "See recent news" },
  { type: "link", href: "#about", label: "About", alt: "Learn more about us" },
];
const socialLinks = [
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 py-3 px-3 sm:px-9 z-50 w-full flex items-center justify-between">

      {/* === LEFT SIDE – LOGO === */}
      <div className="backdrop-invert rounded-full">
        <Link href={navItems[0].href} aria-label={navItems[0].alt}>
          <Image
            src="/postprime-logo-2.png"
            alt="Post Prime logo"
            width={40}
            height={40}
            priority
            className="object-contain p-1 size-10"
          />
        </Link>
      </div>

      {/* === RIGHT SIDE – TOGGLE BUTTON === */}
      <div className="relative z-50 flex items-center rounded-md backdrop-invert">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="text-2xl text-orange-500 p-2 rounded-md cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* === FULLSCREEN OVERLAY MENU === */}
      <ul
        className={`fixed top-0 right-0 pt-20 px-6 h-screen w-2/3 sm:w-1/3 flex flex-col justify-between bg-orange-100 transition-all duration-500 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}
      >
        <div className="text-neutral-800 text-4xl font-semibold uppercase space-y-5">
          {navItems.map((item, i) =>
          (
            <li key={i}>
              <Link
                href={item.href}
                aria-label={item.alt}
                onClick={() => setIsOpen(false)}
                className="transition-colors duration-300 hover:text-orange-500"
              >
                {item.label}
              </Link>
            </li>
          )
          )}
        </div>
        {/* --- Social Links --- */}
        <div className="flex gap-2 pb-10 text-xs font-medium text-neutral-800 uppercase">
          {socialLinks.map((social, i) => (
            <p
              key={i}
              className="cursor-pointer p-2 transition-colors duration-300 hover:text-orange-500"
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label}
              </Link>
            </p>
          ))}
        </div>
      </ul>



    </nav>
  );
}