"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="#videos" className="hover:text-gorange transition-colors">
              Videos
            </Link>
          </li>
          <li>
            <Link href="#posts" className="hover:text-gorange transition-colors">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gorange transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#newsletter" className="hover:text-gorange transition-colors">
              Newsletter
            </Link>
          </li>
        </ul>
      </nav>
  );
}