
import { useEffect, useState } from 'react';

interface CountingNumberProps {
  start?: number;
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
  trigger?: boolean;
}

const CountingNumber = ({ 
  start = 0, 
  end, 
  duration = 2000, 
  className = "", 
  suffix = "",
  trigger = true 
}: CountingNumberProps) => {
  const [current, setCurrent] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    const startTime = Date.now();
    const difference = end - start;

    const updateNumber = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentValue = Math.floor(start + difference * easeOutExpo);
      setCurrent(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(updateNumber);
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [start, end, duration, trigger]);

  return (
    <span className={className}>
      {current}{suffix}
    </span>
  );
};

export default CountingNumber;
