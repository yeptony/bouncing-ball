class Ball {
  constructor(p5, x, y, r) {
    this.r = r
    this.pos = p5.createVector(x,y)
    this.pos = {
      x: square.pos.x + square.s / 2,
      y: square.pos.y + this.r
    }
  }

  update(p5) {

  }

  show(p5) {

  }
}

module.exports = Ball