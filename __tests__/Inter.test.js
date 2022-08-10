const Intern = require('../lib/Intern');

const name = 'Mike', id=2, email='mike@test.com', school='NYC';
const mike = new Intern(name,id,email,school);

test('Can we get a school name?', () => expect(mike.getSchool()).toBe(school));
test('Is this a Intern role?', () => expect(mike.getRole()).toBe('Intern'));