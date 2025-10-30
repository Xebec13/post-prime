export default function YoutubeLight() {
  return (
    <div className="absolute inset-0 flex justify-between items-end w-full overflow-hidden">
      {/* === LEFT LIGHT (from bottom-left toward center) === */}
      <div className="pointer-events-none w-[60%] h-[40%] bg-gradient-to-t from-orange-200/10 via-orange-100/10 to-transparent" />

      {/* === RIGHT LIGHT (from bottom-right toward center) === */}
      <div className="pointer-events-none w-[60%] h-[40%] bg-gradient-to-t from-orange-200/10 via-orange-100/10 to-transparent" />
    </div>
  );
}