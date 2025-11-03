"use client";

import { useState } from "react";
import Light from "../../styles/Light"
import { YoutubePlayer, YoutubeList, } from "./components";

const PLAYLIST_ID = "UUJz63WADBQBcPJ4A6N5BzfQ";

export default function Youtube() {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  return (
    <section id="videos" className="relative min-h-screen bg-neutral-900 p-6 md:p-10">
      <Light variant="top" />
      <Light variant="bottom" />
      <h2 className="font-extrabold tracking-[10px] italic text-orange-200/60 text-4xl text-right mb-5 uppercase">
        Nie przegap!
      </h2>

      <div className="relative bg-black/10 flex flex-col place-items-stretch lg:grid lg:grid-cols-3 p-3 gap-3 rounded-md overflow-hidden">
        <div className="lg:col-span-2">
          <YoutubePlayer videoId={currentVideo} />
        </div>
        <div className="overflow-y-scroll p-1">
          <YoutubeList
            playlistId={PLAYLIST_ID}
            visibleCount={9}
            onSelect={setCurrentVideo}
          />
        </div>
          
      </div>
      <p className="text-sm sm:text-md text-right text-orange-200 mt-2 uppercase font-bold cursor-pointer" >Wiecej...</p>
      
    </section>
  );
}