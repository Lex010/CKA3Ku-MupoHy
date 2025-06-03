export default function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Ошибка загрузки: ${src}`));
      });
    })
  );
}
