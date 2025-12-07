import { getVideoDetails } from "../lib/youtubeApi";
import VideoFacade from "./VideoFacade"; // Importujemy nowy komponent

interface YtLastEpProps {
  videoId: string | null;
}

export default async function YtLastEp({ videoId }: YtLastEpProps) {
  if (!videoId) return null;

  const details = await getVideoDetails(videoId);

  if (!details) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
      
      {/* === LEWA KOLUMNA: INFO === */}
      <div className="flex flex-col gap-4 text-orange-50">
        <h2 className="text-2xl lg:text-7xl font-bold capitalize leading-none tracking-wide">
          {details.title}
        </h2>
        
        <div className="flex items-center gap-2 text-red-500 font-mono text-sm">
          <span>{Number(details.viewCount).toLocaleString()} wyświetleń</span>
        </div>
        
        <p className="text-xs text-neutral-400">
          Opublikowano: {new Date(details.publishedAt).toLocaleDateString("pl-PL")}
        </p>
      </div>

      {/* === PRAWA KOLUMNA: FACADE PLAYER === */}
      <div className="lg:col-span-2 w-full aspect-video">
        <VideoFacade 
            videoId={videoId} 
            thumbnailUrl={details.thumbnail} 
            title={details.title} 
        />
      </div>

    </div>
  );
}