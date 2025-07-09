export interface SymbolSetOption {
  id: string;
  name: string;
  symbols: string;
}

export const SYMBOL_SETS: SymbolSetOption[] = [
  {
    id: 'ru_uppercase',
    name: 'Русский алфавит (А-Я)',
    symbols: 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
  },
  {
    id: 'lat_uppercase',
    name: 'Латинский алфавит (A-Z)',
    symbols: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  },
  {
    id: 'numbers',
    name: 'Числа (0-9)',
    symbols: '0123456789',
  },
];
