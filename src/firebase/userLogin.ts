import { login, logoutUser, onUserChange, auth } from './auth';

export default function userLogin(userMenu: HTMLElement): void {
  // Создаем (или повторно находим) отдельный контейнер под логин-меню
  let loginContainer = userMenu.querySelector('.login-container') as HTMLElement;

  if (!loginContainer) {
    loginContainer = document.createElement('div');
    loginContainer.className = 'login-container';
    userMenu.appendChild(loginContainer);
  }

  function renderLoggedOut(): void {
    loginContainer.innerHTML = `
      <button id="login-btn">Войти Google</button>
    `;
    loginContainer.querySelector('#login-btn')?.addEventListener('click', login);
  }

  function renderLoggedIn(photoURL: string, name: string): void {
    loginContainer.innerHTML = `
      <div class="tooltip-container">
        <img id="user-avatar" src="${photoURL}" alt="${name}" style="width: 32px; height: 32px; border-radius: 50%; cursor: pointer;" />
        <div id="tooltip" class="tooltiptext hidden">
          Имя: ${name}<br>
          Почта: ${auth.currentUser?.email || 'неизвестно'}<br>
          <button id="logout-btn" class="tooltip-logout-btn">Выйти</button>
        </div>
      </div>
    `;

    const avatar = loginContainer.querySelector('#user-avatar');
    const tooltip = loginContainer.querySelector('#tooltip');

    avatar?.addEventListener('click', (e) => {
      e.stopPropagation();
      tooltip?.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!(e.target as HTMLElement).closest('.tooltip-container')) {
        tooltip?.classList.add('hidden');
      }
    });

    loginContainer.querySelector('#logout-btn')?.addEventListener('click', logoutUser);
  }

  onUserChange((user) => {
    if (user) {
      renderLoggedIn(user.photoURL || '', user.displayName || 'User');
    } else {
      renderLoggedOut();
    }
  });
}
