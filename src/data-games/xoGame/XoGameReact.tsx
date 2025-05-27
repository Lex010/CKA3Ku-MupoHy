import React, { useState } from 'react';
import openGameModal from '../openGameModal';
import { gameCharacters, Player } from './gameCharacters';
import { scoreInHeader } from './scoreInHeader';
import renderXoField from './renderXoField';
import { clickXO } from './clickXO';
import PlayerSelector from './PlayerSelector';

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

  const updatePlayer = (index: number, player: Player) => {
    const updated = [...selectedCharacters];
    updated[index] = player;
    setSelectedCharacters(updated);
  };

  const handleStartGame = () => {
    if (!selectedCharacters[0] || !selectedCharacters[1]) {
      throw new Error('Оба игрока должны выбрать персонажа');
    }

    const modal = openGameModal();
    const scores = [0, 0];
    const scoreElements = scoreInHeader(modal.header, selectedCharacters as Player[]) as ScoreElements;

    const updateScore = (winnerIndex: number) => {
      scores[winnerIndex] += 1;
      const key = `player${winnerIndex + 1}Score` as keyof ScoreElements;
      scoreElements[key].textContent = scores[winnerIndex].toString();
    };

    const gameField = renderXoField(modal.gameField);
    clickXO(
      gameField.grid,
      gameField.turnIndicator,
      gameField.restartButton,
      selectedCharacters as Player[],
      3,
      botDifficulty,
      updateScore
    );
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
    </div>
  );
};

export { XoGame, idXoGame };
