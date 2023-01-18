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
  order: sample([
    1,
    2,
    3,
    4,
    5,
    6
  ]),
  name: sample([
    '김한동',
    '홍길동',
    '지니',
    '알라딘',
    '피오나',
    '슈렉'
  ]),
  studentNum: sample([
    '22300100',
    '22300424',
    '22300636',
    '21900335',
    '21500123',
    '21800036'
  ]),
  retake: sample([
    1,
    1,
    0,
    0,
    0,
    1
  ]),
  achievement: sample([
    78,
    80,
    95,
    58,
    98,
    88
  ]),
}));

export default users;