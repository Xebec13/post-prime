"use client";
import { useState, useEffect } from "react";

interface ScrollOptions {
  offset?: number;   // px to scroll
  duration?: number; // time in ms
}

export function useScrollPosition({ offset = 500, duration = 500 }: ScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return { isScrolled, duration };
}