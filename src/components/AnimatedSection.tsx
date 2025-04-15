
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className,
  id 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={cn(
        'relative mb-12 transition-all duration-500',
        className,
        isInView && 'animate-fade-in',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          'absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500',
          isInView ? 'opacity-100' : 'opacity-0',
          isHovered ? 'opacity-100' : 'opacity-60'
        )}
        style={{
          background: isHovered ? 'linear-gradient(90deg, #000000, #222222, #333333, #000000)' : 'linear-gradient(90deg, #9b87f5, #6E59A5, #D6BCFA, #9b87f5)',
          backgroundSize: '300% 300%',
          zIndex: -1,
          padding: isHovered ? '3px' : '2px',
          borderRadius: '1rem',
          maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
        {...(isInView && { className: 'animate-rotating-border' })}
      ></div>
      
      <div 
        className={cn(
          'p-6 bg-white/90 backdrop-blur-sm rounded-xl transition-all duration-300 h-full',
          isHovered && 'animate-scale-up'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedSection;
