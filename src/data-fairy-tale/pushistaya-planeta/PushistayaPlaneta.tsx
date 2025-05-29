import React from 'react';
import { pushistayaPlanetaData } from './pushistayaPlanetaData';
import pushistayaPlanetaVideoFunc from '../../utils/videoForFairyTale';

const titleIdPushistayaPlaneta = {
  title: 'Пушистая Планета',
  id: 'pushistayaPlaneta',
};

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

const PushistayaPlaneta: React.FC = () => {
  return (
    <div className="pushistaya-planeta-container">
      <h1 id="h1">{titleIdPushistayaPlaneta.title}</h1>
      {pushistayaPlanetaData.map((block, index) => {
        if (block.type === 'text') {
          return (
            <p key={index} className="txt">
              {block.content}
            </p>
          );
        }
        if (block.type === 'video') {
          // Тут надо «обернуть» pushistayaPlanetaVideoFunc,
          // потому что он императивно вставляет видео в контейнер
          // Предположим, что pushistayaPlanetaVideoFunc принимает контейнер и src и создает видео

          return <VideoWrapper key={index} src={block.src} />;
        }
        return null;
      })}
    </div>
  );
};

export { PushistayaPlaneta, titleIdPushistayaPlaneta };
