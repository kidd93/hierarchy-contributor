/*Intern function that collects users input. Partially with the help of the Employee data.*/
const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name,id,email, school){
        super(name,id,email);
        this.school = school;
    };

    getSchool = () => this.school;
    getRole = () => "Intern";
};

module.exports = Intern;