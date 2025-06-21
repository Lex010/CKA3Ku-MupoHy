import React, { useEffect, useRef } from 'react';
import './BackgroundParticles.css';
import Star from './Star';
import Satellite from './Satellite';

const BackgroundParticles: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Храним частицы между монтированиями
  const particlesRef = useRef<{ stars: Star[]; satellites: Satellite[] } | null>(null);

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

    // Создаем частицы, только если их еще нет в кеше
    if (!particlesRef.current) {
      particlesRef.current = {
        stars: Array.from({ length: 100 }, () => new Star(ctx, canvas.width, canvas.height)),
        satellites: Array.from({ length: 10 }, () => new Satellite(canvas, ctx)),
      };
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current!.stars.forEach((star) => star.draw());
      particlesRef.current!.satellites.forEach((sat) => sat.update());
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
