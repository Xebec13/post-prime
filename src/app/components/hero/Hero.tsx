import { getYoutubeVideos } from "../lib/youtubeApi";
import HeroLogoTitle from "./HeroLogoTitle";
import YtLastEp from "./YtLastEp";

export default async function Hero() {
  const PLAYLIST_ID = "UUJz63WADBQBcPJ4A6N5BzfQ";
  let latestVideoId = null;

  try {
    const videos = await getYoutubeVideos(PLAYLIST_ID);
    if (videos.length > 0) {
      latestVideoId = videos[0].videoId;
    }
  } catch (error) {
    console.error("Error fetching hero video:", error);
  }

  return (
    <section className="min-h-screen p-10 bg-neutral-900 flex flex-col justify-center gap-10">

      {/* Logo na górze */}
      <HeroLogoTitle title="post prime" />

      {/* <YtLastEp videoId={latestVideoId} /> */}


    </section>
  );
}