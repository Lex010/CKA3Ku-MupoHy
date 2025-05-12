export default function openXoGameModal(): void {
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

  const content = document.createElement('div');
  content.className = 'game-modal-content';
  content.textContent = 'Тут будет игровое поле';

  modal.appendChild(header);
  modal.appendChild(content);

  document.body.appendChild(modal);
  // Отключаем прокрутку страницы
  document.body.style.overflow = 'hidden';
}
