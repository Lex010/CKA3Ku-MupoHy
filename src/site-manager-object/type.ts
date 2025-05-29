type ContItemInside = {
  id: string;
  title: string;
  type: 'story' | 'game' | 'menu';
  component: React.FC;
};

export type ContentItem = Record<string, ContItemInside>;
