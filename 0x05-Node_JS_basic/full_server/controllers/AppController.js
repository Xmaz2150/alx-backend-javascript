export default class AppController {
  static getHomepage(request, response) {
    //It returns a 200 status and the message `Hello Holberton School!`
    response.send('Hello from App Controller');
  }
};
