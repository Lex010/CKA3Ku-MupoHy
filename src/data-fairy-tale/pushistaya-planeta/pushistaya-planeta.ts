import pushistayaPlanetaVideo from '../../assets/pushistaya-planeta.mp4';
import pushistayaPlanetaVideo02 from '../../assets/pushistaya-planeta02.mp4';
import createElement from '../../utils/create-element';
import pushistayaPlanetaVideoFunc from '../../utils/videoForFairyTale';

export const titleIdPushistayaPlaneta = {
  title: 'Пушистая Планета',
  id: 'pushistayaPlaneta',
};

export function pushistayaPlaneta(container: HTMLElement) {
  createElement('h1', container, { id: 'h1' }, `${titleIdPushistayaPlaneta.title}`);

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Жил-был маленький мальчик по имени Мирон. Ему было всего 4 годика, но он был не простой мальчик, а супергерой! У него был красный плащ, шлем с молнией и волшебный рюкзачок, в котором жила улыбающаяся звезда по имени Зи.'
  );

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Каждое утро, когда мама варила кашу, Зи тихонько шептала из рюкзака:'
  );

  createElement('p', container, { class: 'txt' }, '— Мирон, у нас новое задание! 🛸');

  createElement('p', container, { class: 'txt' }, 'И вот однажды, Зи сказала:');

  createElement(
    'p',
    container,
    { class: 'txt' },
    '— На Пушистой Планете беда! Там живут пушистики — круглые, мягкие комочки, похожие на облачка. Но злая Туча Труля украла у них свет! Без света пушистики не могут играть, прыгать и смеяться. Мы должны помочь!'
  );

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Мирон надел свой супер-костюм, сел на свою кровать-ракету (она умеет летать, если сказать: "Космос, вперёд!") — и полетел! 🚀'
  );

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Пушистая Планета была серой и грустной. Пушистики сидели по углам и грустно сопели.'
  );

  createElement('p', container, { class: 'txt' }, '— Не бойтесь! Я — СуперМирон, я вас спасу! — сказал он.');

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Он достал из рюкзака светящийся фонарик и стал искать Тучу Трулю. Она пряталась за большим деревом из зефира!'
  );

  createElement('p', container, { class: 'txt' }, '— Верни свет, Труля! — крикнул Мирон.');

  createElement('p', container, { class: 'txt' }, '— А если не хочу?! — ответила Туча.');

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Мирон не испугался. Он достал из кармана волшебную конфету-улыбку, угостил Трулю и сказал:'
  );

  pushistayaPlanetaVideoFunc(container, pushistayaPlanetaVideo);

  createElement('p', container, { class: 'txt' }, '— Если ты будешь доброй, мы можем играть вместе!');

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Труля съела конфету… и улыбнулась! Её злая туча растаяла, а солнце снова засияло! ☀️'
  );

  pushistayaPlanetaVideoFunc(container, pushistayaPlanetaVideo02);

  createElement('p', container, { class: 'txt' }, 'Пушистики запрыгали от радости, и все устроили пушистую вечеринку!');

  createElement(
    'p',
    container,
    { class: 'txt' },
    'Мирон покатался на зефирных горках, поел мороженого со вкусом радуги, и когда пришло время возвращаться домой, Зи шепнула:'
  );

  createElement('p', container, { class: 'txt' }, '— Молодец, герой! Пора домой, мама уже зовёт кушать!');

  createElement(
    'p',
    container,
    { class: 'txt' },
    'И Мирон полетел обратно, уснул у себя в кроватке с улыбкой, а звезда Зи тихонько светила рядом, охраняя его сны. 🌙✨'
  );
  // ВАЖНО не забыть добавить сохранение в локальном хранилище
  localStorage.setItem('currentPage', titleIdPushistayaPlaneta.id);
}
