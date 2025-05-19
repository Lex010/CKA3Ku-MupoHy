import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
import dobrynya from '../../assets/games/xo/Dobrynya02.png';

export interface Player {
  img: string;
  name: string;
  status?: string; // "bot" | undefined
}

export const gameCharacters: Player[] = [
  {
    img: spiderMan,
    name: 'Человек паук',
    status: undefined,
  },
  {
    img: hulk,
    name: 'Халк',
    status: undefined,
  },
  {
    img: pepa,
    name: 'Пепа',
    status: undefined,
  },
  {
    img: dobrynya,
    name: 'Добрыня',
    status: undefined,
  },
];
