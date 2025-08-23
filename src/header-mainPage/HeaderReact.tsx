import React, { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import { useNightMode } from './ThemeToggle/ThemeToggleContext';
import { BookmarkButton } from './Bookmark/BookmarkButton';
import BookmarkModalButton from './Bookmark/BookmarkMenu/BookmarkModalButton';
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
      const target = event.target as Node;

      // Временное решение конфликта с модальным окном
      if (document.querySelector('.modal-overlay')?.contains(target)) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      if (menuOpen) {
        main.classList.add('blurred');
      } else {
        main.classList.remove('blurred');
      }
    }
    return () => {
      if (main) {
        main.classList.remove('blurred');
      }
    };
  }, [menuOpen]);

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
            <li>
              <BookmarkButton />
            </li>
            <li>
              <BookmarkModalButton onCloseAll={() => setMenuOpen(false)} />
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
