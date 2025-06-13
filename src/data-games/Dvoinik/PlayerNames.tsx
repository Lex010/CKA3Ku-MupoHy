import React, { useEffect, useState } from 'react';

type PlayerNamesProps = {
  playersCount: number;
  onNamesChange: (names: string[]) => void;
};

const defaultNames = ['Первый', 'Второй', 'Третий'];

const PlayerNames: React.FC<PlayerNamesProps> = ({ playersCount, onNamesChange }) => {
  const [names, setNames] = useState<string[]>(defaultNames.slice(0, playersCount));

  // Валидация имени
  const sanitizeName = (name: string, index: number): string => {
    const trimmed = name.trim();
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

  useEffect(() => {
    // Обновить количество полей, если изменилось число игроков
    setNames(defaultNames.slice(0, playersCount));
  }, [playersCount]);

  return (
    <div className="plaName-inputs--dvoiniki">
      {Array.from({ length: playersCount }, (_, index) => (
        <div key={index} className="plaName-field--dvoiniki">
          <label>Имя игрока {index + 1}:</label>
          <input
            type="text"
            value={names[index] || ''}
            onChange={(e) => handleNameChange(index, e.target.value)}
            maxLength={10}
            placeholder={defaultNames[index]}
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerNames;
