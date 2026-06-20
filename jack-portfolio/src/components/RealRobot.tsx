import React from 'react';

interface RealRobotProps {
  speedFactor?: number;
  mouseX?: number;
  mouseY?: number;
  robotX?: number;
  robotY?: number;
  pose?: 'walk' | 'idle' | 'wave' | 'point';
  size?: number;
  className?: string;
}

export const RealRobot: React.FC<RealRobotProps> = ({
  speedFactor = 1,
  mouseX = 0,
  mouseY = 0,
  robotX = 0,
  robotY = 0,
  pose = 'idle',
  size = 100
}) => {
  // Calculate dynamic values based on props
  const scale = size / 100;
  const animationSpeed = speedFactor * 0.5;
  const time = Date.now() * 0.001 * animationSpeed;
  
  // Pose-based animations
  let leftArmAngle = 0;
  let rightArmAngle = 0;
  let leftLegAngle = 0;
  let rightLegAngle = 0;
  let antennaAngle = 0;
  
  switch (pose) {
    case 'idle':
      leftArmAngle = Math.sin(time) * 5;
      rightArmAngle = Math.sin(time + Math.PI) * 5;
      leftLegAngle = Math.sin(time + Math.PI/2) * 3;
      rightLegAngle = Math.sin(time - Math.PI/2) * 3;
      antennaAngle = Math.sin(time * 0.3) * 2;
      break;
      
    case 'walk':
      leftArmAngle = Math.sin(time) * 15 - 10;
      rightArmAngle = Math.sin(time + Math.PI) * 15 - 10;
      leftLegAngle = Math.sin(time) * 20;
      rightLegAngle = Math.sin(time + Math.PI) * 20;
      antennaAngle = Math.sin(time * 0.5) * 3;
      break;
      
    case 'wave':
      leftArmAngle = Math.sin(time * 2) * 20 + 30;
      rightArmAngle = -10;
      leftLegAngle = Math.sin(time + Math.PI/2) * 3;
      rightLegAngle = Math.sin(time - Math.PI/2) * 3;
      antennaAngle = Math.sin(time * 0.3) * 2;
      break;
      
    case 'point':
      leftArmAngle = 20;
      rightArmAngle = -40;
      leftLegAngle = Math.sin(time + Math.PI/2) * 3;
      rightLegAngle = Math.sin(time - Math.PI/2) * 3;
      antennaAngle = Math.sin(time * 0.3) * 2;
      break;
  }
  
  // Mouse tracking for head/eye movement
  const headTilt = ((mouseY - robotY) || 0) * 0.01;
  const eyeLookX = ((mouseX - robotX) || 0) * 0.03;
  const eyeLookY = ((mouseY - robotY) || 0) * 0.03;
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 300"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Metallic gradients for robot body */}
          <linearGradient id="robotBodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1C1D22" />
            <stop offset="50%" stopColor="#111216" />
            <stop offset="100%" stopColor="#070709" />
          </linearGradient>
          
          <linearGradient id="robotMetalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#767C8A" />
            <stop offset="50%" stopColor="#41444D" />
            <stop offset="100%" stopColor="#25272D" />
          </linearGradient>
          
          <linearGradient id="robotDarkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0B0B0C" />
            <stop offset="100%" stopColor="#1D0026" />
          </linearGradient>
          
          <radialGradient id="eyeGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#FF00E6" />
            <stop offset="100%" stopColor="#7621B0" />
          </radialGradient>
          
          <filter id="shadowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" flood-color="rgba(0,0,0,0.5)" />
          </filter>
        </defs>
        
        {/* Robot Body */}
        <g filter="url(#shadowFilter)" transform={`scale(${scale})`}>
          {/* Main Body/Torso */}
          <rect 
            x="80" 
            y="100" 
            width="40" 
            height="80" 
            rx="8" 
            ry="8"
            fill="url(#robotBodyGradient)"
            stroke="#111"
            strokeWidth="2"
          />
          
          {/* Chest Details */}
          <rect 
            x="85" 
            y="110" 
            width="30" 
            height="20" 
            rx="4" 
            ry="4"
            fill="url(#robotDarkMetal)"
          />
          
          <circle 
            cx="100" 
            cy="130" 
            r="4" 
            fill="#FF00E6"
          />
          
          {/* Head */}
          <circle 
            cx="100" 
            cy="80" 
            r="25" 
            fill="url(#robotMetalGradient)"
            stroke="#1A1B20"
            strokeWidth="2"
            transform={`rotate(${headTilt})`}
          />
          
          {/* Antennas */}
          <g transform={`rotate(${antennaAngle}, 100, 55)`}>
            <line 
              x1="100" 
              y1="55" 
              x2="90" 
              y2="35" 
              stroke="#25272D" 
              strokeWidth="2"
            />
            <line 
              x1="100" 
              y1="55" 
              x2="110" 
              y2="35" 
              stroke="#25272D" 
              strokeWidth="2"
            />
            <circle 
              cx="90" 
              cy="35" 
              r="3" 
              fill="#FF00E6"
            />
            <circle 
              cx="110" 
              cy="35" 
              r="3" 
              fill="#FF00E6"
            />
          </g>
          
          {/* Eyes */}
          <g transform={`translate(${eyeLookX * 2}, ${eyeLookY * 2})`}>
            <ellipse 
              cx="90" 
              cy="75" 
              rx="8" 
              ry="12" 
              fill="url(#eyeGradient)"
            />
            <ellipse 
              cx="110" 
              cy="75" 
              rx="8" 
              ry="12" 
              fill="url(#eyeGradient)"
            />
            
            {/* Eye pupils */}
            <circle 
              cx={90 + eyeLookX} 
              cy={75 + eyeLookY * 0.5} 
              r="4" 
              fill="#2D3748"
            />
            <circle 
              cx={110 + eyeLookX} 
              cy={75 + eyeLookY * 0.5} 
              r="4" 
              fill="#2D3748"
            />
          </g>
          
          {/* Mouth */}
          <path 
            d="M 85 90 Q 100 100 115 90"
            stroke="#1A1B20"
            strokeWidth="2"
            fill="none"
          />
          
          {/* Left Arm */}
          <g transform={`rotate(${leftArmAngle}, 80, 140)`}>
            <rect 
              x="60" 
              y="120" 
              width="20" 
              height="50" 
              rx="4" 
              ry="4"
              fill="url(#robotMetalGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Forearm */}
            <rect 
              x="55" 
              y="170" 
              width="30" 
              height="30" 
              rx="3" 
              ry="3"
              fill="url(#robotBodyGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Hand */}
            <rect 
              x="50" 
              y="200" 
              width="40" 
              height="15" 
              rx="2" 
              ry="2"
              fill="url(#robotDarkMetal)"
            />
          </g>
          
          {/* Right Arm */}
          <g transform={`rotate(${rightArmAngle}, 120, 140)`}>
            <rect 
              x="120" 
              y="120" 
              width="20" 
              height="50" 
              rx="4" 
              ry="4"
              fill="url(#robotMetalGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Forearm */}
            <rect 
              x="115" 
              y="170" 
              width="30" 
              height="30" 
              rx="3" 
              ry="3"
              fill="url(#robotBodyGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Hand */}
            <rect 
              x="110" 
              y="200" 
              width="40" 
              height="15" 
              rx="2" 
              ry="2"
              fill="url(#robotDarkMetal)"
            />
          </g>
          
          {/* Left Leg */}
          <g transform={`rotate(${leftLegAngle}, 90, 220)`}>
            <rect 
              x="75" 
              y="180" 
              width="25" 
              height="60" 
              rx="4" 
              ry="4"
              fill="url(#robotMetalGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Foot */}
            <rect 
              x="70" 
              y="240" 
              width="35" 
              height="20" 
              rx="3" 
              ry="3"
              fill="url(#robotDarkMetal)"
            />
          </g>
          
          {/* Right Leg */}
          <g transform={`rotate(${rightLegAngle}, 110, 220)`}>
            <rect 
              x="100" 
              y="180" 
              width="25" 
              height="60" 
              rx="4" 
              ry="4"
              fill="url(#robotMetalGradient)"
              stroke="#1A1B20"
              strokeWidth="1.5"
            />
            
            {/* Foot */}
            <rect 
              x="95" 
              y="240" 
              width="35" 
              height="20" 
              rx="3" 
              ry="3"
              fill="url(#robotDarkMetal)"
            />
          </g>
          
          {/* Joint Details */}
          {/* Shoulders */}
          <circle cx="80" cy="120" r="6" fill="#25272D" />
          <circle cx="120" cy="120" r="6" fill="#25272D" />
          
          {/* Elbows */}
          <circle cx="70" cy="185" r="4" fill="#B600A8" />
          <circle cx="130" cy="185" r="4" fill="#B600A8" />
          
          {/* Hips/Knees */}
          <circle cx="88" cy="180" r="4" fill="#B600A8" />
          <circle cx="112" cy="180" r="4" fill="#B600A8" />
          
          {/* Ankles */}
          <circle cx="88" cy="240" r="3" fill="#B600A8" />
          <circle cx="112" cy="240" r="3" fill="#B600A8" />
        </g>
      </svg>
    </div>
  );
};