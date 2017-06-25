import {
  should
} from 'chai';
import projectile from '../../src/projectile';

describe('Projectile', function() {
  it('updates the motion in the x-axis for a given time, angle and initial velocity', function() {
    const time = 1,
      angle = Math.PI,
      v0 = 4,
      input = {
        x: 2,
        vx: 4
      };

    const expected = {
      x: -2,
      vx: -4
    }

    projectile.update(input, angle, v0, time).should.be.equal(expected);
  });
});
