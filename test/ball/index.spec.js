import {
  expect
} from 'chai';
import sinon from 'sinon';
import Ball from '../../src/ball';
import {
  gravitationalAcceleration
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
    it('draws a ball at position x, y with radius 2', function() {
      let x = 3,
        y = 5,
        ball = new Ball(contextStub, x, y, 0, 0);

      ball.draw();
      expect(contextStub.beginPath.calledOnce).to.be.true;
      expect(contextStub.arc.calledWith(x, y, 2, 0, Math.PI * 2, true)).to.be.ok;
      expect(contextStub.closePath.calledOnce).to.be.true;
      expect(contextStub.fill.calledOnce).to.be.true;
    });
  });

  describe('update', function() {
    it('moves ball on x-axis by velocity vx', function() {
      const ball = new Ball(contextStub, 3, 0, 4, 0);
      ball.update();
      expect(ball.x).to.equal(7);
    });

    it('moves ball on y-axis by velocity vy and gravity component', function() {
      let ball = new Ball(contextStub, 0, 5, 0, 14);
      const expected = 19 + gravitationalAcceleration;
      ball.update();
      expect(ball.y).to.equal(expected);
    });
  });
});
