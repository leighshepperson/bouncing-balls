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
  });

  describe('getY', function() {
    it('computes the y component from velocity and angle', function() {
      const angle = Math.PI / 3,
        velocity = 5;

      expect(getY(angle, velocity)).to.be.closeTo(4.33012, errorMargin);
    });
  })
});
