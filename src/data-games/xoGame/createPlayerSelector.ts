import createElement from '../../utils/create-element';
import { Player } from './gameCharacters';

export default function createPlayerSelector(container: HTMLDivElement, playerNumber: number, player: Player): Player {
  const wrapper = createElement('div', container, { class: 'player-config' });
  createElement('p', wrapper, {}, `Игрок ${playerNumber}`);

  const icon = createElement(
    'button',
    wrapper,
    {
      class: 'player-icon',
      'data-status': player.status ?? 'human',
    },
    player.status === 'bot' ? '🤖' : '👤'
  ) as HTMLButtonElement;

  const statusLabel = createElement(
    'span',
    wrapper,
    { class: 'status-label' },
    player.status === 'bot' ? 'Бот' : 'Человек'
  );

  icon.addEventListener('click', () => {
    const current = icon.getAttribute('data-status');
    const next = current === 'human' ? 'bot' : 'human';
    icon.setAttribute('data-status', next);
    icon.textContent = next === 'bot' ? '🤖' : '👤';
    statusLabel.textContent = next === 'bot' ? 'Бот' : 'Человек';
    player.status = next === 'bot' ? 'bot' : undefined; // 🟢 Обновляем оригинальный объект
  });

  return player;
}
