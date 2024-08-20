import readDatabase from '../utils';

const path = process.argv[2];

export default class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(path)
      .then((data) => {
	const resStr = ['This is the list of our students']
        for (const [field, students] of Object.entries(data)) {
          resStr.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
	}
	response.status(200);
	response.send(resStr.join('\n'));
      })
      .catch((error) => {
	response.status(500);
	response.send('Cannot load the database');
      });
  };

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major
    readDatabase(path)
      .then((data) => {
        if (field === 'CS' || field === 'SWE') {
	  response.status(200);
	  response.send(`List: ${data[field].join(', ')}`);
	} else {
	  response.status(500);
	  response.send('Major parameter must be CS or SWE');
	}
      })
      .catch((error) => {
	response.status(500);
	response.send('Cannot load the database');
      });
  };
}
