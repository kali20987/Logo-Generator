
//this code handles the tests to see if a shape has been selected
const { Circle, Triangle, Square} = require('../index.js');

describe('Circle', () => {
  it('Checks the circle svg', () => {
    const circle = new Circle(150, 100, 80, 'blue');
    const result = circle.render();

    expect(result).toEqual('<circle  cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  it('Checks the square svg', () => {
    const square = new Square(10, 10, 5000, 5000, 'blue');
    const result = square.render();

    expect(result).toEqual('<rect  x="10" y="10" width="5000" height="5000" fill="blue" />');
  });
});

describe('Triangle', () => {
  it('Checks the triangle svg', () => {
    const triangle = new Triangle(150, 0, 0, 250, 300, 250, 'blue');
    const result = triangle.render();

    expect(result).toEqual('<polygon points= "150,0 0,250 300,250" fill="blue" />');
  });
});
