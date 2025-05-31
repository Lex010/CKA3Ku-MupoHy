import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
import dobrynya from '../../assets/games/xo/Dobrynya02.png';
import karamelka from '../../assets/games/xo/Kramelka.png';
import masha from '../../assets/games/xo/Masha.png';
import alesha from '../../assets/games/xo/Alyosha-Popovich.png';
import medved from '../../assets/games/xo/Medved.png';

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
  {
    img: karamelka,
    name: 'Карамелька',
    status: undefined,
  },
  {
    img: masha,
    name: 'Маша',
    status: undefined,
  },
  {
    img: alesha,
    name: 'Алеша Попович',
    status: undefined,
  },
  {
    img: medved,
    name: 'Медведь',
    status: undefined,
  },
];
