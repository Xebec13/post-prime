export default function HeroTitle({ title }: { title: string[] }) {
    return (
        <>
            <h1 className="text-left bg-gradient-to-br from-neutral-400 to-orange-200  bg-clip-text scale-y-260">
                {title[0]}
            </h1>
            <h1 className="text-right bg-gradient-to-bl from-neutral-400 to-orange-200  bg-clip-text scale-y-260">
                {title[1]}
            </h1>
        </>
    );
}