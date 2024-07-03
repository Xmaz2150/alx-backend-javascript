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
