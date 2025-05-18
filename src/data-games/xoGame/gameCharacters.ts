import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
import dobrynya from '../../assets/games/xo/Dobrynya02.png';

export interface Player {
  symbol: string;
  name: string;
  status?: string; // "bot" | undefined
}

export const gameCharacters: Player[] = [
  {
    symbol: spiderMan,
    name: 'Человек паук',
    status: undefined,
  },
  {
    symbol: hulk,
    name: 'Халк',
    status: undefined,
  },
  {
    symbol: pepa,
    name: 'Пепа',
    status: undefined,
  },
  {
    symbol: dobrynya,
    name: 'Добрыня',
    status: undefined,
  },
];
