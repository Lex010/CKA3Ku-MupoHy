import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SymbolSetOption, SYMBOL_SETS } from './symbolSets';

interface BalloonsSettings {
  symbolsSet: SymbolSetOption;
  sequential: boolean;
  showFirework: boolean;
  setSymbolsSet: (set: SymbolSetOption) => void;
  setSequential: (sequential: boolean) => void;
  setShowFirework: (show: boolean) => void;
}

const defaultSet = SYMBOL_SETS[0];

const BalloonsSettingsContext = createContext<BalloonsSettings | undefined>(undefined);

export const BalloonsSettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [symbolsSet, setSymbolsSet] = useState<SymbolSetOption>(defaultSet);
  const [sequential, setSequential] = useState<boolean>(false);
  const [showFirework, setShowFirework] = useState<boolean>(false);

  return (
    <BalloonsSettingsContext.Provider
      value={{ symbolsSet, sequential, showFirework, setSymbolsSet, setSequential, setShowFirework }}
    >
      {children}
    </BalloonsSettingsContext.Provider>
  );
};

export const useBalloonsSettings = (): BalloonsSettings => {
  const context = useContext(BalloonsSettingsContext);
  if (!context) {
    throw new Error('useBalloonsSettings должен использоваться внутри BalloonsSettingsProvider');
  }
  return context;
};
