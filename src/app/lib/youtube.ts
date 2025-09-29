// src/lib/youtube.ts
export type YTVideo = {
  id: {
    kind: string;
    videoId?: string;
  };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      medium?: { url: string };
      high?: { url: string };
    };
  };
};

const API_KEY = process.env.YT_API_KEY;
const CHANNEL_ID = "UCJz63WADBQBcPJ4A6N5BzfQ"; // PostPrime channelId

export async function getYoutubeVideos(maxResults: number = 1): Promise<YTVideo[]> {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h

  if (!res.ok) {
    console.error("YouTube API error:", res.statusText);
    return [];
  }

  const data = await res.json();

  // zwracamy tylko filmy (bez playlist i innych)
  return (data.items as YTVideo[]).filter(
    (item) => item.id.kind === "youtube#video" && item.id.videoId
  );
}