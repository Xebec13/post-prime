// src/lib/youtube.ts
const API_KEY = process.env.YT_API_KEY!;
const CHANNEL_ID = "UCJz63WADBQBcPJ4A6N5BzfQ"; // PostPrime

export async function getYoutubeVideos(maxResults: number = 3) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`;

  const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1h
  if (!res.ok) throw new Error("Failed to fetch YouTube videos");

  const data = await res.json();
  return data.items; 
}
