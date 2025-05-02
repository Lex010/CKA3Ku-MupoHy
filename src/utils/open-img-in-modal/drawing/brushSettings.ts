export function setupBrushSize(brushSizeRef?: HTMLSelectElement): () => number {
  let brushSize = brushSizeRef ? parseInt(brushSizeRef.value, 10) : 4;
  brushSizeRef?.addEventListener('change', () => {
    brushSize = parseInt(brushSizeRef.value, 10);
  });
  return () => brushSize;
}

export function setupBrushOpacity(opacityRef?: HTMLSelectElement): () => number {
  let opacity = opacityRef ? parseFloat(opacityRef.value) : 0.5;

  opacityRef?.addEventListener('change', () => {
    opacity = parseFloat(opacityRef.value);
  });

  return () => opacity;
}
