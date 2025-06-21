import React, { useEffect, useRef } from 'react';
import './BackgroundParticles.css';
import Star from './Star';
import Satellite from './Satellite';

const BackgroundParticles: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars: Star[] = Array.from({ length: 0 }, () => new Star(ctx, canvas.width, canvas.height));
    const satellites: Satellite[] = Array.from({ length: 0 }, () => new Satellite(canvas, ctx));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.draw());
      satellites.forEach((sat) => sat.update());
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="background-particles" ref={containerRef}>
      <canvas ref={canvasRef} className="background-particles-canvas" />
      <div className="background-particles-content">{children}</div>
    </div>
  );
};

export default BackgroundParticles;
