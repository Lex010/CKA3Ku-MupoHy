import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
import dobrynya from '../../assets/games/xo/Dobrynya.png';
import karamelka from '../../assets/games/xo/Kramelka.png';
import masha from '../../assets/games/xo/Masha.png';
import alesha from '../../assets/games/xo/Alyosha-Popovich.png';
import medved from '../../assets/games/xo/Medved.png';
import cheburashaka from '../../assets/games/xo/Cheburashaka.png';
import dyadyaStepa from '../../assets/games/xo/DyadyaStepa.png';
import gena from '../../assets/games/xo/Gena.png';
import kazak from '../../assets/games/xo/Kazak.png';
import malvina from '../../assets/games/xo/Malvina.png';
import oksana from '../../assets/games/xo/Oksana.png';
import vasilisa from '../../assets/games/xo/Vasilisa.png';
import volk from '../../assets/games/xo/Volk.png';
import zayac from '../../assets/games/xo/Zayac.png';

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
  {
    img: cheburashaka,
    name: 'Чебурашка',
    status: undefined,
  },
  {
    img: dyadyaStepa,
    name: 'Дядя Стёпа',
    status: undefined,
  },
  {
    img: gena,
    name: 'Крокодил Гена',
    status: undefined,
  },
  {
    img: kazak,
    name: 'Казак',
    status: undefined,
  },
  {
    img: malvina,
    name: 'Мальвина',
    status: undefined,
  },
  {
    img: oksana,
    name: 'Оксана',
    status: undefined,
  },
  {
    img: vasilisa,
    name: 'Василиса Премудрая',
    status: undefined,
  },
  {
    img: volk,
    name: 'Волк',
    status: undefined,
  },
  {
    img: zayac,
    name: 'Заяц',
    status: undefined,
  },
];
