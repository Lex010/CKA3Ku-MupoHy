import { START_PAGE_KEY } from './startPageUtils';

export function getStartPage(): string | null {
  return localStorage.getItem(START_PAGE_KEY);
}

export function getStartPageWithoutHash(): string | null {
  const raw = getStartPage();
  if (!raw) return null;

  try {
    // Берём всё, что идёт после #
    const relative = raw.split('#')[1] || '/';
    // Убираем двойные слэши в начале
    return relative.replace(/^\/+/, '/');
  } catch {
    return null;
  }
}
