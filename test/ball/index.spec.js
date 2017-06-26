import {
  expect
} from 'chai';
import sinon from 'sinon';
import Ball from '../../src/ball';

describe('Ball', function() {
  let contextStub, canvasStub;

  before(function() {
    canvasStub = {};
    contextStub = {
      beginPath: sinon.spy(),
      arc: sinon.spy(),
      closePath: sinon.spy(),
      fill: sinon.spy(),
      stroke: sinon.spy()
    };
  });

  afterEach(function() {
    contextStub.beginPath.reset();
    contextStub.arc.reset();
    contextStub.closePath.reset();
    contextStub.fill.reset();
    contextStub.stroke.reset();
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

    it('calls context.beginPath once', function() {
      expect(contextStub.beginPath.calledOnce).to.be.true;
    });

    it('calls context.closePath once', function() {
      expect(contextStub.closePath.calledOnce).to.be.true;
    });

    it('calls context.fill once', function() {
      expect(contextStub.fill.calledOnce).to.be.true;
    });

    it('calls context.arc with x, y and defaults to draw ball', function() {
      expect(contextStub.arc.calledWith(x, y, radius, 0, Math.PI * 2, true)).to.be.ok;
    });

    it('calls context.stroke once', function() {
      expect(contextStub.stroke.calledOnce).to.be.true;
    });
  });

  describe('update', function() {
    const x = 3,
      y = 5,
      vx = 7,
      vy = 8,
      radius = 1,
      gravitationalAcceleration = 2;
    let ball, bounce;

    beforeEach(function() {
      canvasStub = {
        height: 300
      };
      bounce = 1;
      ball = new Ball(canvasStub, contextStub, x, y, vx, vy, radius, gravitationalAcceleration, bounce);
    });

    it('moves x by vx', function() {
      ball.update()
      const expected = x + vx;
      expect(ball.x).to.equal(expected);
    });

    it('moves y by vy plus gravitational acceleration', function() {
      ball.update();
      const expected = y + vy + gravitationalAcceleration;
      expect(ball.y).to.equal(expected);
    });

    it('updates y-velocity by vy plus gravitational acceleration', function() {
      ball.update();
      const expected = vy + gravitationalAcceleration;
      expect(ball.vy).to.equal(expected);
    });

    it('does not update x-velocity', function() {
      ball.update();
      expect(ball.vx).to.equal(7);
    });

    it('updates y-velocity by minus vy plus gravitational acceleration if the ball will leave the bottom of the canvas', function() {
      canvasStub.height = y;
      const expected = -vy + gravitationalAcceleration;

      ball.update();

      expect(ball.vy).to.be.equal(expected);
    });

    it('returns the ball to the canvas if it will leave the bottom of the canvas', function() {
      canvasStub.height = y;
      const expected = y - radius + -vy + gravitationalAcceleration;

      ball.update();

      expect(ball.y).to.be.equal(expected);
    });

    it('multiplies the y-velocity by the bounce if the ball will leave the bottom of the canvas', function() {
      canvasStub.height = y;
      bounce = 0.3;
      ball = new Ball(canvasStub, contextStub, x, y, vx, vy, radius, gravitationalAcceleration, bounce);
      const expected = bounce * -vy + gravitationalAcceleration;

      ball.update();

      expect(ball.vy).to.be.equal(expected);
    });
  });
});
