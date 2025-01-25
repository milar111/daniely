import React, { useState, useEffect } from 'react';
import { icons, technologies } from '@/data';

interface TechWheelProps {
  size: {
    sm: number;
    lg: number;
  };
}

const TechWheel: React.FC<TechWheelProps> = ({ size }) => {
  const [currentSize, setCurrentSize] = useState(size.lg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setCurrentSize(size.lg);
      } else if (window.innerWidth > 768) {
        setCurrentSize(size.lg - 50);
      } else {
        setCurrentSize(size.sm);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const outerCircleRadius = currentSize / 2.5;
  const innerCircleRadius = currentSize / 4;
  const iconRadius = 15;
  const centerX = currentSize / 2;
  const centerY = currentSize / 2;

  const innerCircleTechs = technologies.slice(0, 3);
  const outerCircleTechs = technologies.slice(3);

  return (
    <div className='tech-wheel'>
      <svg
        width={currentSize}
        height={currentSize}
        viewBox={`0 0 ${currentSize} ${currentSize}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle Rotating Counterclockwise */}
        <g style={{ transformOrigin: `${centerX}px ${centerY}px`, animation: `outerSpin 95s linear infinite` }}>
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
          {outerCircleTechs.map((techId, index) => {
            const angle = (index / outerCircleTechs.length) * 2 * Math.PI;
            const x = centerX + outerCircleRadius * Math.cos(angle) - iconRadius;
            const y = centerY + outerCircleRadius * Math.sin(angle) - iconRadius;
            const techIcon = icons.find(icon => icon.id === techId);
            return (
              <g key={techId}>
                <circle
                  cx={x + iconRadius}
                  cy={y + iconRadius}
                  r={iconRadius + 5}
                  fill='#D9D9D9'
                  fillOpacity='0.9'
                  stroke='black'
                  strokeOpacity='0.36'
                  strokeWidth="1"
                />
                <image
                  href={techIcon?.icon}
                  x={x}
                  y={y}
                  width={iconRadius * 2}
                  height={iconRadius * 2}
                  style={{
                    transformOrigin: `${x + iconRadius}px ${y + iconRadius}px`,
                    animation: `counterRotation 95s linear infinite`,
                  }}
                />
              </g>
            );
          })}
        </g>

        {/* Inner Circle Rotating Clockwise */}
        <g style={{ transformOrigin: `${centerX}px ${centerY}px`, animation: `innerSpin 95s linear infinite` }}>
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
          {innerCircleTechs.map((techId, index) => {
            const angle = (index / innerCircleTechs.length) * 2 * Math.PI;
            const x = centerX + innerCircleRadius * Math.cos(angle) - iconRadius;
            const y = centerY + innerCircleRadius * Math.sin(angle) - iconRadius;
            const techIcon = icons.find(icon => icon.id === techId);
            return (
              <g key={techId}>
                <circle
                  cx={x + iconRadius}
                  cy={y + iconRadius}
                  r={iconRadius + 5}
                  fill='#D9D9D9'
                  fillOpacity='0.9'
                  stroke='black'
                  strokeOpacity='0.36'
                  strokeWidth="1"
                />
                <image
                  href={techIcon?.icon}
                  x={x}
                  y={y}
                  width={iconRadius * 2}
                  height={iconRadius * 2}
                  style={{
                    transformOrigin: `${x + iconRadius}px ${y + iconRadius}px`,
                    animation: `clockwiseRotation 95s linear infinite`,
                  }}
                />
              </g>
            );
          })}
        </g>
      </svg>
      <style jsx>{`
        .tech-wheel {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: ${currentSize}px;
          height: ${currentSize}px;
        }

        @keyframes outerSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes innerSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Reverse the rotation to keep icons level */
        @keyframes counterRotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes clockwiseRotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TechWheel;
