import './CloseButton.css';

interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button className="nav-btn close-button" onClick={onClick}>
      <span className="close-button__icon">Х</span>
    </button>
  );
}
