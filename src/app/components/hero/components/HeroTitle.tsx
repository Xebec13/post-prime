export default function HeroTitle({ title }: { title: string[] }) {
    return (
        <>
            <h1 className="text-orange-200 italic scale-y-240">
                {title[0]}
            </h1>
            <h1 className="text-orange-200 italic scale-y-240">
                {title[1]}
            </h1>
        </>
    );
}