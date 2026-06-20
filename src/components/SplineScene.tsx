import { useState } from 'react';
import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-4 border-[#B600A8] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Spline 
        scene={scene} 
        className={className} 
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

