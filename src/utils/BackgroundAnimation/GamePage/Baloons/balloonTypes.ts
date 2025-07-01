export interface Balloon {
  id: string;
  color: string;
  left: number;
  duration: number;
  delay: number;
  isPopping: boolean;
}

export const BALLOON_COLORS = ['#00b894', '#0984e3', '#6c5ce7', '#fd79a8', '#e17055'];
