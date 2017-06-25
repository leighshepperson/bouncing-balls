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
    it('draws a ball at position x, y', function() {
      const x = 3,
        y = 5;

      const ball = new Ball(contextStub, x, y, 0, 0);

      ball.draw();

      expect(contextStub.arc).to.be.calledWith(x, y);
    });
  });
});
