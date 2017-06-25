import {
  expect
} from 'chai';
import {
  getX
} from '../../src/projectile';

const errorMargin = 0.000001;

describe('Projectile', function() {
  describe('getX', function() {
    it('computes the x component from velocity and angle', function() {
      const angle = Math.PI / 3,
        velocity = 3;

      expect(getX(angle, velocity)).to.be.closeTo(1.5, errorMargin);
    });
  })
});
