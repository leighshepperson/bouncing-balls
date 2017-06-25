import {
  expect
} from 'chai';
import sinon from 'sinon';
import Ball from '../../src/ball';
import {
  GRAVITATIONAL_ACCELERATION
} from '../../src/constants';

describe('Ball', function() {
  let contextStub;

  before(function() {
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
    let ball, x, y;

    beforeEach(function() {
      x = 3;
      y = 5;
      ball = new Ball(contextStub, x, y);
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
      expect(contextStub.arc.calledWith(x, y, 2, 0, Math.PI * 2, true)).to.be.ok;
    });
  });

  describe('update', function() {
    let ball;

    beforeEach(function() {
      ball = new Ball(contextStub, 3, 5, 7, 9);
      ball.update();
    });

    it('moves ball on x-axis by velocity vx much', function() {;
      expect(ball.x).to.equal(10);
    });

    it('moves ball on y-axis by velocity vy much', function() {;
      expect(ball.y).to.equal(14);
    });

    it('updates y-axis velocity by graviational acceleration', function() {
      const expected = 9 + GRAVITATIONAL_ACCELERATION;
      expect(ball.vy).to.equal(expected);
    });

    it('does not update x-axis velocity', function() {
      expect(ball.vx).to.equal(7);
    });
  });
});
