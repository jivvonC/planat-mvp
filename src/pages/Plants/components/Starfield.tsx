import starImg from "@/assets/images/illustrations/star.png";
import { cn } from "@/lib/utils";

/** Irregular positions around the planet + plant orbit (angle °, radius px from center) */
const STARS = [
  { angleDeg: 18, radius: 172, size: 25, opacity: 0.7 },
  { angleDeg: 63, radius: 186, size: 30, opacity: 0.55 },
  { angleDeg: 108, radius: 158, size: 24, opacity: 0.85 },
  { angleDeg: 152, radius: 178, size: 28, opacity: 1.0 },
  { angleDeg: 198, radius: 165, size: 26, opacity: 0.65 },
  { angleDeg: 242, radius: 190, size: 24, opacity: 0.9 },
  { angleDeg: 288, radius: 168, size: 29, opacity: 0.6 },
  { angleDeg: 332, radius: 155, size: 27, opacity: 0.75 },
  { angleDeg: 42, radius: 148, size: 30, opacity: 0.55 },
  { angleDeg: 272, radius: 152, size: 24, opacity: 0.95 },
] as const;

function getStarPosition(angleDeg: number, radius: number, size: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = Math.cos(angleRad) * radius;
  const y = Math.sin(angleRad) * radius;

  return {
    left: `calc(50% + ${x}px - ${size / 2}px)`,
    top: `calc(50% + ${y}px - ${size / 2}px)`,
  };
}

export function Starfield({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      {STARS.map((star, index) => {
        const position = getStarPosition(star.angleDeg, star.radius, star.size);

        return (
          <img
            key={index}
            src={starImg}
            alt=""
            className="absolute object-contain"
            style={{
              ...position,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            }}
          />
        );
      })}
    </div>
  );
}
