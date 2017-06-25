import Ball from '../ball';
export default class BouncingBallApp {
  constructor(canvas, context) {
    this._canvas = canvas;
    this._context = context;
    this._balls = [];
  }

  get balls() {
    return this._balls;
  }

  addBall({
    pageX,
    pageY
  }) {
    const ball = new Ball(context, pageX - this._canvas.offsetLeft, pageY - this._canvas.offsetTop, 0, 0);
    this.balls.push(ball);
  }
}
