interface LightProps {
  variant?: "top" | "bottom" | "divider" | "warmBottom";
}

export default function Light({ variant = "top" }: LightProps) {
  // === Define all visual variants ===
  const variants = {
    top: {
      position: "items-start",
      gradient: "bg-gradient-to-b from-orange-200/10 via-orange-100/10 to-transparent",
      size: "w-[60%] h-[35%]",
    },
    bottom: {
      position: "items-end",
      gradient: "bg-gradient-to-t from-orange-200/10 via-orange-100/10 to-transparent",
      size: "w-[60%] h-[35%]",
    },
    divider: {
      position: "items-center",
      gradient: "bg-orange-200/10",
      size: "w-full h-full",
    },
    warmBottom: {
      position: "items-end",
      gradient: "bg-gradient-to-t from-orange-300/25 via-orange-200/15 to-transparent",
      size: "w-[80%] h-[50%]",
    },
  } as const;

  // Pick the style for the selected variant
  const style = variants[variant] ?? variants.top;

  return (
    <div
      className={`absolute inset-0 flex justify-between ${style.position} w-full overflow-hidden pointer-events-none`}
    >
      {/* === LEFT LIGHT === */}
      <div className={`${style.size} ${style.gradient}`} />
      {/* === RIGHT LIGHT === */}
      <div className={`${style.size} ${style.gradient}`} />
    </div>
  );
}