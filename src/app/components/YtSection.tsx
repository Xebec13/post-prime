"use client";

import { ParallaxBanner } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getYoutubeVideos, YoutubeVideo } from "../lib/youtubeApi";

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
      {/* Background with parallax */}
      <ParallaxBanner
        layers={[
          {
            children: (
              <div
                className="absolute inset-0 h-full w-full bg-contain md:bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,1)0%,rgba(0,0,0,0.6)100%),url('/postprime-logo.png')",
                }}
              />
            ),
            speed: -40,
          },
        ]}
        className="absolute inset-0 h-full w-full bg-black/50"
      >
        {/* 2 columns on desktop, 1 on mobile */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
          {/* Main video player */}
          <div className="h-full w-full aspect-video col-span-2">
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
            <h3 className="sticky inset-0 p-2 font-bold text-orange-500">
              Playlist
            </h3>
            <ul className="mt-2 space-y-2 max-h-110 md:max-h-screen overflow-y-scroll">
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
      </ParallaxBanner>
    </section>
  );
}