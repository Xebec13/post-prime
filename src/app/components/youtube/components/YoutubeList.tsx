"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getYoutubeVideos, YoutubeVideo } from "../../../lib/youtubeApi";

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
    <div className="flex flex-col gap-1 h-full w-full max-h-125">
      {videos.slice(0, visibleCount).map((video) => (
        <div
          key={video.videoId}
          onClick={() => onSelect(video.videoId)}
          className=" grid grid-cols-2 lg:place-items-stretch gap-0.5 rounded-md cursor-pointer transition-all duration-300 hover:scale-101 hover:bg-orange-500/40"
        >
          <div className="aspect-[2/1] sm:shrink-0 rounded-lg p-2 flex items-center">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={160}
              height={90}
              className="w-full object-cover rounded-lg shadow-xs shadow-orange-200/40"
            />
          </div>
          <div className="text-left p-1">
            <p className="text-xs sm:text-sm text-gray-200 font-bold">
              {video.title}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
}