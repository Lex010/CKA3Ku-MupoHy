import React, { useEffect, useRef } from 'react';
import ImageModal from '../utils/open-img-in-modal/imageModal';

type StoryItem = {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  alt?: string;
};

interface StoryPageProps {
  title: string;
  data: StoryItem[];
}

const StoryContentBlock: React.FC<StoryPageProps> = ({ title, data }) => {
  const modalRef = useRef<ImageModal | null>(null);
  // Создаём один экземпляр ImageModal без thumbnail,
  // просто чтобы использовать метод openModal
  useEffect(() => {
    modalRef.current = new ImageModal(document.body, '', '');
    // Но т.к. конструктор вызывает createThumbnail, можно заменить или отложить вызов
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!modalRef.current) return;
    // Передаём в openModal реальный элемент изображения, на которое кликнули
    modalRef.current.openModal(e.currentTarget);
  };

  return (
    <div className="story-container">
      <h1 id="h1">{title}</h1>
      {data.map((item, index) => {
        if (item.type === 'text' && item.content) {
          return (
            <p key={index} className="txt">
              {item.content}
            </p>
          );
        }

        if (item.type === 'image' && item.src) {
          return (
            <img
              key={index}
              src={item.src}
              alt={item.alt || ''}
              className="story-image"
              onClick={handleImageClick}
              style={{ cursor: 'zoom-in', maxWidth: '100%' }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export { StoryContentBlock, StoryItem };
