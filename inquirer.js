
var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        }, {
            type: 'input',
            message: 'Describe the application.',
            name: 'description',
        }, {
            type: 'input',
            message: 'List the table of contents.',
            name: 'contents',
        }, {
            type: 'input',
            message: 'What would this site be used for?',
            name: 'usage',
        }, {
            type: 'input',
            message: 'How do you install the application?',
            name: 'install',
        }, {
            type: 'input',
            message: 'List the collaborators.',
            name: 'collaborators',
        }, { 
            type: 'checkbox',
            message: 'Which licenses were used?',
            name: 'license',
            choices: [ 'MIT', 'Apache', 'GPL', 'none']
        }, {
            type: 'input',
            message: 'How do you test the application?',
            name: 'test',
            default: 'npm test',
        }, {
            type:'input',
            message: '',
            name: 'questions',
        }
    ])
    .then((response) => {
        // Use user feedback//
    })
    .catch ((error) => {
        if (error.isTylError) {
            //Prompt couldnt be rendered
        } else {
            //Something else went wrong
        }
    });


    // Title of ReadMe
    // Images or Video input
    // Links
    // Description
    // Colaborators
    // License
    // Technologies Used
    // Contact Information