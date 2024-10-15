import { uploadPhoto, createUser } from './utils';

export default async function asyncUploader() {
  return Promise.allSettled([
    createUser(),
    uploadPhoto(),
  ])
    .then((results) => {
      const newResult = {
        photo: null,
        user: null,
      };
      let valid = 1;
      results.map(
        (result) => {
          if (result.status !== 'fulfilled') {
            valid = 0;
          }
          if ('firstName' in result.value) {
            newResult.user = result.value;
          } else {
            newResult.photo = result.value;
          }
          return result;
        },
      );

      if (!valid) {
        return {
          photo: null,
          user: null,
        };
      }

      return newResult;
    });
}
