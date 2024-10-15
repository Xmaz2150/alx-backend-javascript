import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {

  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => {
      results.map(
        (result) => {
          if (result.status !== 'fulfilled') {
            result.value = result.reason.toString().split('\n')[0];
            delete result.reason;
          }
        },
      );
     return results;
    });
}
