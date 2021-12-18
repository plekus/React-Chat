export function getAvatar(id) {
  switch (id) {
    case 1:
      return require('../public/avatars/avatar_1.png');
    case 2:
      return require('../public/avatars/avatar_2.png');
    case 3:
      return require('../public/avatars/avatar_3.png');
    case 4:
      return require('../public/avatars/avatar_4.png');
    case 5:
      return require('../public/avatars/avatar_5.png');
    case 6:
      return require('../public/avatars/avatar_6.png');
    case 7:
      return require('../public/avatars/avatar_7.png');
    default:
      return require('../public/avatars/avatar_8.png');
  }
}
