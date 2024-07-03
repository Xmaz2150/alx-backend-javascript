//task 1
interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  [key: string]: any;
};

//task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

//task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}. ${lastName}`;

//task 4
interface Student {
  firstName: string;
  lastName: string;
}

interface StudentConstructor {
  (firstName: string, lastName: string): Student;
}

class StudentClass implements Student{
  firstName: string;
  lastName: string;
 
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName =  lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
