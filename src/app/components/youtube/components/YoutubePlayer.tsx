interface YoutubePlayerProps {
  videoId: string | null;
}

export default function YoutubePlayer({ videoId }: YoutubePlayerProps) {
  if (!videoId) return null;

  return (
    <div className="aspect-video rounded-lg h-full w-full">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube player"
        className="w-full h-full rounded-lg border-2 border-neutral-950"
      />
    </div>
  );
}