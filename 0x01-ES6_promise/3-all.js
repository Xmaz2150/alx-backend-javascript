import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let description = '';

  return Promise.all([uploadPhoto(), createUser()])
    .then((user) => {
      description += `${user[0].body} `;
      description += `${user[1].firstName} ${user[1].lastName}`;
    })
    .catch(() => { console.log('Signup system offline'); })
    .finally(() => { console.log(description); });
}
