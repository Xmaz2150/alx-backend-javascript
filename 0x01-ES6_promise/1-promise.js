export default function getFullResponseFromAP(success) {
  return new Promise((resolve) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      throw new Error('The fake API is not working currently');
    }
  });
}
