class Square {
  constructor(p5, s) {
    this.s = s
    this.pos = p5.createVector(p5.width/2 - this.s/2, p5.height/2 - this.s/2)
  }

  show(p5) {
    p5.push()
    p5.stroke(255)
    p5.strokeWeight(2)
    p5.noFill()
    p5.square(this.pos.x, this.pos.y, this.s)
    p5.pop()
  }
}

export default Square