import {
  GRAVITATIONAL_ACCELERATION,
  BALL_RADIUS
} from '../constants';

export default class Ball {
  constructor(canvas, context, x, y, vx, vy, radius) {
    this._canvas = canvas;
    this._context = context;
    this._x = x;
    this._y = y;
    this._vx = vx;
    this._vy = vy;
    this._radius = radius;
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
  }

  update() {
    if((this._y + this._radius) > this._canvas.height) {
      this._vy = -this.vy;
      this._y = this._canvas.height - this._radius;
    }

    this._vy += GRAVITATIONAL_ACCELERATION;
    this._x += this._vx;
    this._y += this._vy;
  }
}
