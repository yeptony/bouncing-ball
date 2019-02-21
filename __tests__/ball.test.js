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
    this.vel = { x: 0, y: -15 }
    this.gravity = { x: 0, y: 9.81 }
  }

  update() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.vel.x += this.gravity.x
    this.vel.y += this.gravity.y
    this.bounceOnEdge()
  }

  bounceOnEdge() {
    if(
      this.pos.y - this.r > square.pos.y + square.s ||
      this.pos.y + this.r < square.pos.y 
      ) {
      this.pos.y *= -1
    }
  }
}

it('places ball in the square', () => {
  const ball = new Ball()
  expect(ball.pos.x - ball.r).toBeGreaterThanOrEqual(square.pos.x)
  expect(ball.pos.y + ball.r).toBeGreaterThanOrEqual(square.pos.y)
  expect(ball.pos.x).toBeLessThanOrEqual(square.pos.x + square.s)
  expect(ball.pos.y + ball.r).toBeLessThanOrEqual(square.pos.y + square.s)
})

it('updates ball position', () => {
  const ball = new Ball()
  ball.pos = { x: 5, y: 2 }
  ball.vel = { x: 1, y: 2 }
  ball.update()
  expect(ball.pos).toEqual({ x: 5+1, y: 2+2 })
})

it('update ball gravity', () => {
  const ball = new Ball()
  ball.vel = { x: 1, y: 2 }
  ball.gravity = { x:0, y:3 }
  ball.update()
  expect(ball.vel).toEqual({ x: 1+0, y: 2+3 })
})

it.only('should bounce on square edges', () => {
  const ball = new Ball()
  ball.pos = { x: 20, y: 20 }
  ball.vel = { x: 0, y: 50 }
  ball.gravity = { x: 0, y: 20 }
  let ballYPositions = []
  for (let i of [...Array(20).keys()]) {
    ballYPositions.push(ball.pos.y)
    ball.update()
  }
  console.log(Math.max(...ballYPositions))
  expect(Math.max(...ballYPositions)).toBeLessThanOrEqual(square.pos.y + square.s - 10)

})