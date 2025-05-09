export default function createPageWithLocalStorage(renderFn: (container: HTMLElement) => void, id: string) {
  return (container: HTMLElement) => {
    const thisContainer = container;
    thisContainer.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    localStorage.setItem('currentPage', id); // ВАЖНО добавляет в локальное хранилище текушее положение на сайте
    renderFn(thisContainer);
  };
}
