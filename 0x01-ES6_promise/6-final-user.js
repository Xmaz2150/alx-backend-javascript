import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => {
      const newResults = [];
      results.map(
        (result) => {
          const newResult = {};

          newResult.status = result.status;

          if (result.status !== 'fulfilled') {
            [newResult.value] = result.reason.toString().split('\n');
          } else {
            newResult.value = result.value;
          }
          newResults.push(newResult);
          return newResult;
        },
      );
      return newResults;
    });
}
