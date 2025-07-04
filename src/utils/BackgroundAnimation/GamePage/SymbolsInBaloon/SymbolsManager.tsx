import React, { useState } from 'react';
import './SymbolsManager.css';

export interface SymbolItem {
  id: string;
  left: string;
  bottom: string;
  color: string;
  symbol: string;
}

export interface UseSymbolsOptions {
  symbolsSet?: string; // любые символы
  sequential?: boolean; // false = случайно; true = по порядку
}

export const useSymbols = (options: UseSymbolsOptions = {}) => {
  const { symbolsSet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ', sequential = false } = options; // По умолчанию

  const [symbols, setSymbols] = useState<SymbolItem[]>([]);
  const [index, setIndex] = useState(0);

  const addSymbol = (left: string, bottom: string, color: string) => {
    let symbol: string;

    if (sequential) {
      symbol = symbolsSet[index % symbolsSet.length];
      setIndex((prev) => prev + 1);
    } else {
      symbol = symbolsSet[Math.floor(Math.random() * symbolsSet.length)];
    }

    const newSymbol: SymbolItem = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      left,
      bottom,
      color,
      symbol,
    };

    setSymbols((prev) => [...prev, newSymbol]);

    setTimeout(() => {
      setSymbols((prev) => prev.filter((s) => s.id !== newSymbol.id));
    }, 1000);
  };

  return { symbols, addSymbol };
};

export const SymbolsManager: React.FC<{ symbols: SymbolItem[] }> = ({ symbols }) => {
  return (
    <>
      {symbols.map((s) => (
        <div
          key={s.id}
          className="game-page-animation__floating-symbol"
          style={{
            left: s.left,
            bottom: s.bottom,
            color: s.color,
            textShadow: `0 0 10px ${s.color}, 0 0 5px black`,
          }}
        >
          {s.symbol}
        </div>
      ))}
    </>
  );
};
