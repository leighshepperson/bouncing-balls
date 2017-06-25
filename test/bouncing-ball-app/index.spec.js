import {
  expect
} from 'chai';
import sinon from 'sinon';
import BouncingBallApp from '../../src/bouncing-ball-app';

describe('BouncingBallApp', function() {
  let contextStub, canvasStub, ballFactoryStub;

  before(function() {
    contextStub = {};
    canvasStub = {
      height: 500,
      width: 800,
      offsetLeft: 20,
      offsetTop: 32
    };
    ballFactoryStub = sinon.stub();
  });

  describe('addBall', function() {
    const clickEvent = {
      pageX: 2,
      pageY: 3
    };

    let bouncingBallApp;

    beforeEach(function() {
      bouncingBallApp = new BouncingBallApp(canvasStub, contextStub, ballFactoryStub);
    });

    it('adds a ball to the list of balls', function() {
      bouncingBallApp.addBall(clickEvent);
      expect(bouncingBallApp.balls.length).to.be.equal(1);
    });

    it('calls the ball factory with page x position minus canvas offset', function() {
      bouncingBallApp.addBall(clickEvent);

      expect(ballFactoryStub.args[0][0]).to.be.equal(clickEvent.pageX - canvasStub.offsetLeft);
    });

    it('calls the ball factory with page y position minus canvas offset', function() {
      bouncingBallApp.addBall(clickEvent);

      expect(ballFactoryStub.args[0][1]).to.be.equal(clickEvent.pageY - canvasStub.offsetTop);
    });
  });
});
