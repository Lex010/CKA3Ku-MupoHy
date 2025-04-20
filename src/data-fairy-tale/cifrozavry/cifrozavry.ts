import createElement from '../../utils/create-element';

export const titleIdCifrozavry = {
  title: 'Цифрозавры',
  id: 'cifrozavry',
};

export function cifrozavry(container: HTMLElement): void {
  createElement('h1', container, { id: 'h1' }, `${titleIdCifrozavry.title}`);

  const data = [
    {
      type: 'text',
      content:
        'Жил-был СуперМирон — мальчик-супергерой с ярким костюмом, голубым плащом и доброй улыбкой. Однажды его волшебная подруга — звезда Зи — сказала:',
    },
    {
      type: 'text',
      content: '— Мирон, пора в новое приключение! В стране Цифрозавров нужна твоя помощь!',
    },
    {
      type: 'text',
      content: '— Цифрозавры? — удивился Мирон. — Это динозавры, которые умеют считать?',
    },
    {
      type: 'text',
      content: '— Именно! Но они забыли, как выглядят цифры! Нужно им помочь!',
    },
    {
      type: 'text',
      content: 'Мирон сел на кровать-ракету и громко сказал: — Космос, вперёд! 🚀',
    },
  ];

  data.forEach((b) => {
    if (b.type === 'text') {
      createElement('p', container, { class: 'txt' }, b.content);
    }
  });

  // ВАЖНО не забыть добавить сохранение в локальном хранилище
  localStorage.setItem('currentPage', titleIdCifrozavry.id);
}
