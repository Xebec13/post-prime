// lib/youtubeApi.ts

export interface YoutubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
}

interface YoutubePlaylistResponse {
  items: {
    snippet: {
      title: string;
      thumbnails: {
        medium: { url: string };
      };
      resourceId: {
        videoId: string;
      };
    };
  }[];
}

export async function getYoutubeVideos(playlistId: string): Promise<YoutubeVideo[]> {
  const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=${playlistId}&key=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch YouTube videos");
  }

  const data: YoutubePlaylistResponse = await res.json();

  return data.items.map((item) => ({
    videoId: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
}