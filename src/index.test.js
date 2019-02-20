const Square = require("./sketch/square.js/index.js")

test('square is properly sized', () => {
  let square = new Square(200)
  expect(square.s).toBe(200)
}) 