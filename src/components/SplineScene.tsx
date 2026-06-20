import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      // Prevent infinite loop from programmatically dispatched events
      if (!e.isTrusted) return;
      if (!containerRef.current) return;
      const canvas = containerRef.current.querySelector('canvas');
      if (!canvas) return;

      // Dispatch cloned mousemove event to the canvas
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        bubbles: false,
        cancelable: true
      });
      canvas.dispatchEvent(mouseEvent);

      // Dispatch cloned pointermove event to the canvas
      const pointerEvent = new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        bubbles: false,
        cancelable: true
      });
      canvas.dispatchEvent(pointerEvent);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('pointermove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('pointermove', handleGlobalMouseMove);
    };
  }, [isLoading]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-4 border-[#B600A8] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className={`w-full h-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Spline 
          scene={scene} 
          className={className} 
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
}

