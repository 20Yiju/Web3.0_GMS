import { sample } from 'lodash';

// ----------------------------------------------------------------------

const rankUsers = [...Array(24)].map((_, index) => ({
//   id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    '마석재',
    '김소현',
    '정이주',
    '류지연'
  ]),
  rank: sample([
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]),
}));

export default rankUsers;
