import React from 'react';
import ThemeToggle from './ThemeToggle/ThemeToggle';

interface HeaderProps {
  goHome: () => void;
  isNight: boolean;
  setIsNight: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ goHome, isNight, setIsNight }: HeaderProps) => {
  return (
    <header className="main-header">
      <button className="nav-btn" onClick={goHome}>
        🏠 На главную
      </button>
      <ThemeToggle checked={isNight} onChange={(e) => setIsNight(e.target.checked)} />
    </header>
  );
};

export default Header;
