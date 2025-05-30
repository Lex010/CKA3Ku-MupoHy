import React, { useEffect, useRef } from 'react';
import { volshebnayaEdaData } from './volshebnayaEdaData';
import ImageModal from '../../utils/open-img-in-modal/imageModal';

const titleIdVolshebnayaEda = {
  title: 'Волшебная Еда',
  id: 'voshebnayaEda',
};

const VolshebnayaEda: React.FC = () => {
  const modalRef = useRef<ImageModal | null>(null);
  useEffect(() => {
    modalRef.current = new ImageModal(document.body, '', '');
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!modalRef.current) return;

    modalRef.current.openModal(e.currentTarget);
  };

  return (
    <div className="cifrozavry-container">
      <h1 id="h1">{titleIdVolshebnayaEda.title}</h1>
      {volshebnayaEdaData.map((item, index) => {
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

export { VolshebnayaEda, titleIdVolshebnayaEda };
