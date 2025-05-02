export function initWrapper(modalImage: HTMLImageElement): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';
  wrapper.style.maxWidth = '96%';
  wrapper.style.maxHeight = 'calc(100vh - 80px)';
  wrapper.style.flexShrink = '0';
  wrapper.style.overflow = 'hidden';

  modalImage.parentElement?.insertBefore(wrapper, modalImage);
  wrapper.appendChild(modalImage);

  return wrapper;
}
