import React from 'react';

interface BalloonSettingsIconProps {
  size?: number;
  balloonColor?: string;
  gearColor?: string;
}

const BalloonSettingsIcon: React.FC<BalloonSettingsIconProps> = ({
  size = 64,
  balloonColor = '#ff4d4d7e',
  gearColor = '#ff4d4d7e',
}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    {/* Шарик */}
    <ellipse cx="32" cy="28" rx="23" ry="27" fill={balloonColor} stroke="#333" strokeWidth="1" />
    <path
      d="M32 54 
     Q30 58 32 62 
     Q34 66 32 70"
      fill="none"
      stroke="#333"
      strokeWidth="1"
    />

    {/* Большая шестерёнка */}
    <g transform="translate(26,31)">
      <circle cx="0" cy="0" r="8" fill={gearColor} stroke="#333" strokeWidth="4" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const inner = 8.5;
        const outer = 11;
        const x1 = Math.cos(angle) * inner;
        const y1 = Math.sin(angle) * inner;
        const x2 = Math.cos(angle) * outer;
        const y2 = Math.sin(angle) * outer;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="4" strokeLinecap="round" />;
      })}
    </g>

    {/* Малая шестерёнка */}
    <g transform="translate(41,19)">
      <circle cx="0" cy="0" r="5" fill={gearColor} stroke="#333" strokeWidth="3" />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const inner = 5.5;
        const outer = 7;
        const x1 = Math.cos(angle) * inner;
        const y1 = Math.sin(angle) * inner;
        const x2 = Math.cos(angle) * outer;
        const y2 = Math.sin(angle) * outer;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#333" strokeWidth="4" strokeLinecap="round" />;
      })}
    </g>
  </svg>
);

export default BalloonSettingsIcon;
