import React, { useEffect, useState } from 'react';
import './css/MainFieldDvoiniki.css';
import { gameCharDvoiniki } from './gameCharDvoiniki';
import cardBack from '../../assets/games/Dvoiniki/cardBack.png';
import preloadImages from '../../utils/preloadImages';
import { generateCards, Card } from './generateCards';
import GameOverlay from './GameFieldOverlay/GameOverlay';
import TurnOverlay from './GameFieldOverlay/TurnOverlay';
import playerTurnManager from './playerTurnManager';
import PlayerStatus from './PlayerSetting/playerStatus/PlayerStatus';
import {
  PlayerStats,
  initStats,
  addMatchedPair,
  addMistake,
  handleGameComplete,
  resetRoundStats,
} from './PlayerSetting/playerStatsManager';

interface MainFieldDvoinikiProps {
  uniqueCardCount: number;
  fieldSize: number;
  playersCount: number;
  playerNames: string[];
  onStatsUpdate: (stats: PlayerStats[]) => void;
}

const MainFieldDvoiniki: React.FC<MainFieldDvoinikiProps> = ({
  uniqueCardCount,
  fieldSize,
  playersCount,
  playerNames,
  onStatsUpdate,
}) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const { currentPlayer, nextPlayer } = playerTurnManager(playersCount);
  const [showTurnOverlay, setShowTurnOverlay] = useState(false);
  const [autoCloseTurnOverlay, setAutoCloseTurnOverlay] = useState(false); // Для окна переключения игроков
  const [playerStats, setPlayerStats] = useState<PlayerStats[]>(initStats(playersCount)); // Игровые данные пользователей(ходы,победы)
  const [winners, setWinners] = useState<string[]>([]); // Имена победителей

  const initializeGame = () => {
    const images = gameCharDvoiniki.map((char) => char.img);
    const allImages = [...images, cardBack];

    preloadImages(allImages)
      .then(() => {
        const generated = generateCards(fieldSize, uniqueCardCount, images);
        setCards(generated);
        setFlippedIndexes([]);
        setIsComplete(false);
        setIsLoading(false);
        setPlayerStats((prev) => resetRoundStats(prev)); // Сброс раундовой статистики
      })
      .catch((err) => {
        throw new Error(`Ошибка загрузки изображений: ${err}`);
      });
  };

  useEffect(() => {
    initializeGame();
  }, [uniqueCardCount, fieldSize]);

  useEffect(() => {
    if (!isLoading && cards.every((c) => c.isMatched)) {
      setTimeout(() => {
        setIsComplete(true);
        setPlayerStats((prev) => {
          // Обновляю победителей и счет побед
          const { updatedStats, winners: winnersResult } = handleGameComplete(prev, playerNames);
          setWinners(winnersResult);
          return updatedStats;
        });
      }, 1000);
    }
  }, [cards, isLoading]);

  useEffect(() => {
    onStatsUpdate(playerStats); // каждый раз, когда обновляется playerStats
  }, [playerStats]);

  const handleCardClick = (index: number) => {
    if (isComplete) return;
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
        setPlayerStats((prev) => addMatchedPair(prev, currentPlayer)); // Успешная пара
        setTimeout(() => {
          newCards[first].isMatchedAnimating = false;
          newCards[second].isMatchedAnimating = false;
          setCards([...newCards]);
          setFlippedIndexes([]);
          if (playersCount > 1 && !isComplete) {
            // Не переключаем — игрок ходит снова
          }
        }, 500);
      } else {
        setTimeout(() => {
          newCards[first].isFlipped = false;
          newCards[second].isFlipped = false;
          setCards([...newCards]);
          setFlippedIndexes([]);
          setPlayerStats((prev) => addMistake(prev, currentPlayer)); // Не угаданная пара(ошибка)
          if (playersCount > 1 && !isComplete) {
            nextPlayer(); // Ход передаётся
            setShowTurnOverlay(true);
          }
        }, 1000);
      }
    }
  };

  if (isLoading) {
    return <div id="h1">Загрузка...</div>;
  }

  return (
    <div className="modal-dvoiniki">
      {playersCount > 1 && <PlayerStatus playerNames={playerNames} currentPlayer={currentPlayer} />}

      <div className="card-grid-wrapper--dvoiniki">
        <div className="card-grid--dvoiniki">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card--dvoiniki 
              ${card.isFlipped || card.isMatched ? 'flipped--dvoiniki' : ''} 
              ${card.isMatchedAnimating ? 'matched-animating--dvoiniki' : ''}
              ${card.isMatched ? 'matched--dvoiniki' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="card-inner--dvoiniki">
                <div className="card-front--dvoiniki">
                  <img src={card.img} alt="character" className="card-image--dvoiniki" />
                </div>
                <div className="card-back--dvoiniki">
                  <img src={cardBack} alt="card back" className="card-image--dvoiniki" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {isComplete && <GameOverlay onRestart={initializeGame} winners={winners} />}
        {playersCount > 1 && showTurnOverlay && !isComplete && (
          <TurnOverlay
            playerName={playerNames[currentPlayer]}
            onClose={() => setShowTurnOverlay(false)}
            autoClose={autoCloseTurnOverlay}
            setAutoClose={setAutoCloseTurnOverlay}
          />
        )}
      </div>
    </div>
  );
};

export default MainFieldDvoiniki;
