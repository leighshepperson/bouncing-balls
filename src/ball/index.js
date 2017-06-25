import { gravitationalAcceleration } from '../constants';

export default class Ball {
  constructor(context, x, y, vx, vy) {
    this.context = context;
    this._x = x;
    this._y = y;
    this._vx = vx;
    this._vy = vy;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(
      this._x,
      this._y,
      2,
      0,
      Math.PI * 2,
      true
    );
    this.context.closePath();
    this.context.fill();
  }

  update() {
    this._x += this._vx;
    this._y += this._vy + gravitationalAcceleration;
  }
}
