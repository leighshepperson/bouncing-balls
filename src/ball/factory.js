import Ball from './';
import {
  getX,
  getY
} from '../projectile';
import {
  MAX_SPEED
} from '../constants';

export const createBallWithRandomVelocity = (context, randomNumberGenerator) => {
  return (x, y) => {
    const angle = 2 * Math.PI * randomNumberGenerator();
    const velocity = MAX_SPEED * randomNumberGenerator();
    const vx = getX(angle, velocity);
    const vy = getY(angle, velocity);
    return new Ball(context, x, y, vx, vy);
  }
}
