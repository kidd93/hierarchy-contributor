/*Engineer function that collects users input. Partially with the help of the Employee data.*/
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name,id,email);
        this.github = github;
    };

    getGithub = () => this.github;
    getRole = () => "Engineer";
};

module.exports = Engineer;