export const getX = (angle, velocity) => {
  return velocity * Math.cos(angle);
}

export const getY = (angle, velocity) => {
  return velocity * Math.sin(angle);
}
