const { prompt } = require('inquirer');
const { Manager, Engineer, Intern, questions } = require('./lib');

prompt(questions)