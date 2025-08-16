import { useEffect, useState } from 'react';
import BookmarkRemoveButton from './BookmarkRemoveButton';
import './css/BookmarkList.css';

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(saved);
  }, []);

  const handleRemove = (url: string) => {
    setBookmarks((prev) => prev.filter((b) => b !== url));
  };

  if (bookmarks.length === 0) {
    return <p>Закладок нет</p>;
  }

  return (
    <ul className="pages-bookmarks__ul">
      {bookmarks.map((url, i) => (
        <li className="pages-bookmarks__li" key={i}>
          <a className="pages-bookmarks__a" href={url}>
            {url}
          </a>
          <BookmarkRemoveButton url={url} onRemove={handleRemove} />
        </li>
      ))}
    </ul>
  );
}
