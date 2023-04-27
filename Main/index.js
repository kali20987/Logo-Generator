const inquirer = require('inquirer');
const fs = require('fs');
//this generates the SVG file and how it will look like
const generateSVG = ({text, textColor, shape, shapeColor}) =>

`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

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
            type: 'input',
            name: 'shape',
            message: 'What shape would you like?',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape?',
        },
    ])
    .then((answers) => {
        const SVGpageContent = generateSVG(answers);

        fs.writeFile('logo.svg', SVGpageContent, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
//when the user's answers are complete, it will generate the SVG file

