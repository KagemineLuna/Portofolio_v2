import { useMemo } from 'react';

const STAR_COUNT = 80;
const SHOOTING_STAR_COUNT = 3;

export default function Stars({ enabled }) {
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
        duration: Math.random() * 6 + 6,
      })),
    []
  );

  const shootingStars = useMemo(
    () =>
      Array.from({ length: SHOOTING_STAR_COUNT }).map((_, i) => ({
        id: i,
        delay: Math.random() * 20 + 10,
        top: Math.random() * 40,
      })),
    []
  );

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500
                  ${enabled ? 'opacity-100' : 'opacity-0'}`}
    >
      {stars.map(star => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle animate-drift"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {shootingStars.map(star => (
        <span
          key={star.id}
          className="absolute shooting-star"
          style={{
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}