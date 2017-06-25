import Ball from '../ball';
export default class BouncingBallApp {
  constructor(canvas, context, ballFactory) {
    this._canvas = canvas;
    this._context = context;
    this._balls = [];
    this._ballFactory = ballFactory;
  }

  get balls() {
    return this._balls;
  }

  addBall({
    pageX,
    pageY
  }) {
    const ball = this._ballFactory(pageX - this._canvas.offsetLeft, pageY - this._canvas.offsetTop);
    this.balls.push(ball);
  }
}
