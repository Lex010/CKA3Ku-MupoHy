export default class Satellite {
  x: number;

  y: number;

  radius: number;

  color: string;

  vx: number;

  vy: number;

  canvas: HTMLCanvasElement;

  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 0.5 + 1;
    this.color = '#ffffff';
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 0.2;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;
  }

  update = () => {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < -10 || this.x > this.canvas.width + 10 || this.y < -10 || this.y > this.canvas.height + 10) {
      this.x = Math.random() * this.canvas.width;
      this.y = Math.random() * this.canvas.height;
    }

    this.draw();
  };

  draw = () => {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.shadowColor = this.color;
    this.ctx.shadowBlur = 8;
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  };
}
