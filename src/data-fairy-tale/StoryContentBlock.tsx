import React, { useEffect, useRef } from 'react';
import ImageModal from '../utils/open-img-in-modal/imageModal';
import pushistayaPlanetaVideoFunc from '../utils/videoForFairyTale';
import { Pagination } from '../utils/Pagination/Pagination';
import NotFoundPage from '../header-mainPage/NotFoundPage/NotFoundPage';

type StoryItem =
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string };

interface StoryPageProps {
  title: string;
  data: StoryItem[];
}

const VideoWrapper: React.FC<{ src: string }> = ({ src }) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoContainerRef.current) {
      pushistayaPlanetaVideoFunc(videoContainerRef.current, src);
    }
  }, [src]);

  return <div ref={videoContainerRef} />;
};

const StoryContentBlock: React.FC<StoryPageProps> = ({ title, data }) => {
  const modalRef = useRef<ImageModal | null>(null);

  useEffect(() => {
    modalRef.current = new ImageModal(document.body, '', '');
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!modalRef.current) return;
    modalRef.current.openModal(e.currentTarget);
  };

  return (
    <Pagination items={data} itemsPerPage={10} notFoundElement={<NotFoundPage />}>
      {(currentItems, controls) => (
        <div className="story-container">
          <h1 id="h1">{title}</h1>
          {controls}
          {currentItems.map((item, index) => {
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
                return <VideoWrapper key={index} src={item.src} />;
              default:
                return null;
            }
          })}
          {controls}
        </div>
      )}
    </Pagination>
  );
};

export { StoryContentBlock, StoryItem };
