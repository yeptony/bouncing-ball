const Ball = require(",/ball")

setup = () => {
  let cnv = createCanvas(windowWidth, windowHeight)
  cnv.style('display', 'block')
  cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2)
}

draw = () => {
  background(0)
}