import BouncingBallApp from './bouncing-ball-app';
import {
  createBallWithRandomVelocity
} from './ball/factory';

if (module.hot) {
  module.hot.accept()
}

window.addEventListener('load', function() {
  const canvas = document.getElementById('bouncing-ball-canvas');
  const context = canvas.getContext('2d');
  const ballFactory = createBallWithRandomVelocity(canvas, context, Math.random);
  const app = new BouncingBallApp(canvas, context, ballFactory);

  canvas.addEventListener('click', function(e) {
    app.addBall(e);
  });

  window.addEventListener('resize', resizeCanvas);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - canvas.offsetTop;
  }

  resizeCanvas();

  app.draw();
});
