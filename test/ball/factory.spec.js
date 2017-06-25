import {
  expect
} from 'chai';
import sinon from 'sinon';
import {
  createBallWithRandomVelocity
} from '../../src/ball/factory';
import {
  MAX_SPEED
} from '../../src/constants';

const errorMargin = 0.00001;

describe('Ball Factory', function() {
  describe('createBallWithRandomVelocity', function() {

    let randomNumberGeneratorStub, contextStub;

    beforeEach(function() {
      contextStub = {};
      randomNumberGeneratorStub = sinon.stub();
      randomNumberGeneratorStub.onCall(0).returns(3);
      randomNumberGeneratorStub.onCall(1).returns(4);
    });

    it('creates a ball at postion x', function() {
      const createBall = createBallWithRandomVelocity(contextStub, randomNumberGeneratorStub);
      const ball = createBall(1, 2);

      expect(ball.x).to.equal(1);
    });

    it('creates a ball at postion y', function() {
      const createBall = createBallWithRandomVelocity(contextStub, randomNumberGeneratorStub);
      const ball = createBall(1, 2);

      expect(ball.y).to.equal(2);
    });

    it('creates a ball with random vx velocity', function() {
      const createBall = createBallWithRandomVelocity(contextStub, randomNumberGeneratorStub);
      const ball = createBall(1, 2);

      expect(ball.vx / MAX_SPEED).to.be.closeTo(4, errorMargin);
    });

    it('creates a ball with random vy velocity', function() {
      const createBall = createBallWithRandomVelocity(contextStub, randomNumberGeneratorStub);
      const ball = createBall(1, 2);

      expect(ball.vy / MAX_SPEED).to.be.closeTo(0, errorMargin);
    });
  });
});
