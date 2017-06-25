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
  const ballFactory = createBallWithRandomVelocity(context, Math.random);
  const app = new BouncingBallApp(canvas, context, ballFactory);

  canvas.addEventListener('click', (e) => {
    app.addBall(e);
  });

  app.draw();
});
