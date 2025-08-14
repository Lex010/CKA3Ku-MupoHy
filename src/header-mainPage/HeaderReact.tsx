import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { useNightMode } from './ThemeToggle/ThemeToggleContext';
import './css/HeaderReact.css';

interface HeaderProps {
  goHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ goHome }) => {
  const { isDay, setIsDay } = useNightMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Закрытие меню при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="main-header">
      <div className="main-header__menu" ref={menuRef}>
        <button className="main-header__menu-btn nav-btn" onClick={() => setMenuOpen((prev) => !prev)}>
          ☰ Меню
        </button>

        {menuOpen && (
          <ul className="main-header__menu-list">
            <li>
              <button
                className="nav-btn main-header__btn"
                onClick={() => {
                  goHome();
                  setMenuOpen(false); // закрыть меню
                }}
              >
                🏠 На главную
              </button>
            </li>
            {/* другие пункты */}
          </ul>
        )}
      </div>

      <ThemeToggle checked={isDay} onChange={(e) => setIsDay(e.target.checked)} />
    </header>
  );
};

export default Header;
