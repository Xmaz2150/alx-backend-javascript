import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');
const route = express.Router();

route.get('/', AppController.getHomepage);

route.get('/students', StudentsController.getAllStudents);

route.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default route;
