import { useState } from 'react';
import Modal from '../../../components/ReactModal/Modal';
import BookmarkList from './BookmarkList'; // компонент со списком закладок

export default function BookmarkModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="nav-btn main-header__btn" onClick={() => setIsOpen(true)}>
        📑 Мои Закладки
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BookmarkList />
      </Modal>
    </>
  );
}
