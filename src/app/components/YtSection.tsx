"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getYoutubeVideos, YoutubeVideo } from "../lib/youtubeApi";
import ParalaxBg from "../styles/ParalaxBg";

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
    <section
      id="videos"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0)0%, rgba(0,0,0,0.8) 100%)`
      }}
      className="relative min-h-screen scroll-mt-20 p-6 lg:p-12 flex items-center justify-center">
      <ParalaxBg
        imageUrl="/postprime-logo-1.png"
        gradient="linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))"
        background="bg-contain bg-center bg-white"
      />
      {/* 1 Column*/}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        {/* Main video player */}
        <div className="col-span-2 aspect-video w-full max-w-5xl h-full">
          {currentVideo && (
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube player"
              className="w-full h-full rounded-xl shadow-lg"
            />
          )}
        </div>

        {/* Playlist list with scroll */}
        <div className="font-bold">
          <h2 className="text-orange-500 text-xl md:text-2xl mb-3">Playlist</h2>
          <ul className="overflow-y-scroll max-h-120 space-y-2">
            {videos.map((video) => (
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