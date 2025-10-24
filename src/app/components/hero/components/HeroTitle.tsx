export default function HeroTitle({ title }: { title: string[] }) {
    return (
        <>
            <h1 className="text-left bg-gradient-to-br from-neutral-900 to-neutral-700/90  bg-clip-text scale-y-260">
                {title[0]}
            </h1>
            <h1 className="text-right bg-gradient-to-br from-neutral-700/90 to-neutral-900  bg-clip-text scale-y-260">
                {title[1]}
            </h1>
        </>
    );
}