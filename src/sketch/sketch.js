const sketch = (p5) => {
  p5.setup = () => {
    let cnv = p5.createCanvas(p5.windowWidth, window.innerHeight)
  }

  p5.draw = () => {
    p5.background(51);
  }
}

export default sketch