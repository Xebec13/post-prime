"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa"; 

interface VideoFacadeProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}

export default function VideoFacade({ videoId, thumbnailUrl, title }: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&hl=pl`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="w-full h-full"
      />
    );
  }

  return (
    <div 
      onClick={() => setIsPlaying(true)}
      className="relative w-full h-full cursor-pointer overflow-hidden"
    >
      {/* Miniatura */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Przycisk Play na środku */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-orange-500/80 text-white p-6 rounded-full shadow-lg shadow-black/40 backdrop-blur-sm transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-110">
            <FaPlay className="text-3xl" />
        </div>
      </div>
    </div>
  );
}