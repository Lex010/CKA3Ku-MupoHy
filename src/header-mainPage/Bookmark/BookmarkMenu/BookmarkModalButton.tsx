import { useState } from 'react';
import Modal from '../../../components/ReactModal/Modal';
import BookmarkList from './BookmarkList';
import pngBookWithBookmark from '../../../assets/bookmarks/book-with-bookmark.png';
import './css/BookmarkModalButton.css';

interface BookmarkModalButtonProps {
  onCloseAll?: () => void;
}

export default function BookmarkModalButton({ onCloseAll }: BookmarkModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseAll) onCloseAll();
  };

  return (
    <>
      <button className="nav-btn main-header__btn" onClick={() => setIsOpen(true)}>
        <img src={pngBookWithBookmark} alt="Мои закладки" className="main-header__book-with-bookmark-png" /> Закладки
      </button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <BookmarkList onLinkClick={handleClose} />
      </Modal>
    </>
  );
}
