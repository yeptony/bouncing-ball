const wWidth = 600
const wHeight = 400

class Square {
   constructor(s) {
     this.s = s
     this.pos = {
       x: wWidth / 2 - this.s / 2,
       y: wHeight / 2 - this.s / 2
     }
   }
} 

it('gives squares of given edge', () => {
   const square_10 = new Square(10)
   const square_20 = new Square(20)
   const square_30 = new Square(30)
   expect(square_10.s).toBe(10)
   expect(square_20.s).toBe(20)
   expect(square_30.s).toBe(30)
})

it('places a square centered in the window', () => {
  const square_centered = new Square(200)
  expect(square_centered.pos.x).toBe(200)
  expect(square_centered.pos.y).toBe(100)
})