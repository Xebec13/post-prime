import Image from "next/image";

export default function HeroTitle({ title }: { title: string }) {
  return (
    <div className="col-span-2 flex justify-center items-center w-full">
      <Image
        src="/logo-text.svg"
        alt={title} // Wykorzystujemy tekst jako opis alternatywny dla SEO/Dostępności
        width={800} // Przykładowa szerokość bazowa, CSS i tak przeskaluje
        height={300}
        className="w-full h-auto object-contain"
        priority // Ważne dla Hero sekcji - ładuje obrazek priorytetowo (LCP)
      />
    </div>
  );
}