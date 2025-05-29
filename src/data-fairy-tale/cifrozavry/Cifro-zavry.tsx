import React, { useEffect, useRef } from 'react';
import { cifrozavryData } from './cifrozavryData';
import ImageModal from '../../utils/open-img-in-modal/imageModal';

const titleIdCifrozavry = {
  title: 'Цифрозавры',
  id: 'cifrozavry',
};

const Cifrozavry: React.FC = () => {
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
    <div className="cifrozavry-container">
      <h1 id="h1">{titleIdCifrozavry.title}</h1>
      {cifrozavryData.map((item, index) => {
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
              className="cifrozavry-image"
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

export { Cifrozavry, titleIdCifrozavry };
