"use client";

import { useState } from "react";
import { YoutubePlayer, YoutubeList,YoutubeLight } from "./components";

const PLAYLIST_ID = "UUJz63WADBQBcPJ4A6N5BzfQ";

export default function Youtube() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative bg-neutral-900 min-h-screen p-6">
      
      <h2 className="hero-shadow-title text-orange-200 text-5xl sm:text-7xl text-left mb-10 uppercase font-bold">
        Nie przegap!
      </h2>

      <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-3 gap-5 ">
        <div className="lg:col-span-2 h-full w-full ">
          <YoutubePlayer videoId={currentVideo} />
        </div>
        <div className="overflow-y-scroll max-h-100 lg:max-h-150">
          <YoutubeList
            playlistId={PLAYLIST_ID}
            visibleCount={9}
            onSelect={setCurrentVideo}
          />
        </div>
      </div>
      <p className="text-sm sm:text-md text-right text-orange-200 uppercase font-bold cursor-pointer" >Wiecej...</p>
      <YoutubeLight/>
    </section>
  );
}