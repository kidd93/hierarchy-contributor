const { prompt } = require('inquirer');
const { Manager, Engineer, Intern, questions } = require('./lib');
const positions = { Managers:[], Engineers:[], Interns:[] }; 

const init = () => {
    prompt(questions).then(a =>{
        if(!a.fillPosition) return console.log(positions);

        if(a.position=='Manager') positions.Managers.push(new Manager(a.name, a.id, a.email, a.officeNumber));
        if(a.position== 'Engineer') positions.Engineers.push(new Engineer(a.name, a.id, a.email, a.github));
        if(a.position== 'Intern') positions.Interns.push(new Intern(a.name, a.id, a.email, a.school));

        init();
    });
};

init();
    