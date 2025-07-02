import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeToggleContextType {
  isNight: boolean;
  setIsNight: (value: boolean) => void;
}

const ThemeToggleContext = createContext<ThemeToggleContextType | undefined>(undefined);

export const NightModeProvider = ({ children }: { children: ReactNode }) => {
  const [isNight, setIsNight] = useState(false);

  return <ThemeToggleContext.Provider value={{ isNight, setIsNight }}>{children}</ThemeToggleContext.Provider>;
};

export const useNightMode = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error('useNightMode must be used inside NightModeProvider');
  }
  return context;
};
