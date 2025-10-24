export default function HeroContent({
    subtitle,
    description,
    year,
}: {
    subtitle: string;
    description: string[];
    year: string;
}) {
    return (
        <>
            {/* Left column */}
            <div className="max-w-xs pl-1 sm:pl-2.5 text-left z-20 ">
                <h2 className="text-2xl sm:text-5xl font-extrabold uppercase mb-2">
                    {subtitle}
                </h2>
                {description.map((line, index) => (
                    <p key={index} className="text-lg md:text-xl  leading-none">
                        {line}
                    </p>
                ))}
            </div>

            {/* Right column */}
            <p className="self-start pr-1 md:pr-2.5 text-right text-xs md:text-sm font-bold leading-none">
                {year}
            </p>
        </>
    );
}