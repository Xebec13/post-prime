import { getYoutubeVideos } from "../lib/youtube";

type YTVideo = {
    id: { videoId: string };
    snippet: {
        title: string;
    };
};

export default async function YtApiSection() {
    const raw = await getYoutubeVideos(3);
    const videos = raw as YTVideo[];

    return (
        <section id="videos" className="flex justify-center items-center h-screen">


            <h2 className="text-4xl font-extrabold text-gorange">Latest Video</h2>



            {videos.map((video) => (
                <div
                    key={video.id.videoId}
                    className="rounded-lg"
                >
                    <div
                        key={video.id.videoId}
                        className="size-75">
                        <iframe
                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                            title={video.snippet.title}
                            className="w-full h-full object-cover"
                            allowFullScreen
                        />
                    </div>
                    <h3 className="text-sm font-semibold text-black">
                        {video.snippet.title}
                    </h3>
                </div>
            ))}


        </section>
    );
}