import {
  expect
} from 'chai';
import {
  updateX
} from '../../src/projectile';
import {
  updateXTestCases
} from './index.spec-data';

describe('Projectile', function() {
  updateXTestCases().forEach(({
    time,
    angle,
    initialVelocity,
    input,
    expected
  }) => {
    it('updates the motion in the x-axis for a given time, angle and initial velocity', function() {
      const {x, vx} = updateX(input, angle, initialVelocity, time);
      expect(x).to.be.closeTo(expected.x, 0.00001);
    });
  });
});
