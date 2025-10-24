import Link from "next/link";
import Image from "next/image";

interface NavDesktopProps {
  navItems: {
    type: string;
    href: string;
    label?: string;
    alt: string;
  }[];
}

export default function NavDesktop({ navItems }: NavDesktopProps) {
  return (
    <ul className="hidden w-full items-center gap-6 text-sm font-bold uppercase md:flex">
      {navItems.map((item, i) =>
        item.type === "logo" ? (
          <li
            key={i}
            className="mr-auto cursor-pointer bg-neutral-200/90 backdrop-blur-sm rounded-full"
          >
            <Link href={item.href} aria-label={item.alt}>
              <Image
                src="/postprime-logo-1.png"
                alt="Post Prime logo"
                width={40}
                height={40}
                priority
                className="object-contain pt-0.5"
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
  );
}