export const START_PAGE_KEY = 'startPage';

export function setStartPage(url: string) {
  localStorage.setItem(START_PAGE_KEY, url);
}

export function clearStartPage() {
  localStorage.removeItem(START_PAGE_KEY);
}

export function resetStartPageToDefault() {
  const defaultPage = `${window.location.origin}/`; // главная
  localStorage.setItem(START_PAGE_KEY, defaultPage);
  return defaultPage;
}
