export function launchDoubleFirework(
  addFirework: (params: { id: string; left: string; bottom: string }) => void,
  left: string,
  bottom: string
) {
  addFirework({
    id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
    left,
    bottom,
  });

  setTimeout(() => {
    addFirework({
      id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
      left,
      bottom,
    });
  }, 50);

  setTimeout(() => {
    addFirework({
      id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
      left,
      bottom,
    });
  }, 100);
}
