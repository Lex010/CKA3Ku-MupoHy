import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import pepa from '../../assets/games/xo/pepa.png';
import dobrynya from '../../assets/games/xo/Dobrynya.png';
import karamelka from '../../assets/games/xo/Kramelka.png';
import masha from '../../assets/games/xo/Masha.png';
import alesha from '../../assets/games/xo/Alyosha-Popovich.png';
import medved from '../../assets/games/xo/Medved.png';
import bogatyr from '../../assets/games/xo/Bogatyr.png';
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
    img: bogatyr,
    name: 'Богатырь',
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
  {
    img: dobrynya,
    name: 'Добрыня',
  },
  {
    img: cheburashaka,
    name: 'Чебурашка',
  },
  {
    img: dyadyaStepa,
    name: 'Дядя Стёпа',
  },
  {
    img: gena,
    name: 'Крокодил Гена',
  },
  {
    img: kazak,
    name: 'Казак',
  },
  {
    img: malvina,
    name: 'Мальвина',
  },
  {
    img: oksana,
    name: 'Оксана',
  },
  {
    img: vasilisa,
    name: 'Василиса Премудрая',
  },
  {
    img: volk,
    name: 'Волк',
  },
  {
    img: zayac,
    name: 'Заяц',
  },
];
