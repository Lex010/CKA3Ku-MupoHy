import React, { useEffect, useState } from 'react';
import Tooltip from '../../../utils/Tooltip';
import '../css/PlayerNames.css';

type PlayerNamesProps = {
  playersCount: number;
  onNamesChange: (names: string[]) => void;
};

const defaultNames = ['Первый', 'Второй', 'Третий'];

const PlayerNames: React.FC<PlayerNamesProps> = ({ playersCount, onNamesChange }) => {
  const [names, setNames] = useState<string[]>(Array(playersCount).fill(''));

  useEffect(() => {
    setNames(Array(playersCount).fill(''));
  }, [playersCount]);

  const sanitizeName = (name: string, index: number): string => {
    const trimmed = name.trim();
    if (!trimmed) {
      return defaultNames[index];
    }
    const valid = /^[a-zA-Zа-яА-ЯёЁ0-9 _\-!?.,]{1,10}$/u.test(trimmed);
    return valid ? trimmed : defaultNames[index];
  };

  const handleNameChange = (index: number, value: string) => {
    const filtered = value.replace(/[^a-zA-Zа-яА-ЯёЁ0-9 _\-!?.,]/gu, '');
    const updatedNames = [...names];
    updatedNames[index] = filtered;
    setNames(updatedNames);
  };

  useEffect(() => {
    // Оповещение родителя о валидированных именах
    const validated = names.map((name, index) => sanitizeName(name, index));
    onNamesChange(validated);
  }, [names, onNamesChange]);

  return (
    <div className="plaName-inputs--dvoiniki difficulty-selection-dvoiniki">
      <Tooltip text="Максимум 10 символов. Рус, англ и цифры. Минимум 1 символ.">
        <span className="page-tooltipTriger plaName-tooltip--dvoiniki">?</span>
      </Tooltip>
      {Array.from({ length: playersCount }, (_, index) => {
        const inputId = `plaName-id-dvoiniki-${index}`;
        return (
          <div key={index} className="plaName-field--dvoiniki">
            <label htmlFor={inputId}>Имя игрока {index + 1}:</label>
            <input
              id={inputId}
              name={inputId}
              type="text"
              value={names[index] || ''}
              onChange={(e) => handleNameChange(index, e.target.value)}
              maxLength={10}
              placeholder={defaultNames[index]}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PlayerNames;
