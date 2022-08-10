const Manager = require('../lib/Manager');

const name = 'Mike', id=2, email='mike@test.com', officeNumber=5;
const mike = new Manager(name,id,email,officeNumber);

test('Can we get an office number?', () => expect(mike.getOfficeNumber()).toBe(officeNumber));
test('Is this a manager role?', () => expect(mike.getRole()).toBe('Manager'));