import React, { useState, useRef, useEffect } from 'react';
import { gameCharacters, Player } from './gameCharacters';
import { scoreInHeader } from './scoreInHeader';
import renderXoField from './renderXoField';
import { clickXO } from './clickXO';
import PlayerSelector from './PlayerSelector';
import GameModal from '../GameModal';

const idXoGame = {
  title: 'Крестики-нолики',
  id: 'xoGame',
};

type ScoreElements = {
  player1Score: HTMLElement;
  player2Score: HTMLElement;
};

const XoGame: React.FC = () => {
  const [selectedCharacters, setSelectedCharacters] = useState<(Player | null)[]>([
    gameCharacters[0],
    gameCharacters[1],
  ]);
  const [botDifficulty, setBotDifficulty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gameFieldRef = useRef<HTMLDivElement | null>(null);

  const updatePlayer = (index: number, player: Player) => {
    const updated = [...selectedCharacters];
    updated[index] = player;
    setSelectedCharacters(updated);
  };

  useEffect(() => {
    if (!isModalOpen) return;

    if (!headerRef.current || !gameFieldRef.current) return;

    const scores = [0, 0];
    const scoreElements = scoreInHeader(headerRef.current, selectedCharacters as Player[]);

    const updateScore = (winnerIndex: number) => {
      scores[winnerIndex] += 1;
      const key = `player${winnerIndex + 1}Score` as keyof ScoreElements;
      scoreElements[key].textContent = scores[winnerIndex].toString();
    };

    const gameField = renderXoField(gameFieldRef.current);
    clickXO(
      gameField.grid,
      gameField.turnIndicator,
      gameField.restartButton,
      selectedCharacters as Player[],
      3,
      botDifficulty,
      updateScore
    );
  }, [isModalOpen]);

  const handleStartGame = () => {
    if (!selectedCharacters[0] || !selectedCharacters[1]) {
      throw new Error('Оба игрока должны выбрать персонажа');
    }
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="fairy-title">{idXoGame.title}</h1>

      <div className="player-setup-wrapper">
        <PlayerSelector
          playerNumber={1}
          selected={selectedCharacters[0]}
          otherSelectedName={selectedCharacters[1]?.name ?? null}
          allCharacters={gameCharacters}
          onChange={(player) => updatePlayer(0, player)}
        />
        <PlayerSelector
          playerNumber={2}
          selected={selectedCharacters[1]}
          otherSelectedName={selectedCharacters[0]?.name ?? null}
          allCharacters={gameCharacters}
          onChange={(player) => updatePlayer(1, player)}
        />
      </div>

      <div className="difficulty-bot-toggle">
        <label htmlFor="difficulty-bots">
          <input
            type="checkbox"
            id="difficulty-bots"
            checked={botDifficulty}
            onChange={(e) => setBotDifficulty(e.target.checked)}
          />
          Умные боты
        </label>
      </div>

      <button className="start-button" onClick={handleStartGame}>
        Начать игру
      </button>

      {isModalOpen && (
        <GameModal
          onClose={() => setIsModalOpen(false)}
          onReady={({ gameField, header }) => {
            const scores = [0, 0];
            const scoreElements = scoreInHeader(header, selectedCharacters as Player[]);

            const updateScore = (winnerIndex: number) => {
              scores[winnerIndex] += 1;
              const key = `player${winnerIndex + 1}Score` as keyof ScoreElements;
              scoreElements[key].textContent = scores[winnerIndex].toString();
            };

            const game = renderXoField(gameField);
            clickXO(
              game.grid,
              game.turnIndicator,
              game.restartButton,
              selectedCharacters as Player[],
              3,
              botDifficulty,
              updateScore
            );
          }}
        />
      )}
    </div>
  );
};

export { XoGame, idXoGame };
