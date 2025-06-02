import React, { useEffect, useState } from 'react';
import './css/MainFieldDvoiniki.css';
import { gameCharDvoiniki } from './gameCharDvoiniki';

interface Card {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const MainFieldDvoiniki: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const images = gameCharDvoiniki.map((char) => char.img);
    const pairs = shuffleArray([...images, ...images]);
    const initialCards = pairs.map((img, index) => ({
      id: index,
      img,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(initialCards);
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
        setTimeout(() => {
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

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          {card.isFlipped || card.isMatched ? (
            <img src={card.img} alt="character" className="card-image" />
          ) : (
            <div className="card-back">❓</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainFieldDvoiniki;
