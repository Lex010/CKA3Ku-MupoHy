import React, { useEffect, useState } from 'react';
import './css/MainFieldDvoiniki.css';
import { gameCharDvoiniki } from './gameCharDvoiniki';
import cardBack from '../../assets/games/Dvoiniki/cardBack.png';
import preloadImages from '../../utils/preloadImages';

interface Card {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
  isMatchedAnimating?: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MainFieldDvoiniki: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = gameCharDvoiniki.map((char) => char.img);
    const allImages = [...images, ...images, cardBack];

    preloadImages(allImages)
      .then(() => {
        const pairs = shuffleArray([...images, ...images]);
        const initialCards = pairs.map((img, index) => ({
          id: index,
          img,
          isFlipped: false,
          isMatched: false,
        }));
        setCards(initialCards);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(`Ошибка загрузки изображений: ${err}`);
      });
  }, []);

  const handleCardClick = (index: number) => {
    const clickedCard = cards[index];
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedIndexes.length === 2) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newFlippedIndexes = [...flippedIndexes, index];
    setCards(newCards);
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const [first, second] = newFlippedIndexes;
      if (newCards[first].img === newCards[second].img) {
        newCards[first].isMatched = true;
        newCards[second].isMatched = true;
        newCards[first].isMatchedAnimating = true;
        newCards[second].isMatchedAnimating = true;
        setCards([...newCards]);
        setTimeout(() => {
          newCards[first].isMatchedAnimating = false;
          newCards[second].isMatchedAnimating = false;
          setCards([...newCards]);
          setFlippedIndexes([]);
        }, 500);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards([...newCards]);
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  };

  if (isLoading) {
    return <div id="h1">Загрузка...</div>;
  }

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card 
    ${card.isFlipped || card.isMatched ? 'flipped' : ''} 
    ${card.isMatchedAnimating ? 'matched-animating' : ''}
    ${card.isMatched ? 'matched' : ''}
  `}
          onClick={() => handleCardClick(index)}
        >
          {card.isFlipped || card.isMatched ? (
            <img src={card.img} alt="character" className="card-image" />
          ) : (
            <img src={cardBack} alt="card back" className="card-back" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainFieldDvoiniki;
