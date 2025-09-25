import { useState } from 'react';
import Modal from '../../components/ReactModal/Modal';
import png from '../../assets/nav-menu/users-starting-page.png';
import StartPageMenu from './StartPageMenu';
import './css/HeaderStartPageButton.css';

interface HeaderStartPageButtonProps {
  onCloseAll?: () => void;
}

export function HeaderStartPageButton({ onCloseAll }: HeaderStartPageButtonProps) {
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

      <Modal isOpen={isOpen} onClose={handleClose} classNameContent="modal-content__overflow-visible">
        <StartPageMenu onCloseAll={handleClose} />
      </Modal>
    </div>
  );
}
