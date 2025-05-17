import spiderMan from '../../assets/games/xo/spiderMan.svg';
import hulk from '../../assets/games/xo/hulk.svg';
import test01 from '../../assets/cifrozavr/cifrozavr01.jpg';
import test02 from '../../assets/cifrozavr/cifrozavr02.jpg';

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
    symbol: test01,
    name: 'тест1',
    status: undefined,
  },
  {
    symbol: test02,
    name: 'тест2',
    status: undefined,
  },
];
