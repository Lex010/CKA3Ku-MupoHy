import { useState } from 'react';
import Modal from '../../../components/ReactModal/Modal';
import BookmarkList from './BookmarkList';
import pngBookWithBookmark from '../../../assets/bookmarks/book-with-bookmark.png';
import './css/BookmarkModalButton.css';

export default function BookmarkModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="nav-btn main-header__btn" onClick={() => setIsOpen(true)}>
        <img src={pngBookWithBookmark} alt="Мои закладки" className="main-header__book-with-bookmark-png" /> Мои
        Закладки
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BookmarkList onLinkClick={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}
