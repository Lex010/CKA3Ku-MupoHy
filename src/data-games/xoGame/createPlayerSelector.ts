import createElement from '../../utils/create-element';
import { Player } from './gameCharacters';

export default function createPlayerSelector(
  container: HTMLDivElement,
  playerNumber: number,
  selectedCharacters: (Player | null)[],
  allCharacters: Player[],
  onPlayerChange: (playerIndex: number, newPlayer: Player) => void
): void {
  const wrapper = createElement('div', container, { class: 'player-config' });
  createElement('p', wrapper, {}, `Игрок ${playerNumber}`);

  const select = createElement('select', wrapper, { class: 'character-select' }) as HTMLSelectElement;

  const statusWrapper = createElement('div', wrapper, { class: 'status-wrapper' });

  const currentPlayer = selectedCharacters[playerNumber - 1] || { name: '', status: undefined };

  const icon = createElement(
    'button',
    statusWrapper,
    {
      class: 'player-icon',
      'data-status': currentPlayer.status ?? 'human',
    },
    currentPlayer.status === 'bot' ? '🤖' : '👤'
  ) as HTMLButtonElement;

  const statusLabel = createElement(
    'span',
    statusWrapper,
    { class: 'status-label' },
    currentPlayer.status === 'bot' ? 'Бот' : 'Человек'
  );

  const renderOptions = () => {
    select.innerHTML = '';

    allCharacters.forEach((char) => {
      const isTaken = selectedCharacters.some((sel, index) => index !== playerNumber - 1 && sel?.name === char.name);

      if (!isTaken || char.name === currentPlayer.name) {
        const option = document.createElement('option');
        option.value = char.name;
        option.textContent = char.name;
        select.appendChild(option);
      }
    });

    if (currentPlayer.name) {
      select.value = currentPlayer.name;
    }
  };

  renderOptions();

  select.addEventListener('change', () => {
    const selectedName = select.value;
    const selectedChar = allCharacters.find((c) => c.name === selectedName)!;

    const updatedPlayer: Player = {
      ...selectedChar,
      status: currentPlayer.status,
    };

    onPlayerChange(playerNumber - 1, updatedPlayer);
  });

  icon.addEventListener('click', () => {
    const currentStatus = icon.getAttribute('data-status');
    const nextStatus = currentStatus === 'human' ? 'bot' : 'human';

    icon.setAttribute('data-status', nextStatus);
    icon.textContent = nextStatus === 'bot' ? '🤖' : '👤';
    statusLabel.textContent = nextStatus === 'bot' ? 'Бот' : 'Человек';

    const current = selectedCharacters[playerNumber - 1];
    if (current) {
      const updatedPlayer = {
        ...current,
        status: nextStatus === 'bot' ? 'bot' : undefined,
      };
      onPlayerChange(playerNumber - 1, updatedPlayer);
    }
  });
}
