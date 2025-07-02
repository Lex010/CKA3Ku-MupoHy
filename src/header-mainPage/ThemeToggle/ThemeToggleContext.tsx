import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { dayTheme, nightTheme } from '../../css/themeVariebles/themeVarieblesStyle';

interface ThemeToggleContextType {
  isDay: boolean;
  setIsDay: (value: boolean) => void;
}

const ThemeToggleContext = createContext<ThemeToggleContextType | undefined>(undefined);

export const NightModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const theme = isDay ? dayTheme : nightTheme;
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(key, theme[key as keyof typeof theme]);
    });
  }, [isDay]);

  return <ThemeToggleContext.Provider value={{ isDay, setIsDay }}>{children}</ThemeToggleContext.Provider>;
};

export const useNightMode = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error('useNightMode must be used inside NightModeProvider');
  }
  return context;
};
