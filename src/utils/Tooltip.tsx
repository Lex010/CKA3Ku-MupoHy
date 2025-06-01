import React, { useState, ReactNode } from 'react';

interface TooltipProps {
  text: string; // Текст подсказки
  children: ReactNode; // Элемент, к которому привязана подсказка
  className?: string; // Доп. класс для обёртки (опционально)
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={`tooltip-wrapper ${className || ''}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {visible && (
        <div
          className="tooltip-box"
          style={{
            position: 'absolute',
            bottom: '50%',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0,0,0,0.75)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            whiteSpace: 'normal',
            maxWidth: '90vw',
            zIndex: 1000,
            fontSize: '12px',
            pointerEvents: 'none',
          }}
        >
          {text}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              marginLeft: '-5px',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid rgba(0,0,0,0.75)',
            }}
          />
        </div>
      )}
    </span>
  );
};

export default Tooltip;
