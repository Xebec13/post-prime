import { FaArrowRight } from "react-icons/fa";

export default function AboutContent({
  description,
  buttonText,
}: {
  description: string;
  buttonText: string;
}) {
  return (
    <>
      {/* === Description Text === */}
      <p className="text-sm sm:text-xl text-gray-300 leading-relaxed">
        {description}
      </p>

      {/* === CTA Button (Learn More) === */}
      <button className="text-sm sm:text-xl py-2 border-b-2 border-b-orange-500 inline-flex items-center gap-2 cursor-pointer uppercase group">
        {buttonText}
        <FaArrowRight className="text-sm transition-transform duration-500 group-hover:translate-x-1" />
      </button>
    </>
  );
}