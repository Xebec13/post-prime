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


export interface YoutubeVideoDetails {
  title: string;
  thumbnail: string;
  viewCount: string;
  publishedAt: string;
}

// Zaktualizuj funkcję getVideoDetails
// Dodajemy 'maxres' do łańcucha wyboru miniatury

export async function getVideoDetails(videoId: string): Promise<YoutubeVideoDetails | null> {
  const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY;

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Failed to fetch video details");

    const data = await res.json();
    if (!data.items || data.items.length === 0) return null;

    const item = data.items[0];
    
    // LOGIKA PRIORYTETÓW ZDJĘCIA: MaxRes -> High -> Medium
    const thumbnails = item.snippet.thumbnails;
    const bestThumbnail = thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.medium?.url;

    return {
      title: item.snippet.title,
      thumbnail: bestThumbnail, // Teraz mamy gwarancję najlepszej jakości
      viewCount: item.statistics.viewCount,
      publishedAt: item.snippet.publishedAt,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}