import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dayTheme, nightTheme } from '../../css/themeVariebles/themeVarieblesStyle';

interface ThemeToggleContextType {
  isNight: boolean;
  setIsNight: (value: boolean) => void;
}

const ThemeToggleContext = createContext<ThemeToggleContextType | undefined>(undefined);

export const NightModeProvider = ({ children }: { children: ReactNode }) => {
  const [isNight, setIsNight] = useState(true);

  useEffect(() => {
    const theme = isNight ? nightTheme : dayTheme;
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(key, theme[key as keyof typeof theme]);
    });
  }, [isNight]);

  return <ThemeToggleContext.Provider value={{ isNight, setIsNight }}>{children}</ThemeToggleContext.Provider>;
};

export const useNightMode = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error('useNightMode must be used inside NightModeProvider');
  }
  return context;
};
