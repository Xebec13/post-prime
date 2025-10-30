"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getYoutubeVideos, YoutubeVideo } from "../../../lib/youtubeApi";
import { FaPlay } from "react-icons/fa";
interface YoutubeListProps {
  playlistId: string;
  visibleCount?: number;
  onSelect: (videoId: string) => void;
}

export default function YoutubeList({
  playlistId,
  visibleCount = 9,
  onSelect,
}: YoutubeListProps) {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getYoutubeVideos(playlistId);
        setVideos(data);
        if (data.length > 0) {
          onSelect(data[0].videoId); // ustaw pierwszy film jako aktualny
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [playlistId, onSelect]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col gap-2">
      {videos.slice(0, visibleCount).map((video) => (
        <div
          key={video.videoId}
          onClick={() => onSelect(video.videoId)}
          className="flex lg:grid lg:grid-cols-2 p-1 gap-1 cursor-pointer transition-all duration-300 hover:scale-101 hover:bg-orange-400/30"
        >
          <div className="aspect-[2/1] shrink-0 shadow-sm shadow-orange-200/40 rounded-lg">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={160}
              height={90}
              className="w-full h-full object-cover rounded-lg"
            />
            
          </div>
          <div className="text-left p-1">
            <p className="text-sm lg:text-md text-white font-bold">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
}