interface HeroLogoTitleProps {
  title: string;
}

export default function HeroLogoTitle({ title }: HeroLogoTitleProps) {
  return (
    <div className="text-justify overflow-hidden pb-5 pt-10">
      <h1 className="title text-[clamp(3rem,30vw,30rem)] text-orange-200 uppercase whitespace-nowrap tracking-tight leading-none">
        {title}
      </h1>
    </div>
  );
}