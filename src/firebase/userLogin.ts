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
      <button id="login-btn" class="nav-btn" title="Войти">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.707 15.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 1 1 1.414 1.414L11.414 11H20a1 1 0 1 1 0 2h-8.586l2.293 2.293a1 1 0 0 1 0 1.414z"/>
        <path d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7a1 1 0 1 0 0-2H4V5h7a1 1 0 1 0 0-2H4z"/>
      </svg>
    </button>
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
