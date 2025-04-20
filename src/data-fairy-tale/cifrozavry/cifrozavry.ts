import createElement from '../../utils/create-element';

export const titleIdCifrozavry = {
  title: 'Цифрозавры',
  id: 'cifrozavry',
};

export function cifrozavry(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${titleIdCifrozavry.title}`);

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Жил-был СуперМирон — мальчик-супергерой с ярким костюмом, голубым плащом и доброй улыбкой. Однажды его волшебная подруга — звезда Зи — сказала:'
  );

  // ВАЖНО не забыть добавить сохранение в локальном хранилище
  localStorage.setItem('currentPage', titleIdCifrozavry.id);
}
