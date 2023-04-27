const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    string = '';
    constructor(shape) {
        this.string = shape;
    }
    // setColor(color) {
    //     this.string = this.string + 
    // }

    present() {
        return this.string;
    }
}

class Triangle extends Shape {

    constructor(x, y, x2, y2, x3, y3, fill) {
        //console.log('in Triangle constructor');
        super('polygon points= "');
        this.string = '<' + this.present()
            + x + ',' + y + ' '
            + x2 + ',' + y2 + ' '
            + x3 + ',' + y3 + '" '
            + 'fill="' + fill + '" />';
    }
    render() {
        return this.string;
    }
}

class Circle extends Shape {
    constructor(x, y, radius, fill) {
        //console.log('in Triangle constructor');
        super('circle ');
        this.string = '<' + this.present()
            + ' cx="' + x + '" cy="' + y + '" r="' + radius + '"'
            + ' fill="' + fill + '" />';
    }
    render() {
        return this.string;
    }

}

class Square extends Shape{
    constructor(x, y, width, height, fill) {
        //console.log('in Triangle constructor');
        super('rect ');
        this.string = '<' + this.present()
            + ' x="' + x + '" y="' + y + '" width="' + width + '" height="' + height
            + '" fill="' + fill + '" />';
    }
    render() {
        return this.string;
    }
}

function shapeDetails(shape, color) {
    if (shape == 'triangle') {
        t = new Triangle(150, 0, 0, 250, 300, 250, color);
        return t.render();
    }
    if (shape == 'circle') {
        t = new Circle(150, 100, 80, color);
        return t.render();
    }
    if (shape == 'square') {
        t = new Square(10, 10, 5000, 5000, color);
        return t.render();
    }
}

//this generates the SVG file and how it will look like
const generateSVG = ({ text, textColor, shape, shapeColor }) =>


    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapeDetails(shape, shapeColor)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`;
//prompts the user will see
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'What text would you like?',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What text color would you like?',
        },
        {
            type: 'list',
            message: 'What shape would you like?',
            name: 'shape',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape?',
        },
    ])
    .then((answers) => {
        //console.log(answers);
        const SVGpageContent = generateSVG(answers);

        fs.writeFile('logo.svg', SVGpageContent, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
//when the user's answers are complete, it will generate the SVG file

