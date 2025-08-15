import { useEffect, useState } from 'react';

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    setBookmarks(saved);
  }, []);

  if (bookmarks.length === 0) {
    return <p>Закладок нет</p>;
  }

  return (
    <ul>
      {bookmarks.map((url, i) => (
        <li key={i}>
          <a href={url}>{url}</a>
        </li>
      ))}
    </ul>
  );
}
