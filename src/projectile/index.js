export const updateX = ({
  x,
  vx
}, angle, initialVelocity, time) => {
  const velocity = initialVelocity * Math.cos(angle);
  return {
    x: x + velocity * time,
    vx: velocity
  }
}
