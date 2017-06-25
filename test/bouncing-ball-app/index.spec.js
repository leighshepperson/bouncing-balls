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
    let bouncingBallApp;

    beforeEach(function() {
      bouncingBallApp = new BouncingBallApp(canvasStub, contextStub);
    });

    it('adds a ball to the list of balls', function() {
      bouncingBallApp.addBall();
      expect(bouncingBallApp.balls.length).to.be.equal(1);
    });
  });
});
