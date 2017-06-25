import {
  expect
} from 'chai';
import {
  updateX
} from '../../src/projectile';
import {
  updateXTestCases,
  updateYTestCases
} from './index.spec-data';

describe('Projectile', function() {

  describe('updateX', function() {
    updateXTestCases.forEach(({
      time,
      angle,
      initialVelocity,
      input,
      expected
    }) => {
      it('updates the motion in the x-axis for a given time, angle and initial velocity', function() {
        const {
          x,
          vx
        } = updateX(input, angle, initialVelocity, time);
        expect(x).to.be.closeTo(expected.x, 0.00001);
        expect(vx).to.be.closeTo(expected.vx, 0.00001);
      });
    });
  });

  describe('updateY', function() {
    updateYTestCases.forEach(({
      time,
      angle,
      gravitationalAcceleration,
      initialVelocity,
      input,
      expected
    }) => {
      it('updates the motion in the y-axis for a given time, angle, gravitationalAcceleration, and initial velocity', function() {
        const {
          y,
          vy
        } = updateY(input, angle, initialVelocity, gravitationalAcceleration, time);
        expect(y).to.be.closeTo(expected.y, 0.00001);
        expect(vy).to.be.closeTo(expected.vy, 0.00001);
      });
    });
  });
});
