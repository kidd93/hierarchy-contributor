/* Manager function that collects users input. Partially with the help of the Employee data. */
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber = () => this.officeNumber;
    getRole = () => 'Manager';
};

module.exports = Manager;