const Engineer = require('../lib/Engineer');

const name = 'Mike', id=2, email='mike@test.com', github='mike@github.com';
const mike = new Engineer(name,id,email,github);

test('Can we get a github name?', () => expect(mike.getGithub()).toBe(github));
test('Is this an Engineer role?', () => expect(mike.getRole()).toBe('Engineer'));