import { useState } from 'react';
import Modal from '../../components/ReactModal/Modal';
import png from '../../assets/nav-menu/users-starting-page.png';
import StartPageMenu from './StartPageMenu';
import './UserStartPageButton.css';

interface UserStartPageButtonProps {
  onCloseAll?: () => void;
}

export function UserStartPageButton({ onCloseAll }: UserStartPageButtonProps) {
  // const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseAll) onCloseAll();
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem('startPage');
  //   setStartPage(saved ?? null);
  // }, []);

  // const assignStartPage = () => {
  //   localStorage.setItem('startPage', currentPage);
  //   setStartPage(currentPage);
  //   console.log(`✅ Назначена стартовая страница: ${currentPage}`);
  // };

  // const clearStartPage = () => {
  //   localStorage.removeItem('startPage');
  //   setStartPage(null);
  //   console.log('❌ Стартовая страница удалена');
  // };

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
