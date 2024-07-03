//task 1
export interface Teacher {
  readonly firstName: string;
  fullTimeEmployee: boolean;
  readonly lastName: string;
  location: string;
  [key: string]: any;
};

//task 2
export interface Directors extends Teacher {
  numberOfReports: number;
}

//task 3
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => `${firstName[0]}. ${lastName}`;

//task 4
export interface Student {
  firstName: string;
  lastName: string;
}

export interface StudentConstructor {
  (firstName: string, lastName: string): Student;
}

export class StudentClass implements Student{
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
