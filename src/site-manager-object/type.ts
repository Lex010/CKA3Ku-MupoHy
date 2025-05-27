type ContItemInside = {
  id: string;
  title: string;
  type: 'story' | 'game' | 'menu';
  component: React.FC<{ onSelect: (id: string) => void }>;
};

export type ContentItem = {
  [K in string]: K extends ContItemInside['id'] ? ContItemInside : never;
};
// тип ContentItem содержит ключь соответствующий ContItemInside['id']
