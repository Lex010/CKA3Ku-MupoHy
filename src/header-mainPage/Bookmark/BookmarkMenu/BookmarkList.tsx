import { useEffect, useState } from 'react';
import BookmarkRemoveButton from './BookmarkRemoveButton';
import SimplePagination from '../../../utils/Pagination/SimplePagination/SimplePagination';
import './css/BookmarkList.css';

interface BookmarkListProps {
  onLinkClick?: () => void;
}

export default function BookmarkList({ onLinkClick }: BookmarkListProps) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(saved);
  }, []);

  const handleRemove = (url: string) => {
    const updated = bookmarks.filter((b) => b !== url);
    setBookmarks(updated);
    localStorage.setItem('bookmarks', JSON.stringify(updated));
  };

  const totalPages = Math.ceil(bookmarks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = bookmarks.slice(startIndex, startIndex + itemsPerPage);

  if (bookmarks.length === 0) {
    return <p>Закладок нет</p>;
  }

  return (
    <div>
      <ul className="pages-bookmarks__ul">
        {currentItems.map((url, i) => (
          <li className="pages-bookmarks__li" key={i}>
            <a className="pages-bookmarks__a" href={url} onClick={() => onLinkClick?.()}>
              {url}
            </a>
            <BookmarkRemoveButton url={url} onRemove={handleRemove} />
          </li>
        ))}
      </ul>
      <SimplePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
}
