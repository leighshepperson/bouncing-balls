import {
  expect
} from 'chai';
import sinon from 'sinon';
import Ball from '../../src/ball';

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
});
