const DICE_SIZE = 80;
const MAX_ATTEMPTS = 200;

export interface Position {
  top: number;
  left: number;
}

export const generateSafePosition = (
  existing: Position[],
  buttonRect: DOMRect | null,
  screenWidth: number,
  screenHeight: number
): Position => {
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    const left = Math.floor(Math.random() * (screenWidth - DICE_SIZE));
    const top = Math.floor(Math.random() * (screenHeight - DICE_SIZE - 100)); // запас сверху

    const overlapsButton =
      buttonRect &&
      left + DICE_SIZE > buttonRect.left &&
      left < buttonRect.right &&
      top + DICE_SIZE > buttonRect.top &&
      top < buttonRect.bottom;

    const overlapsOther = existing.some((pos) => {
      return (
        left < pos.left + DICE_SIZE &&
        left + DICE_SIZE > pos.left &&
        top < pos.top + DICE_SIZE &&
        top + DICE_SIZE > pos.top
      );
    });

    if (!overlapsButton && !overlapsOther) {
      return { top, left };
    }
  }

  // fallback — если не получилось
  return {
    top: Math.floor(Math.random() * (screenHeight - DICE_SIZE - 100)),
    left: Math.floor(Math.random() * (screenWidth - DICE_SIZE)),
  };
};
