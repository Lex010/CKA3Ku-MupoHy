export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export interface Card {
  id: number;
  img: string;
  isFlipped: boolean;
  isMatched: boolean;
  isMatchedAnimating?: boolean;
}

export function generateCards(fieldSize: number, uniqueCardCount: number, availableImages: string[]): Card[] {
  const selectedImages = shuffleArray(availableImages).slice(0, uniqueCardCount);
  const eachCount = fieldSize / uniqueCardCount;

  const cardImages = selectedImages.flatMap((img) => Array.from({ length: eachCount }, () => img));

  const shuffled = shuffleArray(cardImages);
  return shuffled.map((img, index) => ({
    id: index,
    img,
    isFlipped: false,
    isMatched: false,
  }));
}
