import { useEffect, useState } from 'react';

export default function useIsNight() {
  const getIsNight = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  };

  const [isNight, setIsNight] = useState(getIsNight);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsNight(getIsNight());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  return isNight;
      }
