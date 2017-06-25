export default class Ball {
  constructor(context, x, y, xv, xy) {
    this.context = context,
    this.x = x,
    this.y = y,
    this.xv = xv,
    this.xy = xy
  }

  draw() {
    this.context.arc(
      this.x,
      this.y,
      2,
      0,
      Math.PI * 2,
      true
    );
  }
}
