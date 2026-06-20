import React, { useEffect, useState, useRef } from 'react';

interface RobotFigureProps {
  speedFactor?: number;
  mouseX?: any; // MotionValue or number
  mouseY?: any;
  robotX?: any;
  robotY?: any;
}

export const RobotFigure: React.FC<RobotFigureProps> = ({
  mouseX = 0,
  mouseY = 0,
  robotX = 0,
  robotY = 0,
}) => {
  // Target coordinates relative to the shoulder joint of the robot arm
  // The shoulder is centered horizontally at 160, and vertically at ~250 in SVG space
  const [target, setTarget] = useState({ x: 100, y: -80 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = () => {
      // Safely extract values from MotionValues or raw numbers
      const mx = mouseX && typeof mouseX.get === 'function' ? mouseX.get() : (mouseX || 0);
      const my = mouseY && typeof mouseY.get === 'function' ? mouseY.get() : (mouseY || 0);
      const rx = robotX && typeof robotX.get === 'function' ? robotX.get() : (robotX || 0);
      const ry = robotY && typeof robotY.get === 'function' ? robotY.get() : (robotY || 0);

      // Calculate cursor position relative to the robot base center
      const dx = mx - rx;
      const dy = my - ry;

      // Map relative coordinates to SVG space
      // Scale coordinates based on typical hero width/height
      const scale = 0.8;
      const targetX = dx * scale;
      const targetY = dy * scale - 50; // offset vertically to reach above base

      setTarget({ x: targetX, y: targetY });
      requestRef.current = requestAnimationFrame(updateTarget);
    };

    requestRef.current = requestAnimationFrame(updateTarget);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mouseX, mouseY, robotX, robotY]);

  // Define mechanical link lengths
  const L1 = 95; // Upper arm length
  const L2 = 90; // Forearm length

  // Shoulder joint is at (160, 240) in SVG space (320x420 viewBox)
  const shoulderX = 160;
  const shoulderY = 240;

  // Compute Inverse Kinematics for 2-link robotic arm
  const tx = target.x;
  const ty = target.y;

  // Distance from shoulder to target
  const distSq = tx * tx + ty * ty;
  const dist = Math.sqrt(distSq);

  // Clamp target distance within reach limits of L1 + L2
  const maxReach = L1 + L2 - 4;
  const minReach = 35;
  const clampedDist = Math.max(minReach, Math.min(maxReach, dist));

  // Scale target if it was clamped
  const scaleFactor = clampedDist / (dist || 1);
  const cx = tx * scaleFactor;
  const cy = ty * scaleFactor;

  // Law of Cosines for elbow angle (theta2)
  // cos(theta2) = (clampedDist^2 - L1^2 - L2^2) / (2 * L1 * L2)
  const cosTheta2 = (clampedDist * clampedDist - L1 * L1 - L2 * L2) / (2 * L1 * L2);
  const theta2 = Math.acos(Math.max(-1, Math.min(1, cosTheta2))); // Elbow bend angle

  // Angle from shoulder to target
  const alpha = Math.atan2(cy, cx);

  // Angle inside triangle at shoulder (beta)
  // cos(beta) = (L1^2 + clampedDist^2 - L2^2) / (2 * L1 * clampedDist)
  const cosBeta = (L1 * L1 + clampedDist * clampedDist - L2 * L2) / (2 * L1 * clampedDist);
  const beta = Math.acos(Math.max(-1, Math.min(1, cosBeta)));

  // Calculate Shoulder Angle (theta1) - pick the configuration that bends elbow naturally
  const theta1 = alpha - beta;

  // Joint positions in SVG space
  const elbowX = shoulderX + L1 * Math.cos(theta1);
  const elbowY = shoulderY + L1 * Math.sin(theta1);

  const wristX = elbowX + L2 * Math.cos(theta1 + theta2);
  const wristY = elbowY + L2 * Math.sin(theta1 + theta2);

  // Claw angle follows forearm direction
  const clawAngle = (theta1 + theta2) * (180 / Math.PI);

  // Dynamic claw opening based on speed/idle state
  const clawOpen = 6 + Math.sin(Date.now() * 0.006) * 4;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 320 420"
        className="w-full h-full drop-shadow-[0_10px_40px_rgba(0,0,0,0.85)]"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Metallic gradients with specular reflections mimicking the reference images */}
          <linearGradient id="chromeBase" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0B0B0C" />
            <stop offset="15%" stopColor="#2D2E33" />
            <stop offset="30%" stopColor="#1B1C1E" />
            <stop offset="50%" stopColor="#8A8F9B" />
            <stop offset="65%" stopColor="#141416" />
            <stop offset="85%" stopColor="#3E414A" />
            <stop offset="100%" stopColor="#0A0A0B" />
          </linearGradient>

          <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#30323A" />
            <stop offset="40%" stopColor="#1C1D22" />
            <stop offset="70%" stopColor="#111216" />
            <stop offset="100%" stopColor="#070709" />
          </linearGradient>

          <linearGradient id="metalLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#767C8A" />
            <stop offset="50%" stopColor="#41444D" />
            <stop offset="100%" stopColor="#25272D" />
          </linearGradient>

          <linearGradient id="glowPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B600A8" />
            <stop offset="100%" stopColor="#7621B0" />
          </linearGradient>

          {/* Highlights for 3D bevels */}
          <linearGradient id="highlightBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* ─── BASE (Stationary Conical Stand) ─── */}
        <g filter="url(#softShadow)">
          {/* Base bottom rim */}
          <ellipse cx="160" cy="385" rx="72" ry="22" fill="#050506" />
          
          {/* Flared conical base stand */}
          <path
            d="M 110,335 C 110,345 88,380 88,382 C 88,387 115,395 160,395 C 205,395 232,387 232,382 C 232,380 210,345 210,335 Z"
            fill="url(#chromeBase)"
            stroke="#111"
            strokeWidth="1"
          />

          {/* Shiny metallic horizontal base rings */}
          <path d="M 110,335 C 110,340 120,345 160,345 C 200,345 210,340 210,335 C 210,330 200,326 160,326 C 120,326 110,330 110,335 Z" fill="url(#metalLight)" stroke="#000" strokeWidth="1" />
          <ellipse cx="160" cy="333" rx="46" ry="8" fill="#1C1D22" />
          <ellipse cx="160" cy="331" rx="42" ry="6" fill="#B600A8" opacity="0.6" />
        </g>

        {/* ─── LINK 1: ROTATIONAL LOWER COLUMN (Pivots slightly to follow X) ─── */}
        <g filter="url(#softShadow)">
          {/* Lower Column Body */}
          <path
            d="M 135,240 L 185,240 L 195,325 C 195,329 125,329 125,325 Z"
            fill="url(#metalDark)"
            stroke="#1A1B20"
            strokeWidth="1.5"
          />

          {/* Machined side plates on column */}
          <path d="M 137,248 L 147,316 A 4 4 0 0 0 151,320 L 153,320 A 4 4 0 0 0 157,316 L 147,248 Z" fill="url(#metalLight)" opacity="0.8" />
          <path d="M 183,248 L 173,316 A 4 4 0 0 0 169,320 L 167,320 A 4 4 0 0 0 163,316 L 173,248 Z" fill="url(#metalLight)" opacity="0.8" />

          {/* Large circular rotation joint caps at base/mid */}
          <circle cx="160" cy="305" r="16" fill="url(#chromeBase)" stroke="#111" />
          <circle cx="160" cy="305" r="9" fill="#111" />
          <circle cx="160" cy="305" r="4" fill="#B600A8" />
        </g>

        {/* ─── LINK 2: UPPER ARM (Shoulder -> Elbow) ─── */}
        <g filter="url(#softShadow)">
          {/* Main Upper Arm Structural Member */}
          <path
            d={`M ${shoulderX - 10},${shoulderY} 
                L ${elbowX - 8},${elbowY} 
                L ${elbowX + 8},${elbowY} 
                L ${shoulderX + 10},${shoulderY} Z`}
            fill="url(#chromeBase)"
            stroke="#000"
            strokeWidth="1.5"
          />

          {/* Internal cut-out / pocket highlight of the arm structural link */}
          <path
            d={`M ${shoulderX - 5},${shoulderY + 4} 
                L ${elbowX - 4},${elbowY + 4} 
                L ${elbowX + 4},${elbowY - 4} 
                L ${shoulderX + 5},${shoulderY - 4} Z`}
            fill="url(#metalDark)"
            opacity="0.9"
          />

          {/* Cybernetic Accent Line */}
          <line
            x1={shoulderX}
            y1={shoulderY}
            x2={elbowX}
            y2={elbowY}
            stroke="url(#glowPurple)"
            strokeWidth="2.5"
            strokeDasharray="4 8"
          />

          {/* Large circular shoulder joint cap */}
          <circle cx={shoulderX} cy={shoulderY} r="18" fill="url(#chromeBase)" stroke="#111" />
          <circle cx={shoulderX} cy={shoulderY} r="10" fill="url(#highlightBevel)" />
          <circle cx={shoulderX} cy={shoulderY} r="6" fill="#16171C" />
        </g>

        {/* ─── LINK 3: FOREARM (Elbow -> Wrist) ─── */}
        <g filter="url(#softShadow)">
          {/* Forearm Member */}
          <path
            d={`M ${elbowX - 8},${elbowY} 
                L ${wristX - 6},${wristY} 
                L ${wristX + 6},${wristY} 
                L ${elbowX + 8},${elbowY} Z`}
            fill="url(#chromeBase)"
            stroke="#000"
            strokeWidth="1.5"
          />

          {/* Forearm Parallel metal structural rods */}
          <line x1={elbowX - 4} y1={elbowY} x2={wristX - 3} y2={wristY} stroke="url(#metalLight)" strokeWidth="3" />
          <line x1={elbowX + 4} y1={elbowY} x2={wristX + 3} y2={wristY} stroke="url(#metalLight)" strokeWidth="3" />

          {/* Circular elbow joint cap */}
          <circle cx={elbowX} cy={elbowY} r="14" fill="url(#chromeBase)" stroke="#111" />
          <circle cx={elbowX} cy={elbowY} r="7" fill="#1A1B20" />
          <circle cx={elbowX} cy={elbowY} r="3" fill="#B600A8" />
        </g>

        {/* ─── LINK 4: WRIST & CLAW GRIPPER ─── */}
        <g transform={`translate(${wristX}, ${wristY}) rotate(${clawAngle - 90})`} filter="url(#softShadow)">
          {/* Wrist joint base */}
          <ellipse cx="0" cy="0" rx="8" ry="6" fill="url(#metalDark)" stroke="#000" />
          <rect x="-4" y="0" width="8" height="12" fill="url(#chromeBase)" />

          {/* Wrist pivot pin */}
          <circle cx="0" cy="6" r="4" fill="url(#chromeBase)" stroke="#111" />

          {/* Left Claw Prong */}
          <path
            d="M -4,10 C -12,14 -18,22 -14,32 C -12,36 -4,38 -6,32 C -8,26 -6,20 0,16 Z"
            fill="url(#chromeBase)"
            stroke="#111"
            strokeWidth="1.2"
            transform={`rotate(${-clawOpen}, -4, 10)`}
          />

          {/* Right Claw Prong */}
          <path
            d="M -4,10 C -12,14 -18,22 -14,32 C -12,36 -4,38 -6,32 C -8,26 -6,20 0,16 Z"
            fill="url(#chromeBase)"
            stroke="#111"
            strokeWidth="1.2"
            transform={`scale(-1, 1) rotate(${-clawOpen}, -4, 10)`}
          />

          {/* Glowing laser sight / pointer from claw center */}
          <line x1="0" y1="14" x2="0" y2="120" stroke="#B600A8" strokeWidth="1.5" strokeDasharray="2 6" opacity="0.75" />
          <circle cx="0" cy="14" r="2.5" fill="#FF00E6" />
        </g>
      </svg>
    </div>
  );
};
