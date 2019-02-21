class Square {
  constructor(s) {
    this.s = s
    this.pos = {
      x: 200,
      y: 100
    }
  }
}

const square = new Square(80)

class Ball {
  constructor() {
    this.r = 10
    this.pos = {
      x: square.pos.x + square.s / 2,
      y: square.pos.y + this.r
    }
    this.vel = {
      x: 0,
      y: 1
    }
    this.gravity = 9.81
  }

  update() {
    
  }

  show() {

  }
}

it('places ball in the square', () => {
  const ball = new Ball()
  expect(ball.pos.x - ball.r).toBeGreaterThanOrEqual(square.pos.x)
  expect(ball.pos.y + ball.r).toBeGreaterThanOrEqual(square.pos.y)
  expect(ball.pos.x).toBeLessThanOrEqual(square.pos.x + square.s)
  expect(ball.pos.y + ball.r).toBeLessThanOrEqual(square.pos.y + square.s)
})