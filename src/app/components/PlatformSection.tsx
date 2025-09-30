'use client'


import { FaYoutube, FaInstagram, FaFacebook, FaSpotify } from "react-icons/fa";

const platformItems = [
    { icon: FaYoutube, href: "https://youtube.com/@PostPrimePL", color: "text-red-500" },
    { icon: FaInstagram, href: "https://instagram.com/", color: "text-pink-400" },
    { icon: FaFacebook, href: "https://facebook.com/", color: "text-blue-500" },
    { icon: FaSpotify, href: "https://spotify.com/", color: "text-green-600" },
];

export default function PlatformsSection() {
    return (
        <section className="relative w-full h-[40vh]">
            

                {/* Content on top */}
                <div className="relative text-orange-500 p-16">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Subscribe on:</h2>
                    <div className="flex gap-8 justify-center items-center">
                        {platformItems.map(({ icon: Icon, href, color }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-4xl md:text-6xl ${color} transition-all duration-300 ease-in-out hover:text-orange-500 hover:scale-110`}
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>
            
        </section>
    );
}