import React, { useState, useEffect } from 'react';
import { icons, technologies } from '@/data';

// Define the type of the size prop
interface TechWheelProps {
  size: {
    sm: number;
    lg: number;
  };
}

const TechWheel: React.FC<TechWheelProps> = ({ size }) => {
  const [currentSize, setCurrentSize] = useState(size.lg); // Default to lg size

  // Resize event listener for window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setCurrentSize(size.lg);  // Large screen
      } else if (window.innerWidth > 768) {
        setCurrentSize(size.lg - 50);  // Medium screen (slightly smaller)
      } else {
        setCurrentSize(size.sm);  // Small screen
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial size on load
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  const outerCircleRadius = currentSize / 2.5;
  const innerCircleRadius = currentSize / 4;
  const iconRadius = 15; // Keep the original icon size
  const centerX = currentSize / 2;
  const centerY = currentSize / 2;

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
        width={currentSize}
        height={currentSize}
        viewBox={`0 0 ${currentSize} ${currentSize}`}
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
        {innerCirclePositions.map(({ id, x, y }) => {
          const techIcon = icons.find(icon => icon.id === id);
          return (
            <React.Fragment key={id}>
              {/* Background circle */}
              <circle
                cx={x + iconRadius}
                cy={y + iconRadius}
                r={iconRadius + 5}
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
        {outerCirclePositions.map(({ id, x, y }) => {
          const techIcon = icons.find(icon => icon.id === id);
          return (
            <React.Fragment key={id}>
              {/* Background circle */}
              <circle
                cx={x + iconRadius}
                cy={y + iconRadius}
                r={iconRadius + 5}
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
      `}</style>
    </div>
  );
};

export default TechWheel;
