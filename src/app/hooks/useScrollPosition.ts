"use client";
import { useState, useEffect } from "react";

interface ScrollOptions {
  offset?: number; // px distance to trigger
}

export function useScrollPosition({ offset = 500 }: ScrollOptions = {}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isScrolled;
}