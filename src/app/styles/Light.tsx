interface LightProps {
  variant?: "top" | "bottom" | "warmTop" | "warmBottom";
}

export default function Light({ variant = "top" }: LightProps) {
  // Define gradient classes as full static Tailwind strings
  const variants = {
    top: {
      position: "items-start",
      gradient: "bg-gradient-to-b from-orange-200/10 via-orange-100/10 to-transparent",
    },
    bottom: {
      position: "items-end",
      gradient: "bg-gradient-to-t from-orange-200/10 via-orange-100/10 to-transparent",
    },
    warmTop: {
      position: "items-start",
      gradient: "bg-gradient-to-b from-orange-300/25 via-orange-200/15 to-transparent",
    },
    warmBottom: {
      position: "items-end",
      gradient: "bg-gradient-to-t from-orange-300/25 via-orange-200/15 to-transparent",
    },
  } as const;

  const style = variants[variant] ?? variants.top; // default to top if variant is invalid;

  return (
    <div
      className={`absolute inset-0 flex justify-between ${style.position} w-full overflow-hidden pointer-events-none`}
    >
      {/* === LEFT LIGHT === */}
      <div className={`w-[60%] h-[40%] ${style.gradient}`} />
      {/* === RIGHT LIGHT === */}
      <div className={`w-[60%] h-[40%] ${style.gradient}`} />
    </div>
  );
}