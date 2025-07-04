import { BALLOON_COLORS, Balloon } from './balloonTypes';

export const createBalloon = (startFresh = false): Balloon => ({
  id: Date.now().toString(36) + Math.random().toString(36).substring(2),
  color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
  left: Math.random() * 85,
  duration: Math.random() * 20 + 7,
  delay: startFresh ? 0 : -1 * (Math.random() * 50 + 50),
  isPopping: false,
});
