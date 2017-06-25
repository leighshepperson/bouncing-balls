import {
  expect
} from 'chai';
import {
  getX,
  getY
} from '../../src/projectile';
import {
  getXTestCases,
  getYTestCases
} from './index.spec-data';

const errorMargin = 0.000001;

describe('Projectile', function() {
  describe('getX', function() {
    getXTestCases.forEach(({
      angle,
      velocity,
      expected
    }) => {
      it('computes the x component given velocity and angle', function() {
        expect(getX(angle, velocity)).to.be.closeTo(expected, errorMargin);
      });
    });
  });

  describe('getY', function() {
    getYTestCases.forEach(({
      angle,
      velocity,
      expected
    }) => {
      it('computes the y component given velocity and angle', function() {
        expect(getY(angle, velocity)).to.be.closeTo(expected, errorMargin);
      });
    })
  })
});
