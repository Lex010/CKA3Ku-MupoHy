import createElement from '../../utils/create-element';
import cifrozavr1 from '../../assets/cifrozavr/cifrozavr01.png';
import cifrozavr2 from '../../assets/cifrozavr/cifrozavr02.jpg';

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
      content: '— Мирон, пора в новое приключение! На планете Цифрозавров нужна твоя помощь!',
    },
    {
      type: 'text',
      content: '— Цифрозавры? — удивился Мирон. — Это динозавры, которые умеют считать?',
    },
    {
      type: 'text',
      content: '— Именно! Но они забыли, как выглядят и называются цифры! Нужно им помочь!',
    },
    {
      type: 'text',
      content: 'Мирон сел на кровать-ракету и громко сказал: — Космос, вперёд! 🚀',
    },
    {
      type: 'text',
      content: '🦖 1 — Мирон встретил Однозаврика. У него был один рог как у единорога.',
    },
    {
      type: 'text',
      content: '— Привет, динозаврик! У тебя на животик единица и на голове один рог. Тебя зовут Один?',
    },
    {
      type: 'text',
      content: '— Всё верно, Мирон! Спасибо, что помог вспомнить моё имя, — сказал динозаврик.',
    },
    {
      type: 'image',
      src: cifrozavr1,
      alt: 'Цифрозавр Один',
    },
    {
      type: 'text',
      content: '🦖 2 — Мирон встретил другого цифрозаврика.',
    },
    {
      type: 'text',
      content:
        '— У тебя два крыла и цифра 2 на животике — это должно помочь тебе вспомнить своё имя, — сказал Мирон цифрозаврику.',
    },
    {
      type: 'text',
      content: '— Точно! Меня зовут Двосик! — обрадовался динозаврик.',
    },
    {
      type: 'image',
      src: cifrozavr2,
      alt: 'Цифрозавр Один',
    },
  ];

  data.forEach((b) => {
    if (b.type === 'text' && b.content) {
      createElement('p', container, { class: 'txt' }, b.content);
    }
    if (b.type === 'image' && b.src) {
      createElement('img', container, { src: b.src, alt: b.alt || '', loading: 'lazy', class: 'fairy-image' });
    }
  });

  // ВАЖНО не забыть добавить сохранение в локальном хранилище
  localStorage.setItem('currentPage', titleIdCifrozavry.id);
}
