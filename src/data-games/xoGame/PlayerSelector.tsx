import React from 'react';
import { Player } from './gameCharacters';

interface PlayerSelectorProps {
  playerNumber: number;
  selected: Player | null;
  otherSelectedName: string | null;
  allCharacters: Player[];
  onChange: (newPlayer: Player) => void;
}

const PlayerSelector: React.FC<PlayerSelectorProps> = ({
  playerNumber,
  selected,
  otherSelectedName,
  allCharacters,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedChar = allCharacters.find((char) => char.name === e.target.value);
    if (selectedChar) {
      onChange({ ...selectedChar, status: selected?.status });
    }
  };

  const toggleStatus = () => {
    if (!selected) return;
    const newStatus = selected.status === 'bot' ? undefined : 'bot';
    onChange({ ...selected, status: newStatus });
  };

  const availableCharacters = allCharacters.filter(
    (char) => char.name === selected?.name || char.name !== otherSelectedName
  );

  return (
    <div className="player-config">
      <p>Игрок {playerNumber}</p>
      <select
        className="character-select"
        name="character-selector"
        value={selected?.name ?? ''}
        onChange={handleChange}
      >
        {availableCharacters.map((char) => (
          <option key={char.name} value={char.name}>
            {char.name}
          </option>
        ))}
      </select>
      <div className="status-wrapper">
        <button className="player-icon" data-status={selected?.status ?? 'human'} onClick={toggleStatus}>
          {selected?.status === 'bot' ? '🤖' : '👤'}
        </button>
        <span className="status-label">{selected?.status === 'bot' ? 'Бот' : 'Человек'}</span>
      </div>
    </div>
  );
};

export default PlayerSelector;
