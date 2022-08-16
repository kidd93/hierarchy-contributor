const { prompt } = require('inquirer');
const { Manager, Engineer, Intern, questions } = require('./lib');
// const answers = require('./dist/index.html');
const answer = ['Manager', 'Engineer', 'Intern', 'Employee'];

prompt(questions).then(answer);

answers = (i) => {
    if(i>3) return;

    // let teamDiv = document.querySelector('.team');
    teamDiv.innerHTML = '';

    teamDiv.innerHTML += `
    <div class="card">
        <h4> <span class="${ Manager=== new Manager ? "Manager" : Engineer=== new Engineer ? "Engineer" : Employee=== new Employee ? "Employee": Intern=== new Intern ? "Intern"}"></span></h4>`
};

promptAnswers();