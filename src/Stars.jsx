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
        drift: Math.random() * 20 - 10,
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

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Static + drifting stars */}
      {stars.map((star) => (
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
            transform: `translateX(${star.drift}px)`,
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
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