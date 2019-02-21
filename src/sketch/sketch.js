import Square from "./square"
import Ball from "./ball"

let square
let ball

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, window.innerHeight)
    p5.stroke(255)
    square = new Square(p5, 600)
    ball = new Ball(p5, square.pos.x + square.s / 2, square.pos.y + 10, 10)
  }

  p5.draw = () => {
    p5.background(51)
    square.show(p5)
    ball.update(p5)
    ball.show(p5)
  }
}

export default sketch