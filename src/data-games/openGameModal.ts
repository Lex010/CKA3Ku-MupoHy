export default function openGameModal(): { gameField: HTMLDivElement; header: HTMLDivElement } {
  const modal = document.createElement('div');
  modal.className = 'game-modal';

  const header = document.createElement('div');
  header.className = 'game-modal-header';

  const closeButton = document.createElement('button');
  closeButton.className = 'game-modal-close';
  closeButton.textContent = 'Закрыть';

  closeButton.addEventListener('click', () => {
    modal.remove();
    document.body.style.overflow = '';
  });

  header.appendChild(closeButton);

  const gameField = document.createElement('div');
  gameField.className = 'game-modal-content';

  modal.appendChild(header);
  modal.appendChild(gameField);

  document.body.appendChild(modal);
  // Отключаем прокрутку страницы
  document.body.style.overflow = 'hidden';

  return { gameField, header };
}
