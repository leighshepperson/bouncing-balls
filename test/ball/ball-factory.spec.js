import {
  expect
} from 'chai';
import sinon from 'sinon';
import {
  createBallWithRandomVelocity
} from '../../src/ball/ball-factory';
import {
  MAX_SPEED
} from '../../src/constants';

const errorMargin = 0.00001;

describe('ballFactory', function() {
  describe('createBallWithRandomVelocity', function() {
    let randomNumberGeneratorStub, canvasStub, contextStub, ball;

    beforeEach(function() {
      contextStub = {};
      canvasStub = {};
      randomNumberGeneratorStub = sinon.stub();
      randomNumberGeneratorStub.onCall(0).returns(3);
      randomNumberGeneratorStub.onCall(1).returns(4);
      const createBall = createBallWithRandomVelocity(canvasStub, contextStub, randomNumberGeneratorStub);
      ball = createBall(1, 2);
    });

    it('creates a ball at postion x', function() {
      expect(ball.x).to.equal(1);
    });

    it('creates a ball at postion y', function() {
      expect(ball.y).to.equal(2);
    });

    it('creates a ball with random vx velocity', function() {
      expect(ball.vx / MAX_SPEED).to.be.closeTo(4, errorMargin);
    });

    it('creates a ball with random vy velocity', function() {
      expect(ball.vy / MAX_SPEED).to.be.closeTo(0, errorMargin);
    });
  });
});
