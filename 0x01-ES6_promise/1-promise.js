export default function getFullResponseFromAP(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      reject(Error("The fake API is not working currently"));
    }
  });
}
