import React, { useState, useEffect, useMemo } from 'react';
import { icons, technologies } from '@/data';
import Image from 'next/image';

interface TechWheelProps {
  size: {
    sm: number;
    lg: number;
  };
}

type TechItem = string | { id: string; size?: number };

const iconMap = new Map(icons.map(icon => [icon.id, icon]));

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
  
  const centerX = currentSize / 2;
  const centerY = currentSize / 2;

  const BASE_ICON_RADIUS = 15;
  const BUBBLE_RADIUS = BASE_ICON_RADIUS + 5; 

  const techList = technologies as TechItem[];
  const innerCircleTechs = techList.slice(0, 4);
  const outerCircleTechs = techList.slice(4);

  const renderTechItem = (item: TechItem, index: number, total: number, radius: number, isClockwise: boolean) => {
    const techId = typeof item === 'string' ? item : item.id;
    const customRadius = typeof item === 'object' && item.size ? item.size : BASE_ICON_RADIUS;
    const imageDiameter = customRadius * 2;

    const containerSize = imageDiameter * 1.5;
    const offset = containerSize / 2;

    const angle = (index / total) * 2 * Math.PI;
    const orbitX = centerX + radius * Math.cos(angle);
    const orbitY = centerY + radius * Math.sin(angle);
    
    const x = orbitX - offset;
    const y = orbitY - offset;

    const techIcon = iconMap.get(techId);
    const animationName = isClockwise ? 'clockwiseRotation' : 'counterRotation';

    return (
      <g key={techId}>

        <circle
          cx={orbitX}
          cy={orbitY}
          r={BUBBLE_RADIUS}
          fill='#D9D9D9'
          fillOpacity='0.9'
          stroke='black'
          strokeOpacity='0.36'
          strokeWidth="1"
        />
        
        <foreignObject x={x} y={y} width={containerSize} height={containerSize}>
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transformOrigin: 'center',
            animation: `${animationName} 95s linear infinite`,
            willChange: 'transform',
          }}>
            {techIcon && (
              <div style={{ width: imageDiameter, height: imageDiameter, position: 'relative' }}>
                <Image
                  src={techIcon.icon}
                  alt={techId}
                  fill
                  sizes={`${imageDiameter}px`} 
                  loading="eager"
                  priority={true}
                  quality={90}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div className='tech-wheel'>
      <svg
        width={currentSize}
        height={currentSize}
        viewBox={`0 0 ${currentSize} ${currentSize}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Circle Track */}
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
          {outerCircleTechs.map((item, index) => 
            renderTechItem(item, index, outerCircleTechs.length, outerCircleRadius, false)
          )}
        </g>

        {/* Inner Circle Track */}
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
          {innerCircleTechs.map((item, index) => 
            renderTechItem(item, index, innerCircleTechs.length, innerCircleRadius, true)
          )}
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
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @keyframes innerSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes counterRotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes clockwiseRotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default TechWheel;