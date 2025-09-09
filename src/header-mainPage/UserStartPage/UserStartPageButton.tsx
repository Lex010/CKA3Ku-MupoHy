import { useState } from 'react';
import Modal from '../../components/ReactModal/Modal';
import png from '../../assets/nav-menu/users-starting-page.png';
import StartPageMenu from './StartPageMenu';
import './css/UserStartPageButton.css';

interface UserStartPageButtonProps {
  onCloseAll?: () => void;
}

export function UserStartPageButton({ onCloseAll }: UserStartPageButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseAll) onCloseAll();
  };

  return (
    <div className="main-header__startpage-btns-cont">
      <button className="nav-btn main-header__btn" onClick={() => setIsOpen(true)}>
        <img src={png} alt="Стартовая страница" className="main-header__startpage-icon" /> Стартовая
      </button>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <StartPageMenu />
      </Modal>
    </div>
  );
}
