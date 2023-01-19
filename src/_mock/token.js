import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  // name: faker.name.fullName(),
  // company: faker.company.name(),
  // isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'banned']),
  token: sample([
    'HW#1',
    'HW#2',
    'HW#3',
    'Midterm Exam',
    'FinalExam',
    'Quiz#1'
  ]),
  submission: sample([
    10,
    10,
    10,
    10,
    10,
    10
  ]),
  total_score: sample([
    100,
    50,
    50,
    100,
    50,
    100
  ]),
}));

export default users;