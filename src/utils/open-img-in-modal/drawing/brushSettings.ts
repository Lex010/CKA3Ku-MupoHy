export function setupBrushSize(brushSizeRef?: HTMLSelectElement): () => number {
  let brushSize = brushSizeRef ? parseInt(brushSizeRef.value, 10) : 4;
  brushSizeRef?.addEventListener('change', () => {
    brushSize = parseInt(brushSizeRef.value, 10);
  });
  return () => brushSize;
}
