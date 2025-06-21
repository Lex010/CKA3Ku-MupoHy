export default class Star {
  x: number;

  y: number;

  radius: number;

  color: string;

  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.radius = Math.random() * 1.2 + 0.3;
    this.color = '#ffffff';
    this.ctx = ctx;
  }

  draw = () => {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // this.ctx.shadowColor = this.color;
    // this.ctx.shadowBlur = 5;
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();
  };
}
