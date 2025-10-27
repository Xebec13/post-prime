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
            <div className="text-orange-200 max-w-xs pl-1 sm:pl-2.5 text-left z-20 ">
                <h2 className="text-2xl text-shadow-md text-shadow-orange-400 sm:text-5xl font-bold uppercase mb-2">
                    {subtitle}
                </h2>
                {description.map((line, index) => (
                    <p key={index} className="text-lg md:text-xl  leading-none">
                        {line}
                    </p>
                ))}
            </div>

            {/* Right column */}
            <p className="text-orange-200 text-shadow-md text-shadow-orange-400 self-start pr-1 sm:pr-3.5 text-right text-xs md:text-sm font-bold leading-none">
                {year}
            </p>
        </>
    );
}