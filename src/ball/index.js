export default class Ball {
  constructor(context, x, y, vx,vy) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this.x,
      this.y,
      2,
      0,
      Math.PI * 2,
      true
    );
    this.context.closePath();
    this.context.fill();
  }
}
