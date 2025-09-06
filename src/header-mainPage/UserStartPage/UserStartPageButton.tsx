import { useState } from 'react';
import Modal from '../../components/ReactModal/Modal';
import png from '../../assets/nav-menu/users-starting-page.png';
import './UserStartPageButton.css';

export function UserStartPageButton() {
  // const currentPage = `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
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
        {/* Здесь пока заглушка, потом вставлю меню */}
        <div className="startpage-modal__content">
          <h2>Меню стартовой страницы</h2>
        </div>
      </Modal>
    </div>
  );
}
