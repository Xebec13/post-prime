import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

interface SocialItem {
  href: string;
  icon: React.ReactNode; // <-- tutaj zmiana
  label: string; // optional, for accessibility
}

const socialLinks: SocialItem[] = [
  { href: "https://www.youtube.com", icon: <FaYoutube size={32} />, label: "YouTube" },
  { href: "https://www.instagram.com", icon: <FaInstagram size={32} />, label: "Instagram" },
  { href: "https://www.facebook.com", icon: <FaFacebook size={32} />, label: "Facebook" },
];

export default function FooterIcons() {
  return (
    // Social media icons container
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-orange-200 hover:text-orange-400 transition-transform duration-200 hover:scale-110"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}