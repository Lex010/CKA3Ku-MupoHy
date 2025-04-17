export default function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  targetSelector?: string | HTMLElement,
  attributes: { [key: string]: string } = {},
  ...children: (HTMLElement | string)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  // Применение атрибутов
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  // Добавление дочерних элементов
  children.forEach((child) => {
    if (typeof child === 'string') {
      element.textContent = child;
    } else {
      element.appendChild(child);
    }
  });

  // Если указан селектор, добавляем новосозданный элемент в целевой элемент
  if (typeof targetSelector === 'string') {
    const targetElements = document.querySelectorAll(targetSelector);
    targetElements.forEach((target) => target.appendChild(element));
  } else {
    targetSelector?.appendChild(element);
  }

  return element;
}

// Пример использования:

// Создать кнопку и вставить её в элемент с классом .container
// const button = createElement('button', '.container', { class: 'btn-primary', type: 'button' }, 'Нажми меня');

// Создать параграф и вставить его в body
// const paragraph = createElement('p', 'body', { class: 'text' }, 'Текст в параграфе');
