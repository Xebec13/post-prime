import { fbPosts, fbInfo } from "../lib/fbData";
import Image from "next/image";
export default function FbSection() {
  return (
    <section className="h-[200dvh] grid grid-cols-2 place-items-start p-8 bg-gray-100">
      {/* Sekcja CTA */}
      <div className="text-center justify-self-center bg-white rounded-lg shadow p-4">
        <h3 className="text-xl font-bold text-orange-500">
          Bądź z nami na <span className="text-blue-500">Facebooku</span>!
        </h3>
        <p className="text-gray-700 mb-4">
          Dołącz do naszej społeczności i śledź najnowsze posty oraz
          aktualności.
        </p>
        {/* Cover */}
        <div className="relative w-full h-60">
          <Image
            src={fbInfo.imgWall}
            alt="Cover photo"
            fill
            className="object-cover rounded-lg"
          />
        </div>


        {/* Logo i opis */}
        <div className="flex items-center gap-4 mt-4">
          <Image
            src={fbInfo.logo}
            alt="Page logo"
            width={80}
            height={80}
            className="rounded-full border-gray-200"
          />
          <div>
            <h2 className="text-xl font-bold">{fbInfo.name}</h2>
            <p className="text-sm text-gray-600">
              {fbInfo.followers} obserwujących · {fbInfo.following}{" "}
              obserwowanych
            </p>
          </div>
        </div>
      </div>
      {/* Fb Posts */}
      <div className="justify-self-center flex flex-col gap-6 border-2 border-pink-500 p-4">
        {fbPosts.map(({ id, author, message, createdAt }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md p-4 text-black"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-gray-900">{author}</h2>
              <span className="text-xs text-gray-500">
                {new Date(createdAt).toLocaleDateString("pl-PL", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Message */}
            <p className="text-sm text-gray-800 leading-relaxed">{message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
