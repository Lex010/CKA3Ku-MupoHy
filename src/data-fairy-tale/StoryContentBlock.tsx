import React, { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import ImageModal from '../utils/open-img-in-modal/imageModal';
import pushistayaPlanetaVideoFunc from '../utils/videoForFairyTale';
import { Pagination } from '../utils/Pagination/Pagination';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get('page') || '1', 10); // Текущая страница

  useEffect(() => {
    modalRef.current = new ImageModal(document.body, '', '');
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!modalRef.current) return;
    modalRef.current.openModal(e.currentTarget);
  };

  return (
    <div className="story-container">
      <h1 id="h1">{title}</h1>
      <Pagination
        items={data}
        itemsPerPage={10}
        initialPage={pageParam} // Передаю начальную страницу
        onPageChange={(newPage) => {
          // Обновляю query
          if (newPage === 1) {
            searchParams.delete('page');
            setSearchParams(searchParams);
          } else {
            setSearchParams({ page: newPage.toString() });
          }
        }}
      >
        {(currentItems, controls) => (
          <>
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
          </>
        )}
      </Pagination>
    </div>
  );
};

export { StoryContentBlock, StoryItem };
