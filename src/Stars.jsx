 import { useState, useEffect } from 'react';

const STAR_COUNT = 80;
const SHOOTING_STAR_COUNT = 3;

export default function Stars({ enabled }) {
  const [starData, setStarData] = useState({ stars: [], shootingStars: [] });

  // 1. Generate stars only on the client (Fixes Hydration Error)
  useEffect(() => {
    const generateStars = () => {
      const stars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1, // Slightly larger for better visibility
        opacity: Math.random() * 0.5 + 0.3,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 3, // Faster twinkle
      }));

      const shootingStars = Array.from({ length: SHOOTING_STAR_COUNT }).map((_, i) => ({
        id: i,
        delay: Math.random() * 10 + 5,
        top: Math.random() * 40, // Only appear in top 40% of screen
        left: Math.random() * 50, // Start slightly left to drift right
      }));

      setStarData({ stars, shootingStars });
    };

    generateStars();
  }, []); // Empty dependency array = runs once on mount

  if (!enabled) return null;

  return (
    // 2. fixed inset-0 z-0: Locks it to the screen background
    // pointer-events-none: Allows clicking items 'behind' the stars if z-index is messed up
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Normal Stars */}
      {starData.stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: `0 0 ${star.size + 2}px rgba(255, 255, 255, 0.4)`, // Adds a glow
          }}
        />
      ))}

      {/* Shooting Stars */}
      {starData.shootingStars.map((star) => (
        <span
          key={star.id}
          className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-white to-transparent animate-shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
