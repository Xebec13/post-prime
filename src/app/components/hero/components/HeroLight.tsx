export default function Test() {
    return (
        <div className="absolute inset-0 flex justify-between items-start w-full overflow-hidden">
            {/* === LEFT LIGHT (from top-left toward center) === */}
            <div className="pointer-events-none w-[60%] h-[40%] bg-gradient-to-b from-orange-200/20 via-orange-100/10 to-transparent" />

            {/* === RIGHT LIGHT (from top-right toward center) === */}
            <div className="pointer-events-none w-[60%] h-[40%] bg-gradient-to-b from-orange-200/20 via-orange-100/10 to-transparent" />
        </div>
    );
}