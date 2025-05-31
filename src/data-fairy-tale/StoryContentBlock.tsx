import React, { useEffect, useRef } from 'react';
import ImageModal from '../utils/open-img-in-modal/imageModal';
import pushistayaPlanetaVideoFunc from '../utils/videoForFairyTale';

type StoryItem =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string };

interface StoryPageProps {
  title: string;
  data: StoryItem[];
}

// Вспомогательный компонент, который использует ref и вызывает pushistayaPlanetaVideoFunc
const VideoWrapper: React.FC<{ src: string }> = ({ src }) => {
  const videoContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (videoContainerRef.current) {
      pushistayaPlanetaVideoFunc(videoContainerRef.current, src);
    }
  }, [src]);

  return <div ref={videoContainerRef} />;
};

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
        switch (item.type) {
          case 'text':
            return (
              <p key={index} className="txt">
                {item.content}
              </p>
            );
          case 'image':
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
          case 'video':
            // Тут надо «обернуть» pushistayaPlanetaVideoFunc,
            // потому что он императивно вставляет видео в контейнер
            // Предположим, что pushistayaPlanetaVideoFunc принимает контейнер и src и создает видео
            return <VideoWrapper key={index} src={item.src} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export { StoryContentBlock, StoryItem };
