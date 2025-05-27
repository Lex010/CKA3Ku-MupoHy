import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface GameModalProps {
  onClose: () => void;
  onReady: (refs: { gameField: HTMLDivElement; header: HTMLDivElement }) => void;
}

const GameModal: React.FC<React.PropsWithChildren<GameModalProps>> = ({ onClose, onReady }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerRef.current && contentRef.current) {
      onReady({
        header: headerRef.current,
        gameField: contentRef.current,
      });
    }

    // Disable body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="game-modal">
      <div className="game-modal-header" ref={headerRef}>
        <button className="game-modal-close" onClick={onClose}>
          Закрыть
        </button>
      </div>
      <div className="game-modal-content" ref={contentRef} />
    </div>,
    document.body
  );
};

export default GameModal;
