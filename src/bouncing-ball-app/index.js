import Ball from '../ball';
export default class BouncingBallApp {
  constructor(canvas, context, ballFactory) {
    this._canvas = canvas;
    this._context = context;
    this._balls = [];
    this._ballFactory = ballFactory;
    this.draw = this.draw.bind(this);
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

  draw() {
    requestAnimationFrame(this.draw);
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    for(const ball of this.balls) {
      ball.update();
      ball.draw();
    };
  }
}
