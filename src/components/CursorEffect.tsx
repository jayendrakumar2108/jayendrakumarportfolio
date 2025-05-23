import React, { useEffect, useState } from 'react';

const CursorEffect: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('hover-effect');
      
      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 4 : 1})`,
          opacity: isHovering ? 0.5 : 1
        }}
      ></div>
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          opacity: isHovering ? 0.4 : 0.2
        }}
      ></div>
    </>
  );
};

export default CursorEffect;