import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  target, 
  label, 
  suffix = '', 
  prefix = '', 
  duration = 2000 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function pour une animation fluide
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-xl md:text-2xl font-bold text-[#1a6b3c] tracking-tight">
        {prefix}{count}{suffix}
      </p>
      <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 font-medium">{label}</p>
    </div>
  );
}
