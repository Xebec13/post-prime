"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

interface NavMobileProps {
    navItems: {
        type: string;
        href: string;
        label?: string;
        alt: string;
    }[];
}

export default function NavMobile({ navItems }: NavMobileProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* === Mobile menu toggle button === */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className={`z-50 cursor-pointer text-2xl md:hidden p-2 rounded-full backdrop-blur-md transition-colors duration-300 ${isOpen ? "text-white" : "text-neutral-800"
                    }`}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* === Fullscreen mobile overlay === */}
            <ul
                className={`z-40 fixed top-0 right-0 flex h-screen w-full flex-col items-center justify-center gap-8 bg-black/90 text-2xl font-semibold uppercase text-white transition-all duration-500 ease-in-out md:hidden ${isOpen
                        ? "translate-x-0 opacity-100 visible"
                        : "translate-x-full opacity-0 invisible"
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
                                    className="rounded-full bg-white/90 pt-0.5 object-contain transition-colors duration-300 hover:bg-orange-500/90"
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
        </>
    );
}