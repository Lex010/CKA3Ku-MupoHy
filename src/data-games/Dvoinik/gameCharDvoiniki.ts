import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
// import dobrynya02 from '../../assets/games/xo/Dobrynya02.png';
import karamelka from '../../assets/games/xo/Kramelka.png';
import masha from '../../assets/games/xo/Masha.png';
import alesha from '../../assets/games/xo/Alyosha-Popovich.png';
import medved from '../../assets/games/xo/Medved.png';
import dobrynya from '../../assets/games/xo/Dobrynya.png';

export interface Player {
  img: string;
  name: string;
}

export const gameCharDvoiniki: Player[] = [
  {
    img: spiderMan,
    name: 'Человек паук',
  },
  {
    img: hulk,
    name: 'Халк',
  },
  {
    img: pepa,
    name: 'Пепа',
  },
  {
    img: dobrynya,
    name: 'Добрыня',
  },
  {
    img: karamelka,
    name: 'Карамелька',
  },
  {
    img: masha,
    name: 'Маша',
  },
  {
    img: alesha,
    name: 'Алеша Попович',
  },
  {
    img: medved,
    name: 'Медведь',
  },
  // {
  //   img: dobrynya02,
  //   name: 'Добрыня02',
  // },
];
