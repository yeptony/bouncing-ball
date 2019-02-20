import Square from "./square"

let square

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, window.innerHeight)
    p5.stroke(255)
    square = new Square(p5, 100)
  }

  p5.draw = () => {
    p5.background(51)
    square.show(p5)
  }
}

export default sketch