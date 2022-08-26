/*Questions prompted in the terminal to gather data from the users responses.*/
const questions = [
    {
        type: 'confirm',
        name: 'fillPosition',
        message: 'Would you like to fill a position?',
    },
    {
        type: 'list',
        name: 'position',
        message: 'Which position would you like fill?',
        choices: ['Manager','Engineer','Intern'],
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
        when: ({fillPosition}) => fillPosition
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager\'s office number?',
        when: ({position}) => position == 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s GitHub?',
        when: ({position}) => position == 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your school?',
        when: ({position}) => position == 'Intern'
    }
];

module.exports = questions;