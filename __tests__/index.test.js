import p5 from "p5"

class Square {
   constructor(s) {
      this.s = s
      this.pos = {
         x: 10,
         y: 10
      }
    }
} 

it('generates squares of given edge', () => {
   const square_10 = new Square(10)
   const square_20 = new Square(20)
   const square_30 = new Square(30)
   expect(square_10.s).toBe(10)
   expect(square_20.s).toBe(20)
   expect(square_30.s).toBe(30)
}) 