export default class Ball {
  constructor(canvas, context, x, y, vx, vy, radius, gravitationalAcceleration, bounce) {
    this._canvas = canvas;
    this._context = context;
    this._x = x;
    this._y = y;
    this._vx = vx;
    this._vy = vy;
    this._radius = radius;
    this._gravitationalAcceleration = gravitationalAcceleration;
    this._bounce = bounce;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get vx() {
    return this._vx;
  }

  get vy() {
    return this._vy;
  }

  get radius() {
    return this._radius;
  }

  draw() {
    this._context.beginPath();
    this._context.arc(
      this._x,
      this._y,
      this._radius,
      0,
      Math.PI * 2,
      true
    );
    this._context.closePath();
    this._context.fillStyle = 'red';
    this._context.fill();
    this._context.lineWidth = 5;
    this._context.strokeStyle = 'black';
    this._context.stroke();
  }

  update() {
    if ((this._y + this._radius) > this._canvas.height) {
      this._vy = -this.vy * this._bounce;
      this._y = this._canvas.height - this._radius;
    }

    this._vy += this._gravitationalAcceleration;
    this._x += this._vx;
    this._y += this._vy;
  }
}
