export function paintAt(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  brushSize: number,
  paintedPixels: Set<string>,
  color: string,
  shouldOverwrite: boolean
) {
  const step = 1;
  const radius = brushSize / 2;

  for (let dx = -radius; dx <= radius; dx += step) {
    for (let dy = -radius; dy <= radius; dy += step) {
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= radius) {
        const px = Math.floor(x + dx);
        const py = Math.floor(y + dy);
        const key = `${px},${py}`;
        if (shouldOverwrite || !paintedPixels.has(key)) {
          paintedPixels.add(key);
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(px, py, step, 0, 2 * Math.PI);
          ctx.fill();
        }
      }
    }
  }
}

export function paintLine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  brushSize: number,
  paintedPixels: Set<string>,
  color: string,
  shouldOverwrite: boolean
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const distance = Math.hypot(dx, dy);
  const step = 1;

  for (let i = 0; i <= distance; i += step) {
    const t = i / distance;
    const x = x1 + t * dx;
    const y = y1 + t * dy;
    paintAt(ctx, x, y, brushSize, paintedPixels, color, shouldOverwrite);
  }
}
