"use client";

interface YoutubePlayerProps {
  videoId: string | null;
}

export default function YoutubePlayer({ videoId }: YoutubePlayerProps) {
  if (!videoId) return null;

  return (
    <div className="aspect-video h-full w-full rounded-lg shadow-lg shadow-orange-200/40">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube player"
        className="w-full h-full rounded-lg"
      />
    </div>
  );
}