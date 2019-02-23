class Ball {
  constructor(p5, x, y, r) {
    this.r = r
    this.pos = p5.createVector(x,y)
    this.vel = p5.createVector(0, 0.1)
    this.gravity = p5.createVector(0, 0.2)
  }

  update(p5, square) {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.vel.x += this.gravity.x
    this.vel.y += this.gravity.y
    this.bounceOnEdge(square)
  }

  show(p5) {
    p5.push()
    p5.noFill()
    p5.stroke(255)
    p5.circle(this.pos.x, this.pos.y, this.r)
    p5.pop()
  }

  bounceOnEdge(square) {
    if(
      this.pos.y + this.r > square.pos.y + square.s ||
      this.pos.y - this.r < square.pos.y 
      ) {
      this.vel.y *= -0.95
    }
  }
}

export default Ball