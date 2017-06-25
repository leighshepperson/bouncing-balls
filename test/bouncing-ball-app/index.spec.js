import {
  expect
} from 'chai';
import BouncingBallApp from '../../src/bouncing-ball-app';

describe('BouncingBallApp', function() {
  let contextStub, canvasStub;

  before(function() {
    contextStub = {};
    canvasStub = {
      height: 500,
      width: 800,
      offsetLeft: 20,
      offsetTop: 32
    };
  });

  describe('addBall', function() {
    const clickEvent = {
      pageX: 2,
      pageY: 3
    };

    let bouncingBallApp;

    beforeEach(function() {
      bouncingBallApp = new BouncingBallApp(canvasStub, contextStub);
    });

    it('adds a ball to the list of balls', function() {
      bouncingBallApp.addBall(clickEvent);
      expect(bouncingBallApp.balls.length).to.be.equal(1);
    });

    it('adds a ball at position x and position y minus canvas offset', function() {
      bouncingBallApp.addBall(clickEvent);
      const [ball] = bouncingBallApp.balls;

      expect(ball.x).to.be.equal(2 - canvasStub.offsetLeft);
      expect(ball.y).to.be.equal(3 - canvasStub.offsetTop);
    });
  });
});
