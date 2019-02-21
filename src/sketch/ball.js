class Ball {
  constructor(p5, x, y, r) {
    this.r = r
    this.pos = p5.createVector(x,y)
    this.vel = p5.createVector(0, 0.2)
    this.gravity = p5.createVector(0, 0.1)
  }

  update(p5) {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.vel.x += this.gravity.x
    this.vel.y += this.gravity.y
  }

  show(p5) {
    p5.push()
    p5.noFill()
    p5.stroke(255)
    p5.circle(this.pos.x, this.pos.y, this.r)
    p5.pop()
  }
}

export default Ball