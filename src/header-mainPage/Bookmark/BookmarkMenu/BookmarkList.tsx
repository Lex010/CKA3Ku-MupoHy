import { useEffect, useState } from 'react';
import BookmarkRemoveButton from './BookmarkRemoveButton';
import SimplePagination from '../../../utils/Pagination/SimplePagination/SimplePagination';
import { Bookmark } from '../BookmarkButton';
import './css/BookmarkList.css';

interface BookmarkListProps {
  onLinkClick?: () => void;
}

export default function BookmarkList({ onLinkClick }: BookmarkListProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const saved: Bookmark[] = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(saved);
  }, []);

  const handleRemove = (url: string) => {
    const updated = bookmarks.filter((b) => b.url !== url);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const totalPages = Math.ceil(bookmarks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = bookmarks.slice(startIndex, startIndex + itemsPerPage);

  if (bookmarks.length === 0) {
    return <h2 className="pages-bookmarks__title">Закладок нет</h2>;
  }

  return (
    <div>
      <h2 className="pages-bookmarks__title">Мои закладки</h2>
      <ul className="pages-bookmarks__ul">
        {currentItems.map((b, i) => {
          return (
            <li className="pages-bookmarks__li" key={i}>
              <a className="pages-bookmarks__a" href={b.url} onClick={() => onLinkClick?.()}>
                {b.title}
              </a>
              <BookmarkRemoveButton url={b.url} onRemove={handleRemove} />
            </li>
          );
        })}
      </ul>
      <SimplePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
