"use client";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { NavDesktop, NavMobile } from "./components";

const navItems = [
  { type: "logo", href: "#home", alt: "Go to Home" },
  { type: "link", href: "#videos", label: "Videos", alt: "Watch our latest videos" },
  { type: "link", href: "#posts", label: "Posts", alt: "Read our latest posts" },
  { type: "link", href: "#news", label: "News", alt: "See recent news" },
  { type: "link", href: "#about", label: "About", alt: "Learn more about us" },
];

export default function Nav() {
  const { isScrolled, duration } = useScrollPosition({ offset: 600, duration: 700 });

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-end p-3 sm:px-8 sm:py-4 text-neutral-700 transition-all duration-${duration} ${
        isScrolled ? "md:bg-transparent" : "md:bg-transparent"
      }`}
    >
      <NavDesktop navItems={navItems} />
      <NavMobile navItems={navItems} />
    </nav>
  );
}