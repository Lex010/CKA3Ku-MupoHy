import React from 'react';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { useNightMode } from './ThemeToggle/ThemeToggleContext';

interface HeaderProps {
  goHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ goHome }: HeaderProps) => {
  const { isDay, setIsDay } = useNightMode();

  return (
    <header className="main-header">
      <button className="nav-btn" onClick={goHome}>
        🏠 На главную
      </button>
      <ThemeToggle checked={isDay} onChange={(e) => setIsDay(e.target.checked)} />
    </header>
  );
};

export default Header;
