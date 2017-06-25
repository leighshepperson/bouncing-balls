import {
  expect
} from 'chai';
import { updateX } from '../../src/projectile';

describe('Projectile', function() {
  it('updates the motion in the x-axis for a given time, angle and initial velocity', function() {
    const time = 1,
      angle = Math.PI,
      initialVelocity = 4,
      input = {
        x: 2,
        vx: 4
      };

    const expected = {
      x: -2,
      vx: -4
    }

    expect(updateX(input, angle, initialVelocity, time)).to.deep.equal(expected);
  });
});
