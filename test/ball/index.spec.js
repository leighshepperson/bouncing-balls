import {
  expect
} from 'chai';
import sinon from 'sinon';
import Ball from '../../src/ball';
import {
  GRAVITATIONAL_ACCELERATION
} from '../../src/constants';

describe('Ball', function() {
  let contextStub, canvasStub;

  before(function() {
    canvasStub = {};
    contextStub = {
      beginPath: sinon.spy(),
      arc: sinon.spy(),
      closePath: sinon.spy(),
      fill: sinon.spy()
    };
  });

  afterEach(function() {
    contextStub.beginPath.reset();
    contextStub.arc.reset();
    contextStub.closePath.reset();
    contextStub.fill.reset();
  });

  describe('draw', function() {
    let ball, x, y, radius;

    beforeEach(function() {
      x = 3;
      y = 5;
      radius = 2;
      ball = new Ball(canvasStub, contextStub, x, y, null, null, radius);
      ball.draw();
    });

    it('calls beginPath once', function() {
      expect(contextStub.beginPath.calledOnce).to.be.true;
    });

    it('calls closePath once', function() {
      expect(contextStub.closePath.calledOnce).to.be.true;
    });

    it('calls fill once', function() {
      expect(contextStub.fill.calledOnce).to.be.true;
    });

    it('calls arc with x, y and defaults to draw a ball', function() {
      expect(contextStub.arc.calledWith(x, y, radius, 0, Math.PI * 2, true)).to.be.ok;
    });
  });

  describe('update', function() {
    let ball;

    beforeEach(function() {
      canvasStub = {};
      ball = new Ball(canvasStub, contextStub, 3, 5, 7, 9, 0);
      ball.update();
    });

    it('moves ball on x-axis by velocity vx much', function() {
      expect(ball.x).to.equal(10);
    });

    it('moves ball on y-axis by velocity vy adusted by graviational acceleration', function() {
      const expected = 14 + GRAVITATIONAL_ACCELERATION;
      expect(ball.y).to.equal(expected);
    });

    it('updates y-axis velocity by graviational acceleration', function() {
      const expected = 9 + GRAVITATIONAL_ACCELERATION;
      expect(ball.vy).to.equal(expected);
    });

    it('does not update x-axis velocity', function() {
      expect(ball.vx).to.equal(7);
    });

    it('reverses y-axis velocity if the ball will leave the bottom of the screen', function() {
      const radius = 1,
        vy = 9;
      canvasStub = {
        height: 300
      };
      ball = new Ball(canvasStub, contextStub, 0, 300, 0, vy, radius);
      const expected = -vy + GRAVITATIONAL_ACCELERATION;

      ball.update();

      expect(ball.vy).to.be.equal(expected);
    });

    it('returns the ball to the canvas if it will leave the bottom of the screen', function() {
      const radius = 1,
        y = 300,
        height = 300;
      canvasStub = {
        height: height
      };
      ball = new Ball(canvasStub, contextStub, 0, y, 0, 0, radius);
      const expected = height + GRAVITATIONAL_ACCELERATION - radius;

      ball.update();

      expect(ball.y).to.be.equal(expected);
    });
  });
});
