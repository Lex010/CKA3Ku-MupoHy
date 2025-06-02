import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface GameModalProps {
  onClose: () => void;
  onReady?: (refs: { gameField: HTMLDivElement; header: HTMLDivElement }) => void;
  headerContent?: React.ReactNode;
  gameFieldContent?: React.ReactNode;
}

const GameModal: React.FC<GameModalProps> = ({ onClose, onReady, headerContent, gameFieldContent }) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (onReady && headerRef.current && contentRef.current) {
      onReady({
        header: headerRef.current,
        gameField: contentRef.current,
      });
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [onReady]);

  return ReactDOM.createPortal(
    <div className="game-modal">
      <div className="game-modal-header" ref={headerRef}>
        <button className="game-modal-close" onClick={onClose}>
          Закрыть
        </button>
        {headerContent}
      </div>
      <div className="game-modal-content" ref={contentRef}>
        {gameFieldContent}
      </div>
    </div>,
    document.body
  );
};

export default GameModal;
