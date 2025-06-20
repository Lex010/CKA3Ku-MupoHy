import React, { useEffect, useRef } from 'react';
import './BackgroundParticles.css';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  update: () => void;
  draw: () => void;
}

const BackgroundParticles: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const colors = ['#0952BD', '#A5BFF0', '#118CD6', '#1AAEE8', '#F2E8C9'];
  const particleCount = 150;

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

    class ParticleImpl implements Particle {
      x: number;

      y: number;

      radius: number;

      color: string;

      vx: number;

      vy: number;

      canvas: HTMLCanvasElement;

      ctx: CanvasRenderingContext2D;

      constructor(localCanvas: HTMLCanvasElement, localCtx: CanvasRenderingContext2D) {
        this.canvas = localCanvas;
        this.ctx = localCtx;
        this.x = Math.random() * localCanvas.width;
        this.y = Math.random() * localCanvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      update = () => {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

        this.draw();
      };

      draw = () => {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.shadowColor = this.color;
        this.ctx.shadowBlur = 10;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
      };
    }

    particlesRef.current = Array.from({ length: particleCount }, () => new ParticleImpl(canvas, ctx));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => p.update());
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
