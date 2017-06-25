export const updateXTestCases = [{
    time: 1,
    angle: Math.PI,
    initialVelocity: 4,
    input: {
      x: 2,
      vx: 4
    },
    expected: {
      x: -2,
      vx: -4
    }
  },
  {
    time: 2,
    angle: Math.PI / 4,
    initialVelocity: 2,
    input: {
      x: -1,
      vx: 2
    },
    expected: {
      x: 1.82842,
      vx: 1.414213
    }
  }
]

export const updateYTestCases = [{
  time: 1,
  angle: Math.PI,
  initialVelocity: 4,
  gravitationalAcceleration: 2,
  input: {
    y: 2,
    vy: 4
  },
  expected: {
    y: 1,
    vy: -2
  }
}]
