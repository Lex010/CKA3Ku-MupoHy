import createElement from '../../utils/create-element';
import pushistayaPlanetaVideoFunc from '../../utils/videoForFairyTale';
import { pushistayaPlanetaData } from './pushistayaPlanetaData';

export const titleIdPushistayaPlaneta = {
  title: 'Пушистая Планета',
  id: 'pushistayaPlaneta',
};

export function pushistayaPlaneta(container: HTMLElement) {
  createElement('h1', container, { id: 'h1' }, `${titleIdPushistayaPlaneta.title}`);

  pushistayaPlanetaData.forEach((block) => {
    if (block.type === 'text') {
      createElement('p', container, { class: 'txt' }, block.content);
    } else if (block.type === 'video') {
      pushistayaPlanetaVideoFunc(container, block.src);
    }
  });
}
