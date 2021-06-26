
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const markdownGenerator = require('./utils/generateMarkdown');

const questions = [
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        }, {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        }, {
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
        },
    ];

