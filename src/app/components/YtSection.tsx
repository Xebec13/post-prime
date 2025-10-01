"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getYoutubeVideos, YoutubeVideo } from "../lib/youtubeApi";
import ParalaxBg from "./ParalaxBg";

const PLAYLIST_ID = "UUJz63WADBQBcPJ4A6N5BzfQ";

export default function YtSection() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const data = await getYoutubeVideos(PLAYLIST_ID);
        setVideos(data);
        if (data.length > 0) {
          setCurrentVideo(data[0].videoId); // set first video as default
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="relative min-h-screen">
      <ParalaxBg
        imageUrl="/postprime-logo.png"
        gradient="linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.6))"
      />
        {/* 2 columns on desktop, 1 on mobile */}
        <div className="relative grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
          {/* Main video player */}
          <div className="col-span-2 aspect-video h-full w-full">
            {currentVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube player"
                className="h-full w-full rounded-xl shadow-lg"
              />
            )}
          </div>

          {/* Playlist list with scroll */}
          <div className="relative">
            <h3 className="sticky inset-0 font-bold text-orange-500 p-2 mb-3">
              Playlist
            </h3>
            <ul className="space-y-2 max-h-75 md:max-h-full overflow-y-scroll ">
              {videos.slice(1).map((video) => (
                <li
                  key={video.videoId}
                  className="flex cursor-pointer items-start gap-2 rounded-xl p-1 text-white transition-colors duration-300 hover:bg-orange-500/90 hover:text-black"
                  onClick={() => setCurrentVideo(video.videoId)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={120}
                    height={90}
                    className="rounded-md"
                  />
                  <p className="text-xs font-medium md:text-sm">{video.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
    </section>
  );
}