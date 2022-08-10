const Employee = require('../lib/Employee');

const name='John', id=3, email='john@test.com';
const John = new Employee(name,id,email);

test('Is the Employee an object?', () => expect(typeof(John)).toBe('object'));
test('Can we get an email?', () => expect(John.getEmail()).toBe(email));
test('Can we get a name?', () => expect(John.getName()).toBe(name));
test('Can we get an ID?', () => expect(John.getId()).toBe(id));
test('Is this an employee role?', () => expect(John.getRole()).toBe('Employee'));