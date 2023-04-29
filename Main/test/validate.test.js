
// expect(shapeDetails('circle', 'blue')).
//     toEqual('<circle  cx="150" cy="100" r="80" fill="orange" />');

const { Circle, Triangle, Square} = require('../index.js');

describe('Circle', () => {
  it('Checks the circle svg', () => {
    const circle = new Circle(150, 100, 80, 'blue');
    const result = circle.render();

    expect(result).toEqual('<circle  cx="150" cy="100" r="80" fill="blue" />');
  });
});
