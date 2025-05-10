type ContItemInside = {
  id: string;
  title: string;
  type: 'story' | 'game' | 'menu';
  render: (container: HTMLElement) => void;
};

export type ContentItem = {
  [K in string]: K extends ContItemInside['id'] ? ContItemInside : never;
};
// тип ContentItem содержит ключь соответствующий ContItemInside['id']
