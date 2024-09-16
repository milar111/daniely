'use client';

import React from 'react';
import { icons, technologies } from '@/data';

const TechWheel = () => {
  const outerCircleRadius = 160;
  const innerCircleRadius = 90;
  const iconRadius = 15; // Reduced icon size
  const centerX = 200;
  const centerY = 200;

  const innerCircleTechs = technologies.slice(0, 3);
  const outerCircleTechs = technologies.slice(3);

  const innerCirclePositions = innerCircleTechs.map((techId, index) => {
    const angle = (index / innerCircleTechs.length) * 2 * Math.PI;
    const x = centerX + innerCircleRadius * Math.cos(angle) - iconRadius;
    const y = centerY + innerCircleRadius * Math.sin(angle) - iconRadius;
    return { id: techId, x, y, angle };
  });

  const outerCirclePositions = outerCircleTechs.map((techId, index) => {
    const angle = (index / outerCircleTechs.length) * 2 * Math.PI;
    const x = centerX + outerCircleRadius * Math.cos(angle) - iconRadius;
    const y = centerY + outerCircleRadius * Math.sin(angle) - iconRadius;
    return { id: techId, x, y, angle };
  });

  return (
    <div className='tech-wheel'>
      <svg
        width="400"
        height="400"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={outerCircleRadius}
          stroke="black"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          strokeLinecap="round"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r={innerCircleRadius}
          stroke="black"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          strokeLinecap="round"
        />

        {/* Render icons for the inner circle */}
        {innerCirclePositions.map(({ id, x, y, angle }) => {
          const techIcon = icons.find(icon => icon.id === id);
          return (
            <React.Fragment key={id}>
              {/* Background circle */}
              <circle
                cx={x + iconRadius}
                cy={y + iconRadius}
                r={iconRadius + 5} // Background circle radius (slightly larger than icon)
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              {/* Icon */}
              <image
                href={techIcon?.icon}
                x={x}
                y={y}
                width={iconRadius * 2}
                height={iconRadius * 2}
                style={{
                  transformOrigin: `${x + iconRadius}px ${y + iconRadius}px`,
                  animation: `counterSpin 95s linear infinite`,
                }}
              />
            </React.Fragment>
          );
        })}

        {/* Render icons for the outer circle */}
        {outerCirclePositions.map(({ id, x, y, angle }) => {
          const techIcon = icons.find(icon => icon.id === id);
          return (
            <React.Fragment key={id}>
              {/* Background circle */}
              <circle
                cx={x + iconRadius}
                cy={y + iconRadius}
                r={iconRadius + 5} // Background circle radius (slightly larger than icon)
                fill="white"
                stroke="black"
                strokeWidth="1"
              />
              {/* Icon */}
              <image
                href={techIcon?.icon}
                x={x}
                y={y}
                width={iconRadius * 2}
                height={iconRadius * 2}
                style={{
                  transformOrigin: `${x + iconRadius}px ${y + iconRadius}px`,
                  animation: `counterSpin 95s linear infinite`,
                }}
              />
            </React.Fragment>
          );
        })}
      </svg>
      <style jsx>{`
        .tech-wheel {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 400px;
          height: 400px;
          animation: spin 95s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes counterSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pin2 {
          from {
            transform: rotate(-360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}

export default TechWheel;
