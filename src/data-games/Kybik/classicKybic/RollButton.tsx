import React from 'react';
import '../css/rollButton.css';

interface RollButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const RollButton = React.forwardRef<HTMLButtonElement, RollButtonProps>(({ onClick, disabled = false }, ref) => {
  return (
    <button
      ref={ref}
      className={`roll-button_kybik ${disabled ? 'animate_kybik' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="btn-content_kybik">Бросить кубики</span>
      <span className="ovrly_kybik">
        <span className="ovrly2_kybik" />
      </span>
    </button>
  );
});

export default RollButton;
