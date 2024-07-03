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
